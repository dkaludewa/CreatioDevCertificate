define("HTMLPageDesigner", /**SCHEMA_DEPS*/["css!HTMLPageDesigner_Page"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "#MacrosTemplateString(#ResourceString(PageTitle_caption)#)#",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"visible": true,
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "remove",
				"name": "SetRecordRightsButton"
			},
			{
				"operation": "remove",
				"name": "MainHeaderBottom"
			},
			{
				"operation": "remove",
				"name": "CardToolsContainer"
			},
			{
				"operation": "remove",
				"name": "CardToggleContainer"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none"
				}
			},
			{
				"operation": "remove",
				"name": "CardContentWrapper"
			},
			{
				"operation": "insert",
				"name": "PreviewButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PreviewButton_caption)#",
					"color": "default",
					"size": "large",
					"iconPosition": "left-icon",
					"visible": "$isPreviewMode | crt.InvertBooleanValue",
					"disabled": "$isDesignerLoaded | crt.InvertBooleanValue",
					"icon": "view-eye-icon",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "PREVIEW"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EditContentButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(EditContentButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": "$isPreviewMode",
					"icon": "pencil-button-icon",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "PREVIEW"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MoreActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(MoreActionsButton_caption)#",
					"color": "default",
					"disabled": "$isDesignerLoaded | crt.InvertBooleanValue",
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "pen-icon",
					"clicked": {},
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ShowStructureButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ShowStructureButton_caption)#",
					"visible": "$isStructureVisible | crt.InvertBooleanValue",
					"disabled": "$isDesignerLoaded | crt.InvertBooleanValue",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "SHOW_STRUCTURE"
						}
					},
					"icon": "show-structure-icon"
				},
				"parentName": "MoreActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HideStructureButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(HideStructureButton_caption)#",
					"visible": "$isStructureVisible",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "HIDE_STRUCTURE"
						}
					},
					"icon": "hide-structure-icon"
				},
				"parentName": "MoreActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SaveTemplateButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(SaveButton_caption)#",
					"color": "default",
					"disabled": "$IsAutosaving",
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "$IsAutosaving | crt.IfElse: $LoadingButtonIconConfig : 'save-button-icon'",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "SAVE"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "HTMLPageGridContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "none",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"stretch": true,
					"classes": [
						"safari-content-designer-min-height-grid-container-fix"
					]
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HTMLPageDesigner",
				"values": {
					"stretch": true,
					"type": "crt.LandingPageDesigner",
					"recordId": "$PageParameters_RecordId",
					"handlerCode": "DefaultHTML",
					"autosavingState": "$IsAutosaving",
					"isStructureVisible": "$isStructureVisible",
					"isDesignerLoaded": "$isDesignerLoaded",
					"isPreviewMode": "$isPreviewMode",
					"autosaveFailed": {
						"request": "crt.NotificationRequest",
						"params": {
							"message": "@event.detail.message",
							"duration": "@event.detail.duration"
						}
					},
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "HTMLPageGridContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"recordId": {
						"value": ""
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"PageParameters_RecordId": {
						"modelConfig": {
							"path": "PageParameters.RecordId"
						}
					},
					"IsAutosaving": {
						"value": false
					},
					"isMergeTagVisible": {
						"value": false
					},
					"isStructureVisible": {
						"value": false
					},
					"isPreviewMode": {
						"value": false
					},
					"isDesignerLoaded": {
						"value": false
					},
					"LoadingButtonIconConfig": {
						"value": {
							"type": "animation",
							"height": "20px",
							"width": "20px",
							"name": "loader"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/ []/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/ {} /**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/ {} /**SCHEMA_VALIDATORS*/
	};
});
