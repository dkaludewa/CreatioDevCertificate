define("LandingPages_FormPage", /**SCHEMA_DEPS*/["LandingPageConsts"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(LandingPageConsts)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "PageTitle",
				"values": {
					"caption": "$Name"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "SideContainer"
			},
			{
				"operation": "remove",
				"name": "SideAreaProfileContainer"
			},
			{
				"operation": "merge",
				"name": "CenterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					}
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTab"
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"selectedTab": {
						"value": "LandingPageInfoTabContainer"
					}
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "LandingPage"
				}
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentList"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "AttachmentsTabContainerHeaderLabel"
			},
			{
				"operation": "remove",
				"name": "AttachmentAddButton"
			},
			{
				"operation": "remove",
				"name": "AttachmentRefreshButton"
			},
			{
				"operation": "insert",
				"name": "PublishButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PublishButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": "$PublishButtonVisible",
					"icon": "rocket-icon",
					"clicked": {
						"request": "crt.PublishLandingPageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": "$PageHtml | crt.ToBoolean",
					"icon": "more-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DownloadHTMLMainLMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DownloadHTMLMainLMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.ExportLandingPageRequest",
						"params": {
							"recordId": "$Id",
							"pageName": "$Name"
						}
					},
					"icon": "codeblock-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UnpublishMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(UnpublishMenuItem_caption)#",
					"visible": "$UnpublishButtonVisible",
					"clicked": {
						"request": "crt.UnpublishLandingPageRequest"
					},
					"icon": "stop-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DesignPageTab",
				"values": {
					"caption": "#ResourceString(DesignPageTab_caption)#",
					"type": "crt.TabContainer",
					"items": [],
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DesignPageFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
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
					"gap": "none",
					"wrap": "nowrap",
					"stretch": true
				},
				"parentName": "DesignPageTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DesignPageToolsFlexContainer",
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
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "center",
					"justifyContent": "end",
					"gap": "small",
					"wrap": "nowrap"
				},
				"parentName": "DesignPageFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OpenLandingPageDesignerButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(OpenLandingPageDesignerButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "pen-icon",
					"clicked": {
						"request": "crt.OpenLandingPageDesigner",
						"params": {
							"schemaName": "LandingPageDesigner",
							"entityName": "LandingPage",
							"contentId": "$Id",
							"recordId": "$SelectedHtmlPageId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "DesignPageToolsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingPageDesignActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(LandingPageDesignActionsButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-icon",
					"visible": "$PageHtml | crt.ToBoolean",
					"icon": "more-button-icon",
					"clicked": {},
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "DesignPageToolsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DownloadHTMLMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(DownloadHTMLMenuItem_caption)#",
					"visible": true,
					"icon": "codeblock-icon",
					"clicked": {
						"request": "crt.ExportLandingPageRequest",
						"params": {
							"recordId": "$Id",
							"pageName": "$Name"
						}
					}
				},
				"parentName": "LandingPageDesignActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DesignPageItemsFlexContainer",
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
					"gap": "large",
					"wrap": "nowrap",
					"stretch": true
				},
				"parentName": "DesignPageFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LandingPageHTMLFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "medium",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap",
					"layoutConfig": {
						"basis": "100%"
					},
					"classes": [
						"safari-email-designer-min-height-container-fix"
					],
					"stretch": true
				},
				"parentName": "DesignPageItemsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IFrame",
				"values": {
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "landingPage",
								"width": "76px",
								"height": "75px",
								"padding": null
							},
							"title": "#ResourceString(IFrame_Placeholder_Title)#",
							"subhead": "",
							"items": [
								{
									"type": "crt.FlexContainer",
									"direction": "row",
									"items": [
										{
											"type": "crt.Button",
											"name": "OpenDesignContentFromIFramePlaceholderButton",
											"caption": "#ResourceString(OpenLandingPageDesignerButton_caption)#",
											"color": "default",
											"disabled": false,
											"size": "large",
											"iconPosition": "left-icon",
											"icon": "pen-icon",
											"visible": true,
											"clicked": {
												"request": "crt.OpenLandingPageDesigner",
												"params": {
													"schemaName": "LandingPageDesigner",
													"entityName": "LandingPageHtmlPage",
													"contentId": "$Id",
													"recordId": "$SelectedHtmlPageId"
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
					],
					"type": "crt.IFrame",
					"label": "Custom HTML",
					"htmlContent": "$PageHtml",
					"contentType": "html"
				},
				"parentName": "LandingPageHTMLFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingPageInfoTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"tools": [],
					"items": [],
					"caption": "#ResourceString(LandingPageInfoTabContainer_caption)#",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "document-icon"
				},
				"parentName": "CardToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingPageInfoTabContainerHeaderContainer",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"alignItems": "center",
					"items": []
				},
				"parentName": "LandingPageInfoTabContainer",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingPageInfoTabContainerHeaderLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(LandingPageInfoTabContainerHeaderLabel_caption)#)#",
					"labelType": "headline-3",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#0D2E4E",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "LandingPageInfoTabContainerHeaderContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LandingPageInfoFieldsFlexContainer",
				"values": {
					"type": "crt.FlexContainer",
					"items": [],
					"direction": "column"
				},
				"parentName": "LandingPageInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Name",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.Name",
					"labelPosition": "auto",
					"control": "$Name"
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Goal",
				"values": {
					"type": "crt.Input",
					"multiline": true,
					"label": "$Resources.Strings.Goal",
					"labelPosition": "auto",
					"control": "$Goal"
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PublicationState",
					"labelPosition": "auto",
					"control": "$PublicationState",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LandingPageUrl",
				"values": {
					"type": "crt.WebInput",
					"label": "#ResourceString(LandingPageUrl_label)#",
					"labelPosition": "auto",
					"control": "$Url",
					"visible": "$UnpublishButtonVisible",
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UrlSlug",
				"values": {
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.ContentSlug",
					"labelPosition": "auto",
					"control": "$ContentSlug",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(UrlSlug_tooltip)#"
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CreatedBy",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_CreatedBy_8hz068c",
					"labelPosition": "auto",
					"control": "$PDS_CreatedBy_8hz068c",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ModifiedOn",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_ModifiedOn_m8b8637",
					"labelPosition": "auto",
					"control": "$PDS_ModifiedOn_m8b8637"
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CreatedOn",
				"values": {
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.PDS_CreatedOn_fojy6x1",
					"labelPosition": "auto",
					"control": "$PDS_CreatedOn_fojy6x1"
				},
				"parentName": "LandingPageInfoFieldsFlexContainer",
				"propertyName": "items",
				"index": 7
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"Name": {
						"modelConfig": {
							"path": "PDS.Name"
						}
					},
					"Url": {},
					"PageUrl": {
						"modelConfig": {
							"path": "PDS.Url"
						}
					},
					"SelectedHtmlPageId": {
						"modelConfig": {
							"path": "HTMLPageDS.Id"
						}
					},
					"PageHtml": {
						"modelConfig": {
							"path": "HTMLPageDS.PageHtml"
						}
					},
					"Published": {
						"value": false
					},
					"PublishButtonVisible": {
						"value": false
					},
					"UnpublishButtonVisible": {
						"value": false
					},
					"PageParameters_LandingUrl": {
						"value": "",
						"modelConfig": {}
					},
					"PDS_CreatedBy_8hz068c": {
						"modelConfig": {
							"path": "PDS.CreatedBy"
						}
					},
					"PDS_ModifiedOn_m8b8637": {
						"modelConfig": {
							"path": "PDS.ModifiedOn"
						}
					},
					"PDS_CreatedOn_fojy6x1": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					},
					"Goal": {
						"modelConfig": {
							"path": "PDS.Goal"
						}
					},
					"ContentSlug": {
						"modelConfig": {
							"path": "HTMLPageDS.ContentSlug"
						}
					},
					"PublicationState": {
						"modelConfig": {
							"path": "HTMLPageDS.PublicationState"
						}
					},
					"ModifiedOn": {
						"modelConfig": {
							"path": "HTMLPageDS.ModifiedOn"
						}
					},
					"PublishedOn": {
						"modelConfig": {
							"path": "HTMLPageDS.PublishedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "LandingPage"
						}
					},
					"HTMLPageDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "HTMLPage"
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