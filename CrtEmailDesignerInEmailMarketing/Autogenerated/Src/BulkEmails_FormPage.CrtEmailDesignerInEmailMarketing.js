define("BulkEmails_FormPage", /**SCHEMA_DEPS*/["css!BulkEmails_FormPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "OpenOldEmailDesignerButton",
				"values": {
					"clicked": {
						"request": "crt.OpenEmailPageRequest",
						"params": {
							"emailId": "$Id"
						}
					},
					"visible": false
				}
			},
			{
				"operation": "merge",
				"name": "IFrame",
				"values": {
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"name": "IFramePlaceholder",
							"image": {
								"type": "animation",
								"name": "email",
								"width": "76px",
								"height": "75px",
								"padding": null
							},
							"title": "#ResourceString(IFrame_Placeholder_Title)#",
							"subhead": "",
							"items": [
								{
									"type": "crt.FlexContainer",
									"name": "IFramePlaceholderFlexContainer",
									"direction": "row",
									"items": [
										{
											"type": "crt.Button",
											"name": "OpenDesignContentFromIFramePlaceholderButton",
											"caption": "#ResourceString(OpenEmailDesignerButton_caption)#",
											"color": "default",
											"disabled": false,
											"size": "large",
											"iconPosition": "left-icon",
											"icon": "pen-icon",
											"visible": true,
											"clicked": {
												"request": "crt.OpenContentDesignerRequest",
												"params": {
													"recordId": "$Id"
												}
											},
											"clickMode": "default"
										}
									],
									"fitContent": true,
									"visible": true,
									"color": "transparent",
									"borderRadius": "none",
									"padding": {
										"top": "small",
										"right": "none",
										"bottom": "none",
										"left": "none"
									},
									"alignItems": "center",
									"justifyContent": "center",
									"gap": "small",
									"wrap": "wrap"
								}
							]
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "OpenEmailDesignerButton",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 5,
						"rowSpan": 1
					},
					"type": "crt.Button",
					"caption": "#ResourceString(OpenEmailDesignerButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"icon": "pen-icon",
					"visible": false,
					"clicked": {
						"request": "crt.OpenContentDesignerRequest",
						"params": {
							"recordId": "$Id"
						}
					},
					"clickMode": "default"
				},
				"parentName": "TemplateFlexContainer",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PDS_DefaultLanguageId": {
						"modelConfig": {
							"path": "PDS.DefaultLanguageId"	
						}
					},
					"HtmlTemplateContent": {
						"from": [
							"Id",
							"PDS_DefaultLanguageId"
						],
					},
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"config": {
							"attributes": {
								"DefaultLanguageId": {
									"type": "ForwardReference",
									"path": "DefaultLanguage.Id"
								},
							}
						},
						"scope": "page"
					},
				},
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[] /**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/
	};
});
