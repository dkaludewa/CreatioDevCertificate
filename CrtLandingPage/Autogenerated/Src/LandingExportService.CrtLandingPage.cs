namespace CrtLandingPage.Services
{
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Net;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;
	using Terrasoft.Web.Http.Abstractions;
	using System.IO;
	using System.Text;
	using System;
	using System.IO.Compression;
	using System.Net.Http;

	#region Class: LandingService

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class LandingExportService: BaseService
	{

		#region Properties: Private

		private ILandingPageRepository _landingPageRepository;
		private ILandingPageRepository LandingPageRepository =>
			_landingPageRepository ?? (_landingPageRepository = ClassFactory.Get<ILandingPageRepository>());

		#endregion

		#region Methods: Private

		private Entity GetLandingEntity(Guid landingId) {
			return LandingPageRepository.GetLandingPageById(landingId);
		}

		private void SetNotFoundResponse(HttpContext httpContext) {
			httpContext.Response.StatusCode = (int)HttpStatusCode.NotFound;
			httpContext.Response.Write($"Error: Landing not found");
			httpContext.Response.Flush();
		}
		private void SetInternalServerErrorResponse(HttpContext httpContext, Exception ex) {
			httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
			httpContext.Response.Write($"Error: {ex.Message}");
			httpContext.Response.Flush();
		}

		private string DownloadImagesAndReplaceLinks(string htmlContent, ZipArchive archive, string folderName) {
			var doc = new HtmlAgilityPack.HtmlDocument();
			doc.LoadHtml(htmlContent);
			var httpClient = new HttpClient();
			var imageNodes = doc.DocumentNode.SelectNodes("//img[@src]");
			if (imageNodes != null) {
				foreach (var img in imageNodes) {
					var src = img.GetAttributeValue("src", null);
					if (!string.IsNullOrEmpty(src)) {
						var imageBytes = httpClient.GetByteArrayAsync(src).Result;
						var imageName = Path.GetFileName(new Uri(src).LocalPath);
						var imageEntry = archive.CreateEntry($"{folderName}/images/{imageName}");
						using (var entryStream = imageEntry.Open()) {
							using (var writer = new BinaryWriter(entryStream)) {
								writer.Write(imageBytes);
							}
						}
						img.SetAttributeValue("src", $"images/{imageName}");
					}
				}
			}
			return doc.DocumentNode.OuterHtml;
		}

		private Stream CreateZipStream(Entity landing, HttpContext httpContext) {
			var name = landing.GetTypedColumnValue<string>("Name");
			var zipStream = new MemoryStream();
			using (var archive = new ZipArchive(zipStream, ZipArchiveMode.Create, true)) {
				var htmlPagesCollection = LandingPageRepository.GetLandingHtmlPages(landing.PrimaryColumnValue);
				foreach (var htmlPage in htmlPagesCollection) {
					//TODO use unique folder name in future;
					var folderName = htmlPage.GetTypedColumnValue<string>("ContentSlug");
					var htmlContent = htmlPage.GetTypedColumnValue<string>("PageHtml");
					var directoryEntry = archive.CreateEntry($"{folderName}/");
					var updatedHtmlContent = DownloadImagesAndReplaceLinks(htmlContent, archive, folderName);
					var fileEntry = archive.CreateEntry($"{folderName}/index.html");
					using (var entryStream = fileEntry.Open()) {
						using (var writer = new StreamWriter(entryStream, Encoding.UTF8)) {
							writer.Write(updatedHtmlContent);
						}
					}
				}
			}
			zipStream.Seek(0, SeekOrigin.Begin);
			httpContext.Response.ContentType = "application/zip";
			httpContext.Response.AddHeader("Content-Disposition", $"attachment; filename={name}.zip");
			return zipStream;
		}

		#endregion

		#region Methods: Public

		[OperationContract]
		[WebInvoke(UriTemplate = "ExportToZip/{recordId}", Method = "GET")]
		public Stream ExportLandingPageToZip(string recordId) {
			HttpContext httpContext = HttpContextAccessor.GetInstance();
			try {
				if (!Guid.TryParse(recordId, out Guid landingId)) {
					SetNotFoundResponse(httpContext);
					return null;
				}
				Entity landing = GetLandingEntity(landingId);
				if (landing == null) {
					SetNotFoundResponse(httpContext);
					return null;
				}
				return CreateZipStream(landing, httpContext);
			} catch (Exception ex) {
				SetInternalServerErrorResponse(httpContext, ex);
				return null;
			}
		}

		#endregion
	}

	#endregion

}
