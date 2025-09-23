define("LandingPageDesigner", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "HTMLPageDesigner",
				"values": {
					"type": "crt.LandingPageDesigner",
					"landingId": "$PageParameters_LandingId",
					"rowSave": {
						"request": "crt.ContentDesignerSaveRowRequest",
						"params": {
							"contentDesignerType": "@event.detail.contentDesignerType",
							"data": "@event.detail.data"
						}
					},
					"rowEdit": {
						"request": "crt.ContentDesignerEditRowRequest",
						"params": {
							"contentDesignerType": "@event.detail.contentDesignerType",
							"id": "@event.detail.id",
							"data": "@event.detail.data"
						}
					},
					"handlerCodes": ["LandingPage"]
				},
				"parentName": "HTMLPageGridContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_LandingId": {
						"modelConfig": {
							"path": "PageParameters.LandingId"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
