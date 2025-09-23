﻿namespace CrtGoogleAnalytics
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using CrtGoogleAnalytics.API.Models;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using global::Common.Logging;

	/// <summary>
	/// Repository for storing TouchPoints data obtained from the GA.
	/// </summary>
	[DefaultBinding(typeof(IGoogleAnalyticsRepository))]
	internal class GoogleAnalyticsRepository : TouchPointRepositoryBase, IGoogleAnalyticsRepository
	{

		#region Class: WebSessionByCityComparer

		private class WebSessionByCityComparer : IEqualityComparer<GAWebSessionModel>
		{
			public bool Equals(GAWebSessionModel x, GAWebSessionModel y) => x.CityId == y.CityId;
			public int GetHashCode(GAWebSessionModel obj) => $"{obj?.CityId}".GetHashCode();
		}

		#endregion

		#region Class: WebActionByPageComparer

		private class WebActionByPageComparer : IEqualityComparer<GAWebActionModel>
		{
			public bool Equals(GAWebActionModel x, GAWebActionModel y) => x.FullPageUrl == y.FullPageUrl && x.PageTitle == y.PageTitle;
			public int GetHashCode(GAWebActionModel obj) => $"{obj.FullPageUrl}{obj.PageTitle}".GetHashCode();
		}

		#endregion

		#region Fields: Private

		private static readonly ILog _logger = LogManager.GetLogger("GoogleAnalytics");

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Constructor for <see cref="GoogleAnalyticsRepository"/>.
		/// </summary>
		/// <param name="userConnection"></param>
		public GoogleAnalyticsRepository(UserConnection userConnection) {
			UserConnection = userConnection;
			CodeColumnName = "GACode";
		}

		#endregion

		#region Methods: Private

		private void CleanupUrls(ref IEnumerable<GAWebActionModel> actions) =>
			actions.ForEach(a => a.FullPageUrl = CleanupUrl(a.FullPageUrl ?? ""));

		private void CleanupUrls(ref IEnumerable<GAWebSessionModel> actions) =>
			actions.ForEach(a => a.PageReferrer = CleanupUrl(a.PageReferrer ?? ""));

		private Dictionary<string, Guid> ActualizeCities(IEnumerable<GAWebSessionModel> visits) {
			var countriesWithCities = visits
				.Where(x => !string.IsNullOrWhiteSpace(x.CityId))
				.Select(x => x.CountryCode)
				.Distinct()
				.Select(code => (
					code,
					visits.Where(x => x.CountryCode == code)
						.Distinct(new WebSessionByCityComparer())
						.Select(x => x.CityId)
				))
				.ToDictionary(x => x.code, x => x.Item2);
			return GetCityIds(countriesWithCities, useRegion: false, cityIdColumn: "GACityId");
		}

		private string GetReferrerType(string referrer) => string.IsNullOrWhiteSpace(referrer) ? "direct" : "website";

		private Guid AddRowData(Insert insert, GAWebSessionModel visit, Guid visitorId) {
			var id = Guid.NewGuid();
			var nullGuid = Column.Parameter(DBNull.Value, new GuidDataValueType(UserConnection.DataValueTypeManager));
			var shortCityCode = GetCityCode(visit.CountryCode, visit.CityId);
			var referrerType = GetReferrerType(visit.PageReferrer);
			var parameters = new Dictionary<string, string> {
				{ "bpmRef", visit.PageReferrer },
				{ "utm_medium", visit.Medium },
				{ "utm_source", visit.Source },
				{ "utm_campaign", visit.Campaign }
			};
			var sourceChannel = SourceHelper.ComputeMediumAndSource(parameters);
			insert.Values()
				.Set("Id", Column.Parameter(id))
				.Set("SessionId", Column.Parameter(visit.SessionId ?? ""))
				.Set("StartDate", Column.Parameter(visit.SessionStart))
				.Set("LastActionDateTime", Column.Parameter(visit.SessionStart))
				.Set("Duration", Column.Parameter(0))
				.Set("CityStr", Column.Parameter(visit.CityId ?? ""))
				.Set("CountryStr", Column.Parameter(visit.CountryCode ?? ""))
				.Set("CountryCode", Column.Parameter(visit.CountryCode ?? ""))
				.Set("LanguageStr", Column.Parameter(visit.LanguageCode ?? ""))
				.Set("WebAnalyticsVisitorId", Column.Parameter(visitorId))
				.Set("GASessionId", Column.Parameter(visit.SessionStr))
				.Set("PageReferrer", Column.Parameter(CleanupUrl(visit.PageReferrer) ?? ""))
				.Set("ReferrerTypeStr", Column.Parameter(referrerType))
				.Set("ReferrerUrl", Column.Parameter(CleanupUrl(visit.PageReferrer) ?? ""))
				.Set("ReferrerNameStr", Column.Const(""))
				.Set("ReferrerKeyword", Column.Const(""))
				.Set("RegionCode", Column.Const(""))
				.Set("RegionStr", Column.Const(""))
				.Set("IP", Column.Const(""))
				.Set("UtmSourceStr", Column.Parameter(visit.Source ?? ""))
				.Set("UtmMediumStr", Column.Parameter(visit.Medium ?? ""))
				.Set("UtmCampaignStr", Column.Parameter(visit.Campaign ?? ""))
				.Set("UtmContentStr", Column.Const(""))
				.Set("UtmTermStr", Column.Const(""))
				.Set("UtmIdStr", Column.Const(""))
				.Set("DeviceStr", Column.Const(""))
				.Set("PlatformStr", Column.Const(""))
				.Set("Location", Column.Const(""))
				.Set("RegionId", nullGuid)
				.TrySetLookupValue("ReferrerTypeId", LookupValues["ReferrerType"], referrerType)
				.TrySetLookupValue("CountryId", LookupValues["Country"], visit.CountryCode, true)
				.TrySetLookupValue("CityId", LookupValues["City"], shortCityCode)
				.TrySetLookupValue("LanguageId", LookupValues["Language"], visit.LanguageCode, true);
			if (sourceChannel.Source.IsNotEmpty()) {
				insert.Set("SourceId", Column.Parameter(sourceChannel.Source));
			} else {
				insert.Set("SourceId", nullGuid);
			}
			if (sourceChannel.Medium.IsNotEmpty()) {
				insert.Set("ChannelId", Column.Parameter(sourceChannel.Medium));
			} else {
				insert.Set("ChannelId", nullGuid);
			}
			return id;
		}

		private Dictionary<Guid, GAWebSessionModel> InsertTouches(IDictionary<string, Guid[]> visitorsMapping,
				IEnumerable<GAWebSessionModel> newVisits) {
			var result = new Dictionary<Guid, GAWebSessionModel>();
			var insert = new Insert(UserConnection).Into("Touch");
			foreach (var visit in newVisits) {
				if (!visitorsMapping.ContainsKey(visit.VisitorCode)) {
					continue;
				}
				var visitorIds = visitorsMapping[visit.VisitorCode];
				foreach (var visitorId in visitorIds) {
					var rowId = AddRowData(insert, visit, visitorId);
					result.Add(rowId, visit);
				}
			}
			if (insert.ColumnValues.IsNotEmpty()) {
				insert.Execute();
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeReferrerTypes(IEnumerable<string> referrerTypes) {
			var types = referrerTypes
				.Where(x => !string.IsNullOrWhiteSpace(x))
				.Distinct();
			var existingReferrerTypes = GetExistingLookupValues("ReferrerType");
			var newTypes = types
				.Where(x => !existingReferrerTypes.Keys.Contains(x))
				.Select(x => (x, x));
			if (newTypes.Any()) {
				var result = SaveNewReferrerTypes(newTypes);
				existingReferrerTypes.AddRange(result);
			}
			return existingReferrerTypes;
		}

		private string GetActionPageTitle(GAWebActionModel action) {
			if (!string.IsNullOrWhiteSpace(action.PageTitle)) {
				return action.PageTitle;
			}
			if (!Uri.TryCreate(action.FullPageUrl, UriKind.Absolute, out var uri)) {
				return string.Empty;
			}
			var domain = uri.Authority.StartsWith("www.") ? uri.Authority.Substring(4) : uri.Authority;
			return domain + uri.LocalPath;
		}

		private Dictionary<string, Guid> GetExistingPages(Dictionary<string, GAWebActionModel> webPages) {
			var pages = new Dictionary<string, Guid>();
			var pageTitles = webPages.Values
				.Select(x => GetActionPageTitle(x))
				.Where(x => !string.IsNullOrWhiteSpace(x));
			var pageUrls = webPages.Values
				.Where(x => !string.IsNullOrWhiteSpace(x.FullPageUrl))
				.Select(x => x.FullPageUrl);
			if (!pageTitles.Any() && !pageUrls.Any()) {
				return pages;
			}
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "WebPage") {
				UseAdminRights = false,
				IsDistinct = true,
			};
			esq.AddColumn("Id");
			esq.AddColumn("Name");
			esq.AddColumn("Url");
			var rootFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.And);
			var innerUrlsFilter = new EntitySchemaQueryFilterCollection(esq, LogicalOperationStrict.Or);
			if (pageTitles.Any()) {
				var titleFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", pageTitles);
				rootFilter.Add(titleFilter);
			}
			if (pageUrls.Any()) {
				foreach (var url in pageUrls) {
					var urlFilter = esq.CreateFilterWithParameters(FilterComparisonType.Contain, "Url", url);
					innerUrlsFilter.Add(urlFilter);
				}
			}
			rootFilter.Add(innerUrlsFilter);
			esq.Filters.Add(rootFilter);
			var entities = esq.GetEntityCollection(UserConnection);
			if (entities.Count > 0) {
				foreach (var entity in entities) {
					var pageId = entity.GetTypedColumnValue<Guid>("Id1");
					var pageTitle = entity.GetTypedColumnValue<string>("Name");
					var pageUrl = entity.GetTypedColumnValue<string>("Url");
					var pageCode = GetWebPageCode(pageTitle, pageUrl);
					if (!pages.ContainsKey(pageCode)) {
						pages.Add(pageCode, pageId);
					}
				}
			}
			return pages;
		}

		private Dictionary<string, Guid> SaveNewWebPages(IEnumerable<GAWebActionModel> newActions) {
			var result = new Dictionary<string, Guid>();
			var chunks = newActions.SplitOnChunks(200);
			foreach (var chunk in chunks) {
				var insert = new Insert(UserConnection).Into("WebPage");
				foreach (var action in chunk) {
					var id = Guid.NewGuid();
					var pageTitle = GetActionPageTitle(action);
					insert.Values()
						.Set("Id", Column.Parameter(id))
						.Set("Name", Column.Parameter(pageTitle))
						.Set("Url", Column.Parameter(action.FullPageUrl));
					var pageCode = GetWebPageCode(pageTitle, action.FullPageUrl);
					result.Add(pageCode, id);
				}
				insert.Execute();
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeWebPage(IEnumerable<GAWebActionModel> actions) {
			var webPages = actions
				.Distinct(new WebActionByPageComparer())
				.Where(x => !string.IsNullOrWhiteSpace(x.FullPageUrl) || !string.IsNullOrWhiteSpace(x.PageTitle))
				.ToDictionary(x => GetWebPageCode(GetActionPageTitle(x), x.FullPageUrl));
			var chunks = webPages.SplitOnChunks(chunkSize: 100);
			var result = new Dictionary<string, Guid>();
			foreach (var chunk in chunks) {
				var pages = chunk.ToDictionary(x => x.Key, x => x.Value);
				var existingPages = GetExistingPages(pages);
				var newPages = pages.Where(x => !existingPages.Keys.Contains(x.Key));
				if (newPages.Any()) {
					var savedPages = SaveNewWebPages(newPages.Select(x => x.Value));
					existingPages.AddRangeIfNotExists(savedPages);
				}
				result.AddRangeIfNotExists(existingPages);
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeExistedTouchAction(IEnumerable<GAWebActionModel> actions) {
			var result = new Dictionary<string, Guid>();
			var actionIds = actions
				.Select(x => x.ActionId)
				.Distinct();
			var chunks = actionIds.SplitOnChunks(chunkSize: 200);
			foreach (var chunk in chunks) {
				var select = new Select(UserConnection)
					.Column("WebPageId")
					.Column("ActionId")
				.From("TouchAction")
				.Where("ActionId").In(Column.Parameters(chunk)) as Select;
				select.SpecifyNoLockHints();
				select.ExecuteReader(x => {
					var webPageId = x.GetColumnValue<Guid>("WebPageId");
					if (!webPageId.IsEmpty()) {
						var actionId = x.GetColumnValue<string>("ActionId");
						AddIfNotExists(result, actionId, webPageId);
					}
				});
			}
			return result;
		}

		private Dictionary<string, Guid> ActualizeExistedTouches(IEnumerable<GAWebActionModel> actions) {
			var result = new Dictionary<string, Guid>();
			var sessionIds = actions.Select(x => x.SessionId).Distinct();
			var chunks = sessionIds.SplitOnChunks(chunkSize: 200);
			foreach (var chunk in chunks) {
				var select = new Select(UserConnection)
					.Column("Id")
					.Column("GASessionId")
				.From("Touch")
				.Where("SessionId").In(Column.Parameters(chunk)) as Select;
				select.SpecifyNoLockHints();
				select.ExecuteReader(x => {
					var sessionStr = x.GetColumnValue<string>("GASessionId");
					if (!string.IsNullOrWhiteSpace(sessionStr)) {
						var id = x.GetColumnValue<Guid>("Id");
						AddIfNotExists(result, sessionStr, id);
					}
				});
			}
			return result;
		}

		private void ActualizeLookups(IEnumerable<GAWebActionModel> actions) {
			var actionTypes = actions.Select(x => x.EventName);
			LookupValues["TouchActionType"] = ActualizeTouchActionTypes(actionTypes);
			LookupValues["WebPage"] = ActualizeWebPage(actions);
			LookupValues["TouchAction"] = ActualizeExistedTouchAction(actions);
			LookupValues["Touch"] = ActualizeExistedTouches(actions);
		}

		private void ActualizeLookups(IEnumerable<GAWebSessionModel> visits) {
			var countryCodes = visits.Select(x => x.CountryCode);
			var referrerTypes = visits.Select(x => GetReferrerType(x.PageReferrer));
			var languageCodes = visits.Select(x => x.LanguageCode);
			LookupValues["ReferrerType"] = ActualizeReferrerTypes(referrerTypes);
			LookupValues["Country"] = ActualizeCountries(countryCodes, isUpperCase: true);
			LookupValues["City"] = ActualizeCities(visits);
			LookupValues["Language"] = ActualizeLanguages(languageCodes);
		}

		private int InsertActionsIntoDB(IEnumerable<(string code, GAWebActionModel action)> actions) {
			var insert = new Insert(UserConnection).Into("TouchAction");
			foreach (var (code, action) in actions) {
				var pageCode = GetWebPageCode(GetActionPageTitle(action), action.FullPageUrl);
				insert.Values()
					.Set("ActionId", Column.Parameter(code ?? ""))
					.Set("Title", Column.Parameter(GetActionPageTitle(action) ?? ""))
					.Set("Url", Column.Parameter(action.FullPageUrl))
					.Set("ActionDate", Column.Parameter(action.DateTime))
					.Set("EventsCount", Column.Parameter(action.EventsCount))
					.Set("TypeStr", Column.Parameter(action.EventName ?? ""))
					.TrySetLookupValue("TouchId", LookupValues["Touch"], action.SessionStr)
					.TrySetLookupValue("WebPageId", LookupValues["WebPage"], pageCode)
					.TrySetLookupValue("TypeId", LookupValues["TouchActionType"], action.EventName);
			}
			if (insert.ColumnValues.IsNotEmpty()) {
				return insert.Execute();
			}
			return 0;
		}

		private GoogleAnalyticsRepositoryResult InsertTouchActions(IEnumerable<GAWebActionModel> actions, DBExecutor executor) {
			var affectedRows = 0;
			var errorsCount = 0;
			var lastErrorMessage = string.Empty;
			if (actions == null || actions.IsEmpty()) {
				return new GoogleAnalyticsRepositoryResult(affectedRows);
			}
			var chunks = actions.SplitOnChunks(chunkSize: 50);
			foreach (var chunk in chunks) {
				var rowsCount = 0;
				executor.StartTransaction();
				try {
					var newActionDetails = chunk
						.Where(x => !LookupValues["TouchAction"].ContainsKey(x.ActionId));
					var newActions = newActionDetails.Select(action => {
						var pageCode = GetWebPageCode(GetActionPageTitle(action), action.FullPageUrl);
						if (LookupValues["WebPage"].TryGetValue(pageCode, out var pageId)) {
							AddIfNotExists(LookupValues["TouchAction"], action.ActionId, pageId);
						}
						return (action.ActionId, action);
					}).ToList();
					if (newActions.Any()) {
						rowsCount = InsertActionsIntoDB(newActions);
					}
					executor.CommitTransaction();
				} catch (Exception ex) {
					executor.RollbackTransaction();
					_logger.Error($"{nameof(GoogleAnalyticsRepository)}.InsertTouchActions. Exception. ", ex);
					lastErrorMessage = ex.Message;
					errorsCount++;
					rowsCount = 0;
				}
				affectedRows += rowsCount;
			}
			return new GoogleAnalyticsRepositoryResult(affectedRows, actions.Count(), errorsCount, lastErrorMessage);
		}

		private Dictionary<string, Guid> ActualizeLanguages(IEnumerable<string> languageCode) {
			var codes = languageCode
				.Where(x => !string.IsNullOrWhiteSpace(x))
				.Select(x => x.ToUpper())
				.Distinct();
			return GetLookupIdByCode("SysLanguage", "Code", codes, isUpperCase: true);
		}

		private IEnumerable<string> GetExistedSessionIds(IEnumerable<string> visitIds) {
			var gaSessionIds = new List<string>();
			if (visitIds.IsEmpty()) {
				return gaSessionIds;
			}
			var select = new Select(UserConnection)
				.Column("GASessionId")
				.From("Touch")
				.Where("SessionId").In(Column.Parameters(visitIds)) as Select;
			select.SpecifyNoLockHints();
			select.ExecuteReader(reader => {
				var gaSessionId = reader.GetColumnValue<string>("GASessionId");
				gaSessionIds.Add(gaSessionId);
			});
			return gaSessionIds;
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Stores web sessions as touches for visitor specified.
		/// </summary>
		/// <param name="sessions">Collection of web sessions.</param>
		/// <param name="visitorId">Creatio web analytics visitor id.</param>
		/// <returns>Save operation result.</returns>
		public GoogleAnalyticsRepositoryResult SaveSessions(IEnumerable<GAWebSessionModel> sessions, Guid visitorId) {
			if (!sessions.Any()) {
				return new GoogleAnalyticsRepositoryResult();
			}
			var key = sessions.FirstOrDefault().VisitorCode;
			return SaveSessions(sessions, new Dictionary<string, Guid[]> {
				{ key, new Guid[] { visitorId } }
			});
		}

		/// <summary>
		/// Stores web actions as touch actions.
		/// </summary>
		/// <param name="actions">Collection of web actions.</param>
		/// <returns>The number of stored records.</returns>
		public GoogleAnalyticsRepositoryResult SaveActions(IEnumerable<GAWebActionModel> actions) {
			CleanupUrls(ref actions);
			ActualizeLookups(actions);
			var affectedRows = 0;
			var errorsCount = 0;
			var lastErrorMessage = string.Empty;
			if (actions == null || actions.IsEmpty()) {
				return new GoogleAnalyticsRepositoryResult(affectedRows);
			}
			using (var executor = UserConnection.EnsureDBConnection()) {
				var existingSessions = actions
					.Select(x => x.SessionStr)
					.Where(x => !string.IsNullOrWhiteSpace(x))
					.Where(x => LookupValues["Touch"].ContainsKey(x))
					.Distinct();
				foreach (var sessionStr in existingSessions) {
					var sessionActions = actions.Where(x => x.SessionStr == sessionStr);
					if (sessionActions.IsEmpty()) {
						continue;
					}
					var result = InsertTouchActions(sessionActions, executor);
					affectedRows += result.AffectedRows;
					errorsCount += result.ErrorsCount;
					if (result.ErrorsCount > 0) {
						lastErrorMessage = result.LastErrorMessage;
					}
				}
			}
			return new GoogleAnalyticsRepositoryResult(affectedRows, actions.Count(), errorsCount, lastErrorMessage);
		}

		/// <summary>
		/// Returns last session date by google analytics client id.
		/// </summary>
		/// <param name="clientId">Google analytics client id.</param>
		/// <returns>The last stored Touch date.</returns>
		public DateTime GetLastSessionDateByVisitorId(string clientId) {
			var select = new Select(UserConnection)
				.Column(Func.Max("StartDate"))
				.From("Touch").As("T")
				.InnerJoin("WebAnalyticsVisitor").As("WAV")
					.On("WAV", "Id").IsEqual("T", "WebAnalyticsVisitorId")
				.Where("WAV", "VisitorId").IsEqual(Column.Parameter(clientId)) as Select;
			select.SpecifyNoLockHints();
			return select.ExecuteScalar<DateTime>();
		}

		/// <summary>
		/// Stores web sessions as touches for multiple visitors.
		/// </summary>
		/// <param name="sessions">Collection of web sessions.</param>
		/// <param name="visitorId">Creatio web analytics visitor ids mapping.</param>
		/// <returns>Save operation result.</returns>
		public GoogleAnalyticsRepositoryResult SaveSessions(IEnumerable<GAWebSessionModel> sessions, IDictionary<string,
				Guid[]> visitorsMapping) {
			sessions.CheckArgumentNull("sessions");
			CleanupUrls(ref sessions);
			ActualizeLookups(sessions);
			var affectedRows = 0;
			var errorsCount = 0;
			var lastErrorMessage = string.Empty;
			if (sessions == null || sessions.IsEmpty()) {
				return new GoogleAnalyticsRepositoryResult(affectedRows);
			}
			using (var executor = UserConnection.EnsureDBConnection()) {
				var visits = sessions
					.GroupBy(x => x.SessionStr, StringComparer.OrdinalIgnoreCase)
					.ToDictionary(x => x.Key, x => x.First(), StringComparer.OrdinalIgnoreCase);
				// Remember abount MSSQL parameters limit 2100. (Touch columns quantity * chunk size) should be < 2100, because we use insertMany
				var chunks = visits.SplitOnChunks(chunkSize: 50);
				foreach (var chunk in chunks) {
					var rowsCount = 0;
					executor.StartTransaction();
					try {
						var existedSessions = GetExistedSessionIds(chunk.Select(x => x.Value.SessionId));
						var newVisits = chunk
							.Where(x => !existedSessions.Contains(x.Key))
							.Select(x => x.Value);
						var newTouches = InsertTouches(visitorsMapping, newVisits);
						rowsCount += newTouches.Count;
						executor.CommitTransaction();
					} catch (Exception ex) {
						executor.RollbackTransaction();
						_logger.Error($"{nameof(GoogleAnalyticsRepository)}.SaveSessions. Exception. ", ex);
						lastErrorMessage = ex.Message;
						errorsCount++;
						rowsCount = 0;
					}
					affectedRows += rowsCount;
				}
			}
			return new GoogleAnalyticsRepositoryResult(affectedRows, sessions.Count(), errorsCount, lastErrorMessage);
		}

		#endregion

	}
}
