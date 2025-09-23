define("ManageWebForm_MiniPage", /**SCHEMA_DEPS*/["css!ManageWebForm_MiniPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
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
				"name": "ContinueInOtherPageButton"
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "large"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"clicked": {
						"request": "crt.ClosePageRequest"
					},
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"clicked": {
						"request": "crt.SaveRecordRequest",
						"params": {
							"preventCardClose": false
						}
					},
					"caption": "#ResourceString(SaveButton_caption)#"
				}
			},
			{
				"operation": "insert",
				"name": "WebFormPageTabPanel",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.TabPanel",
					"items": [],
					"mode": "tab",
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"tabTitleColor": "auto",
					"selectedTabTitleColor": "auto",
					"headerBackgroundColor": "auto",
					"underlineSelectedTabColor": "auto",
					"fitContent": true,
					"visible": true,
					"stretch": false
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FieldMappingTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(FieldMappingTabContainer_caption)#",
					"iconPosition": "only-text",
					"visible": true
				},
				"parentName": "WebFormPageTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FieldMappingContainer",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "medium",
						"left": "none"
					},
					"alignItems": "stretch",
					"stretch": false,
					"fitContent": true
				},
				"parentName": "FieldMappingTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FieldMappingHintLabelFlexContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 2,
						"rowSpan": 1
					},
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
						"bottom": "small",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "wrap"
				},
				"parentName": "FieldMappingContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FieldMappingHintLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(FieldMappingHintLabel_caption)#)#",
					"labelType": "body",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "#757575",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FieldMappingHintLabelFlexContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FormEntityDropdown",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(FormEntityDropdown_label)#",
					"labelPosition": "above",
					"items": "$TargetEntitiesCollection",
					"value": "$PageParameters_TargetEntity",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "#ResourceString(FormEntityDropdown_tooltip)#",
					"isSimpleLookup": null,
					"valueDetails": null,
					"secondaryDisplayValue": null,
					"mode": "List"
				},
				"parentName": "FieldMappingContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FormFieldsList",
				"values": {
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": false,
								"multiple": false
							},
							"numeration": false,
							"toolbar": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false
						},
						"header": {
							"visible": false
						}
					},
					"primaryColumnName": "Name",
					"columns": [
						{
							"id": "b427b38b-4e73-8046-5f0a-0c504443bebc",
							"code": "Caption",
							"dataValueType": 28,
							"width": 200
						},
						{
							"id": "b427b38b-4e73-8046-5f0a-0c504443bebe",
							"code": "Selected",
							"dataValueType": 12,
							"width": 50,
							"cellView": {
								"type": "crt.TableBooleanCell",
								"control": "$FormFieldsCollection.Selected"
							}
						}
					],
					"items": "$FormFieldsCollection",
					"visible": true,
					"fitContent": true,
					"placeholder": false,
					"bulkActions": [],
					"stretch": true
				},
				"parentName": "FieldMappingTabContainer",
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
					"PageParameters_TargetEntity": {
						"modelConfig": {
							"path": "PageParameters.TargetEntity"
						}
					},
					"PageParameters_FormData": {
						"modelConfig": {
							"path": "PageParameters.FormData"
						}
					},
					"FormFieldsCollection": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"Caption": {},
								"Selected": {},
								"Name": {},
								"Type": {
									"dataValueTypeName": "Boolean"
								},
								"ReferenceSchemaName": {}
							}
						},
						"modelConfig": {
							"sortingConfig": {
								"default": []
							}
						}
					},
					"TargetEntitiesCollection": {
						"isCollection": true,
						"viewModelConfig": {
							"attributes": {
								"value": {},
								"displayValue": {}
							}
						}
					},
					"FormFieldsList_ActiveRow": {}
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
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});