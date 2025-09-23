define("BfEmailTemplateLanguageList", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "ActionButtonsContainer"
			},
			{
				"operation": "remove",
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "remove",
				"name": "CloseButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "remove",
				"name": "CancelButton"
			},
			{
				"operation": "remove",
				"name": "SaveButton"
			},
			{
				"operation": "insert",
				"name": "Label_subtitle",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_subtitle_caption)#)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "TitleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_LanguageTemplates",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"toolbar": false,
							"selection": {
								"enable": true,
								"multiple": true,
								"selectAll": false
							},
							"numeration": false
						},
						"columns": {
							"toolbar": false,
							"adding": false,
							"editing": false,
							"dragAndDrop": false,
							"resizing": false,
							"sorting": true
						},
						"editable": {
							"enable": false,
							"floatingEditPanel": false,
							"itemsCreation": false
						}
					},
					"items": "$DataGrid_Languages",
					"activeRow": "$DataGrid_Languages_ActiveRow",
					"selectionState": "$DataGrid_Languages_SelectionState",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "DataGrid_LanguagesDS_Id",
					"columns": [
						{
							"id": "6328a79f-2c83-93a0-ba18-d41158e9e3e9",
							"code": "DataGrid_LanguagesDS_Name",
							"caption": "#ResourceString(DataGrid_LanguagesDS_Name)#",
							"dataValueType": 28,
							"width": 344
						},
						{
							"id": "7e0087e6-8f22-b56b-7653-15d8a39666b4",
							"code": "DataGrid_LanguagesDS_Code",
							"caption": "#ResourceString(DataGrid_LanguagesDS_Code)#",
							"dataValueType": 27,
							"width": 93
						}
					],
					"placeholder": false,
					"bulkActions": [],
					"_selectionOptions": {
						"attribute": "DataGrid_Languages_SelectionState"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_Cancel",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Cancel_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"clickMode": "default"
				},
				"parentName": "FooterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_Save",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Save_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.UpdateEmailLanguageTemplatesRequest",
						"params": {
							"emailId": "$EmailId",
							"handlerCodes": "$HandlerCodes",
							"languageSelection": "$DataGrid_Languages_SelectionState",
							"closePage": true
						}
					},
					"clickMode": "default"
				},
				"parentName": "FooterContainer",
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
					"HandlerCodes": {
						"value": []
					},
					"EmailId": {
						"value": ""
					},
					"DefaultLanguageId": {
						"from": "DefaultTemplate",
						"converter": "crt.ToObjectProp: 'languageId'"
					},
					"ExistingTemplateLanguageIds": {
						"value": []
					},
					"DataGrid_Languages": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_LanguagesDS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "Name"
									}
								]
							},
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "DataGrid_Languages_FullFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_LanguagesDS_Name": {
									"modelConfig": {
										"path": "DataGrid_LanguagesDS.Name"
									}
								},
								"DataGrid_LanguagesDS_Code": {
									"modelConfig": {
										"path": "DataGrid_LanguagesDS.Code"
									}
								},
								"DataGrid_LanguagesDS_Id": {
									"modelConfig": {
										"path": "DataGrid_LanguagesDS.Id"
									}
								}
							}
						}
					},
					"DataGrid_Languages_IncludeActiveFilter": {
						"value": {
							"filterType": 1,
							"comparisonType": 3,
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"leftExpression": {
								"expressionType": 0,
								"columnPath": "IsUsed"
							},
							"isAggregative": false,
							"dataValueType": 12,
							"rightExpression": {
								"expressionType": 2,
								"parameter": {
									"dataValueType": 12,
									"value": true
								}
							}
						}
					},
					"DataGrid_Languages_IncludeExistingTemplatesFilter": {
						"from": "ExistingTemplateLanguageIds",
						"converter": "crt.ToInFilter: 'Id'"
					},
					"DataGrid_Languages_IncludeDefaultFilter": {
						"from": [
							"DefaultLanguageId"
						],
						"converter": "crt.ToInFilter: 'Id'"
					},
					"DataGrid_Languages_FullFilter": {
						"from": [
							"DataGrid_Languages_IncludeActiveFilter",
							"DataGrid_Languages_IncludeExistingTemplatesFilter",
							"DataGrid_Languages_IncludeDefaultFilter"
						],
						"converter": "crt.ToFilterGroup: 1"
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
						"DataGrid_LanguagesDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "SysLanguage",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"Code": {
										"path": "Code"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: 'crt.HandleViewModelAttributeChangeRequest',
				handler: async (request, next) => {
					const { $context, attributeName, value } = request;
					const selectionStateAttribute = 'DataGrid_Languages_SelectionState';
					const defaultLanguageIdAttribute = 'DefaultLanguageId';
			
					if (attributeName === selectionStateAttribute) {
						const defaultLanguageId = await $context[defaultLanguageIdAttribute];
						if (defaultLanguageId && value && value.selected.indexOf(defaultLanguageId) === -1) {
							$context[selectionStateAttribute] = {
								type: 'specific',
								selected: [...value.selected, defaultLanguageId],
							};
						}
					}

					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});