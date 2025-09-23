namespace CrtLandingPage
{
	using Terrasoft.Core.Factories;
	using Terrasoft.Core;
	using CrtContentDesigner.Contracts;
	using CrtContentDesigner;
	using CrtContentDesigner.Repositories;
	using CrtContentDesigner.Models;
	using CoreConfig = Terrasoft.Core.Configuration;
	using Terrasoft.Configuration.LandingiIntegration;

	/// <summary>
	/// Implements the ITemplateSave interface to save templates.
	/// </summary>
	[DefaultBinding(typeof(ITemplateLoad), Name = "LandingPage")]
	[DefaultBinding(typeof(ITemplateSave), Name = "LandingPage")]
	internal class LandingPageTemplateService: ITemplateSave, ITemplateLoad
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="LandingPageTemplateService"/> class.
		/// </summary>
		/// <param name="userConnection"></param>
		public LandingPageTemplateService(UserConnection userConnection) {
			_userConnection = userConnection;
			_bfTemplateRepository =
#pragma warning disable
				ClassFactory.Get<ITemplateRepository>("DefaultHTML", new ConstructorArgument("userConnection", userConnection));
#pragma warning restore
		}

		private string _clientScriptCdnUrl = "https://webtracking-v01.creatio.com/JS/";
#pragma warning disable
		private readonly ITemplateRepository _bfTemplateRepository;
#pragma warning restore
		private readonly UserConnection _userConnection;
		private string WebhookServiceURL =>
			CoreConfig.SysSettings.GetValue(_userConnection, "WebhookURL").ToString();

		private string AddClientScripts(string pageHtml, string recordId) {
			var apiKeyResponse = ApiKeyProvider.GetOrCreateWebhookApiKey("Webhook Account Service Identity", "Web Form");
			if (!apiKeyResponse.Success) {
				return pageHtml;
			}
			var serviceUrl = $"{WebhookServiceURL}{apiKeyResponse.ApiKey}";
			var webhookScript = $"\t<script src=\"{_clientScriptCdnUrl}crt-landing-page.js\"></script>" +
				"\r\n\t<script>" +
				$"\r\n\t\tcrtLanding.webhookServiceUrl = '{serviceUrl}';" +
				$"\r\n\t\tcrtLanding.setParameter('LandingPageId', '{recordId}');" +
				"\r\n\t</script>" +
				"\r\n</head>";
			return pageHtml.Replace("</head>", webhookScript);
		}

		/// <inheritdoc cref="ITemplateSave.HandlerCode"/>
		public string HandlerCode => "LandingPage";

		/// <summary>
		/// The webhook api key provider.
		/// </summary>
		private IWebhookApiKeyProvider _apiKeyProvider;
		public IWebhookApiKeyProvider ApiKeyProvider {
			get => _apiKeyProvider ?? (_apiKeyProvider = new ApiKeyProvider(_userConnection));
			set => _apiKeyProvider = value;
		}

		/// <inheritdoc cref="ITemplateSave.Priority"/>
		public int Priority => 10;

		/// <summary>
		/// Saves the template with the specified save request details.
		/// </summary>
		/// <param name="saveRequest">The details of the save request.</param>
		/// <returns>A boolean value indicating whether the save operation was successful.</returns>
		public bool SaveTemplate(SaveTemplateRequest saveRequest) {
			saveRequest.Content.PageHtml = AddClientScripts(saveRequest.Content.PageHtml, saveRequest.RecordId);
			return _bfTemplateRepository.SaveTemplate(saveRequest.Content);
		}

		public TemplateModel LoadTemplate(LoadTemplateRequest loadRequest, TemplateModel template) {
			return _bfTemplateRepository.LoadTemplate(loadRequest.RecordId);
		}
	}
}

