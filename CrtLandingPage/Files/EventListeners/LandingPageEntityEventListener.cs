namespace Creatio.LandingPageDesigner.EventListeners
{
	using Creatio.LandingPageDesigner.Utils;
	using System;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Entities.Events;

	#region Class: LandingPageEntityEventListener

	[EntityEventListener(SchemaName = "LandingPage")]
	internal class LandingPageEntityEventListener : BaseEntityEventListener
	{
		private readonly UserConnection _userConnection;

		public LandingPageEntityEventListener(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		private void CreateHtmlPage(Guid recordId, string name) {
			var schema = _userConnection.EntitySchemaManager.GetInstanceByName("HTMLPage");
			var entity = schema.CreateEntity(_userConnection);
			entity.SetDefColumnValues();
			string slug = SlugGenerator.GenerateSlug(name);
			entity.SetColumnValue("ContentSlug", slug);
			entity.SetColumnValue("LandingPageId", recordId);
			entity.Save(false);
		}

		public override void OnInserted(object sender, EntityAfterEventArgs e) {
			var entity = (Entity)sender;
			var name = entity.GetTypedColumnValue<string>("Name");
			CreateHtmlPage(entity.PrimaryColumnValue, name);
			base.OnInserted(sender, e);
		}
	}

	#endregion
}
