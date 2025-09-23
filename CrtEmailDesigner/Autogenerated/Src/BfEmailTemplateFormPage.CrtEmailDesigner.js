define("BfEmailTemplateFormPage", /**SCHEMA_DEPS*/["css!BfEmailTemplateFormPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "ShowPreviewButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ShowPreviewButton_caption)#",
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
				"name": "ShowMergeTagButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(ShowMergeTagButton_caption)#",
					"visible": "$isMergeTagVisible | crt.InvertBooleanValue",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "SHOW_TAG"
						}
					},
					"icon": "show-merge-tag-icon"
				},
				"parentName": "MoreActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "HideMergeTagButton",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(HideMergeTagButton_caption)#",
					"visible": "$isMergeTagVisible",
					"clicked": {
						"request": "crt.DesignerEventRequest",
						"params": {
							"eventType": "HIDE_TAG"
						}
					},
					"icon": "hide-merge-tag-icon"
				},
				"parentName": "MoreActionsButton",
				"propertyName": "menuItems",
				"index": 1
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
				"index": 2
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
				"index": 3
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
				"name": "FlexContainer_MultilanguageToolbar",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"gap": "extra-small",
					"wrap": "nowrap"
				},
				"parentName": "MainHeader",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MLIcon",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_MultilanguageToolbar",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_MLIcon",
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
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_MLIcon",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_LanguageIcon",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_LanguageIcon_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-icon",
					"visible": "$MultilangFeatureEnabled",
					"icon": "translate-icon",
					"disableRipple": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_MLIcon",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MLTitle",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "medium",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_MultilanguageToolbar",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MLTitle_2",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "extra-small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_MLTitle",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_TemplateLanguage",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_TemplateLanguage_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": "$MultilangFeatureEnabled"
				},
				"parentName": "FlexContainer_MLTitle_2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MLCombobox",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
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
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "FlexContainer_MultilanguageToolbar",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_MLCombobox",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 0.8fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
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
					"alignItems": "stretch"
				},
				"parentName": "FlexContainer_MLCombobox",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_TemplateLanguage",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.null",
					"labelPosition": "hidden",
					"value": "$TemplateLanguage",
					"items": "$TemplateLanguages",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"mode": "List",
					"visible": "$MultilangFeatureEnabled",
					"readonly": false,
					"useStaticFiltering": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"isSimpleLookup": null,
					"showSecondaryDisplayValue": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_MLCombobox",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ListAction_TemplateLanguage_Manage",
				"values": {
					"type": "crt.ComboboxAction",
					"caption": "#ResourceString(TemplateLanguage_manage)#",
					"icon": "gear-button-icon",
					"visible": true,
					"clicked": {
						"request": "crt.OpenMultilanguageManagerRequest",
						"params": {
							"emailId": "$EmailId",
							"handlerCodes": "$HandlerCodes"
						}
					}
				},
				"parentName": "ComboBox_TemplateLanguage",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BfGridContainer",
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
						"safari-email-designer-min-height-grid-container-fix"
					]
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "BfEmailDesigner",
				"values": {
					"stretch": true,
					"type": "crt.EmailDesigner",
					"recordId": "$TemplateId",
					"languageId": "$LanguageId",
					"emailId": "$EmailId",
					"autosavingState": "$IsAutosaving",
					"isMergeTagVisible": "$isMergeTagVisible",
					"isStructureVisible": "$isStructureVisible",
					"isDesignerLoaded": "$isDesignerLoaded",
					"isPreviewMode": "$isPreviewMode",
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
					"autosaveFailed": {
						"request": "crt.NotificationRequest",
						"params": {
							"message": "@event.detail.message",
							"duration": "@event.detail.duration"
						}
					},
					"handlerCodes": "$HandlerCodes",
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "BfGridContainer",
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
					"HandlerCodes": {
						"value": ["Email"]
					},
					"EmailId": {
						"value": ""
					},
					"DefaultTemplate": {
						"value": ""
					},
					"TemplateLanguage": {
						"value": ""
					},
					"TemplateId": {
						"from": "TemplateLanguage",
						"converter": "crt.ToObjectProp: 'value'"
					},
					"LanguageId": {
						"from": "TemplateLanguage",
						"converter": "crt.ToObjectProp: 'languageId'"
					},
					"TemplateLanguages_EmailFilter": {
						"from": [
							"EmailId"
						],
						"converter": "crt.ToInFilter: 'EmailId'"
					},
					"TemplateLanguages": {
						"isCollection": true,
						"modelConfig": {
							"path": "TemplateLanguagesDS",
							"sortingConfig": {
								"default": []
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "TemplateLanguages_EmailFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"displayValue": {
									"modelConfig": {
										"path": "TemplateLanguagesDS.TemplateLanguageCode"
									}
								},
								"value": {
									"modelConfig": {
										"path": "TemplateLanguagesDS.Id"
									}
								},
								"languageId": {
									"modelConfig": {
										"path": "TemplateLanguagesDS.TemplateLanguageId"
									}
								},
								"isDefault": {
									"modelConfig": {
										"path": "TemplateLanguagesDS.IsDefault"
									}
								},
								"secondaryDisplayValue": {
									"from": "isDefault",
									"converter": "crt.ToFlagString: '#ResourceString(ComboBox_TemplateLanguage_secondtext)#'"
								}
							}
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
					},
					"MultilangFeatureEnabled": {
						"value": false
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"TemplateLanguagesDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "BfEmailTemplate",
								"attributes": {
									"IsDefault": {
										"path": "IsDefault"
									},
									"TemplateLanguageCode": {
										"type": "ForwardReference",
										"path": "TemplateLanguage.Code"
									},
									"TemplateLanguageId": {
										"type": "ForwardReference",
										"path": "TemplateLanguage.Id"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});