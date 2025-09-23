namespace Terrasoft.Core.Process.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using CrtLandingPage;
	using Newtonsoft.Json.Linq;
	using Terrasoft.Configuration;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;


	#region Class: CopyLandingPageUserTask
	/// <exclude/>
	public partial class CopyLandingPageUserTask
	{
		#region Constants: Private

		private const string _landingPageShcemaName = "LandingPage";

		#endregion

		#region Properties: Private

		private ILandingPageRepository _landingPageRepository;
		private ILandingPageRepository LandingPageRepository =>
			_landingPageRepository ?? (_landingPageRepository = ClassFactory.Get<ILandingPageRepository>());

		#endregion

		#region Methods: Private

		private bool CopyLandingPage() {
			var newLandingPage = UserConnection.EntitySchemaManager.GetInstanceByName(_landingPageShcemaName).CreateEntity(UserConnection);
			newLandingPage.SetDefColumnValues();
			newLandingPage.SetColumnValue("Name", LandingPageName);
			newLandingPage.SetColumnValue("Goal", LandingPageGoal);
			NewLandingPageId = newLandingPage.PrimaryColumnValue;
			return newLandingPage.Save();
		}

		private bool CopyHtmlPage() {
			var existingHtmlPage = LandingPageRepository.GetLandingHtmlPages(LandingPageId)?.First();
			var newHtmlPage = LandingPageRepository.GetLandingHtmlPages(NewLandingPageId)?.First();
			newHtmlPage.SetColumnValue("PageJson", FindAndReplaceFormId(existingHtmlPage.GetTypedColumnValue<string>("PageJson")));
			newHtmlPage.SetColumnValue("PageHtml", FindAndReplaceLandingPageId(existingHtmlPage.GetTypedColumnValue<string>("PageHtml")));
			return newHtmlPage.Save();
		}

		private string FindAndReplaceFormId(string json) {
			if (string.IsNullOrEmpty(json)) {
				return string.Empty;
			}
			var jsonObj = JObject.Parse(json);
			var formElements = new List<JToken>();
			FindElement(jsonObj, "form", formElements);
			foreach (var form in formElements) {
				var formIdElements = new List<JToken>();
				var newGuid = Guid.NewGuid().ToString();
				FindElement(form, "formId", formIdElements);
				foreach (var formId in formIdElements) {
					ReplaceFormId(formId, newGuid);
				}
			}
			return jsonObj.ToString();
		}

		private void ReplaceFormId(JToken formId, string newId) {
			if (formId.Type == JTokenType.String) {
				formId.Replace(newId);
				return;
			}
			if (formId.Type == JTokenType.Object && formId?["attributes"]?["value"] != null) {
				formId["attributes"]?["value"].Replace(newId);
			}
		}

		private static void FindElement(JToken token, string searchFor, List<JToken> results) {
			if (token.Type == JTokenType.Object) {
				JObject obj = (JObject)token;
				if (obj.ContainsKey(searchFor)) {
					results.Add(obj[searchFor]);
				}
				foreach (var property in obj.Properties()) {
					FindElement(property.Value, searchFor, results);
				}
			}
			else if (token.Type == JTokenType.Array) {
				foreach (var item in token) {
					FindElement(item, searchFor, results);
				}
			}
		}

		private string FindAndReplaceLandingPageId(string html) {
			if (string.IsNullOrEmpty(html)) {
				return string.Empty;
			}
			return html.Replace(LandingPageId.ToString(), NewLandingPageId.ToString());
		}


		#endregion

		#region Methods: Protected

		protected override bool InternalExecute(ProcessExecutingContext context) {
			const string failedToCopyMsg = "{\"error\":\"Failed to save landing copy\"}";
			var isLandingCopied = CopyLandingPage();
			if (!isLandingCopied) {
				MsgChannelUtilities.PostMessage(UserConnection, nameof(CopyLandingPageUserTask), failedToCopyMsg);

			}
			var isHtmlCopied = CopyHtmlPage();
			if (!isHtmlCopied) {
				MsgChannelUtilities.PostMessage(UserConnection, nameof(CopyLandingPageUserTask), failedToCopyMsg);
			}
			return true;
		}

		#endregion

		#region Methods: Public

		public override bool CompleteExecuting(params object[] parameters) {
			return base.CompleteExecuting(parameters);
		}

		public override void CancelExecuting(params object[] parameters) {
			base.CancelExecuting(parameters);
		}

		public override string GetExecutionData() {
			return string.Empty;
		}

		public override ProcessElementNotification GetNotificationData() {
			return base.GetNotificationData();
		}

		#endregion

	}

	#endregion

}