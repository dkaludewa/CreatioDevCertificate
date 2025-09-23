namespace CrtEmailDesigner
{
	using System;
	using System.Linq;
	using CrtEmailDesigner.Contracts;
	using CrtEmailDesigner.Interfaces;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;

	#region Class: EmailBuilderTemplateService

	/// <summary>
	/// Implements the IExtendedEmailCopyService interface to copy email templates.
	/// </summary>
	[DefaultBinding(typeof(IExtendedEmailCopyService))]
	internal class BfEmailTemplateExtendedCopyService : IExtendedEmailCopyService
	{

		#region Fields: Private

		private readonly IBfEmailTemplateRepository _bfTemplateRepository;

		#endregion

		#region Constructors: Public

		public BfEmailTemplateExtendedCopyService(UserConnection userConnection) {
			_bfTemplateRepository =
				ClassFactory.Get<IBfEmailTemplateRepository>(new ConstructorArgument("userConnection", userConnection));
		}

		#endregion

		#region Methods: Public

		/// <summary>
		/// Copies BFEmailTemplate for provided bulk email ids
		/// </summary>
		/// <param name="request"></param>
		/// <returns></returns>
		public ExtendedEmailCopyResult ExtendCopy(ExtendedEmailCopyRequest request) {
			var result = new ExtendedEmailCopyResult {
				NewEmailId = request.NewEmailId,
				OldEmailId = request.OldEmailId
			};
			try {
				if (_bfTemplateRepository == null) {
					result.IsSuccess = false;
					return result;
				}
				var templates = _bfTemplateRepository.FetchAllByEmailId(request.OldEmailId);
				if (templates.Any()) {
					var newTemplates = templates.Select(template => {
						return new EmailDesignerTemplateModel {
							AmpHtml = template.AmpHtml,
							EmailId = request.NewEmailId,
							Language = template.Language,
							LanguageId = template.LanguageId,
							PageHtml = template.PageHtml,
							PageJson = template.PageJson,
							IsDefault = template.IsDefault,
							TemplateVersion = template.TemplateVersion
						};
					}).ToList();
					_bfTemplateRepository.CreateMany(newTemplates);
				}
				result.IsSuccess = true;
			} catch (Exception ex) {
				result.Error = ex;
				result.IsSuccess = false;
			}
			return result;
		}

		#endregion

	}

	#endregion

}

