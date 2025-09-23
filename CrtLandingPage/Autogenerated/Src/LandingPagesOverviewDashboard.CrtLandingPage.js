define("LandingPagesOverviewDashboard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "TotalLPsubmissionsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalLPsubmissionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TotalLPsubmissionsIndicatorWidget_Data",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {
											"c0b52431-f463-4f15-ae36-2991f1f1fd53": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "LandingPage"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "LandingPage",
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "FormSubmit"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "LandingPage",
										"relationPath": "DashboardDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(TotalLPsubmissionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue",
							"icon": {
								"iconName": "document-contact-icon"
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ThisWeekLPSubmissionsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"rowSpan": 3,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ThisWeekLPSubmissionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ThisWeekLPSubmissionsIndicatorWidget_Data",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {
											"c0b52431-f463-4f15-ae36-2991f1f1fd53": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "LandingPage"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "LandingPage",
												"isNull": false
											},
											"3f32ba6c-7254-45a2-845f-c08ec9a7b82f": {
												"filterType": 1,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": true,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CreatedOn"
												},
												"isAggregative": false,
												"dataValueType": 7,
												"rightExpression": {
													"expressionType": 1,
													"functionType": 1,
													"macrosType": 7
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "FormSubmit"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "LandingPage",
										"relationPath": "DashboardDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(ThisWeekLPSubmissionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "violet",
							"icon": {
								"iconName": "clock-icon"
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LatestLPSubmissionsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(LatestLPSubmissionsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "LatestLPSubmissionsIndicatorWidget_Data",
								"schemaName": "FormSubmit",
								"filters": {
									"filter": {
										"items": {
											"4689fa90-c776-4d54-8316-200c2e92666d": {
												"filterType": 2,
												"comparisonType": 2,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "LandingPage"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "LandingPage",
												"isNull": false
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "FormSubmit"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "CreatedOn"
											},
											"functionType": 2,
											"aggregationType": 5,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "LandingPage",
										"relationPath": "DashboardDS.Id"
									}
								]
							},
							"formatting": {
								"type": "datetime",
								"date": {
									"display": true
								},
								"time": {
									"display": false
								}
							}
						},
						"text": {
							"template": "#ResourceString(LatestLPSubmissionsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "burnt-coral",
							"icon": {
								"iconName": "calendar-icon"
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PublishedLandingPagesIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 10,
						"colSpan": 3,
						"rowSpan": 3,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(PublishedLandingPagesIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "PublishedLandingPagesIndicatorWidget_Data",
								"schemaName": "LandingPage",
								"filters": {
									"filter": {
										"items": {
											"6ca35994-5514-4f9f-9e7c-359a933d1ccc": {
												"filterType": 1,
												"comparisonType": 7,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 3,
													"functionType": 2,
													"aggregationType": 1,
													"columnPath": "[HTMLPage:LandingPage].Id",
													"subFilters": {
														"items": {
															"ee2eb7e7-a0da-4dd0-aa39-e77cfabc3a5b": {
																"filterType": 4,
																"comparisonType": 3,
																"isEnabled": true,
																"trimDateTimeParameterToDate": false,
																"leftExpression": {
																	"expressionType": 0,
																	"columnPath": "PublicationState"
																},
																"isAggregative": false,
																"dataValueType": 10,
																"referenceSchemaName": "LandingPagePublicationState",
																"rightExpressions": [
																	{
																		"expressionType": 2,
																		"parameter": {
																			"dataValueType": 10,
																			"value": {
																				"Name": "Published",
																				"Id": "d121222c-0a28-4ae5-8ea9-ed4a64496aa0",
																				"value": "d121222c-0a28-4ae5-8ea9-ed4a64496aa0",
																				"displayValue": "Published"
																			}
																		}
																	}
																]
															}
														},
														"logicalOperation": 0,
														"isEnabled": true,
														"filterType": 6,
														"rootSchemaName": "HTMLPage",
														"key": "42810cc6-f51a-4a9c-be0a-3f9c1e767c9f"
													}
												},
												"isAggregative": true,
												"dataValueType": 4,
												"rightExpression": {
													"expressionType": 2,
													"parameter": {
														"dataValueType": 4,
														"value": 0
													}
												},
												"subFilters": {
													"items": {
														"ee2eb7e7-a0da-4dd0-aa39-e77cfabc3a5b": {
															"filterType": 4,
															"comparisonType": 3,
															"isEnabled": true,
															"trimDateTimeParameterToDate": false,
															"leftExpression": {
																"expressionType": 0,
																"columnPath": "PublicationState"
															},
															"isAggregative": false,
															"dataValueType": 10,
															"referenceSchemaName": "LandingPagePublicationState",
															"rightExpressions": [
																{
																	"expressionType": 2,
																	"parameter": {
																		"dataValueType": 10,
																		"value": {
																			"Name": "Published",
																			"Id": "d121222c-0a28-4ae5-8ea9-ed4a64496aa0",
																			"value": "d121222c-0a28-4ae5-8ea9-ed4a64496aa0",
																			"displayValue": "Published"
																		}
																	}
																}
															]
														}
													},
													"logicalOperation": 0,
													"isEnabled": true,
													"filterType": 6,
													"rootSchemaName": "HTMLPage",
													"key": "42810cc6-f51a-4a9c-be0a-3f9c1e767c9f"
												}
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "LandingPage"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Id",
										"relationPath": "DashboardDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(PublishedLandingPagesIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green",
							"icon": {
								"iconName": "globe-icon"
							}
						},
						"theme": "without-fill"
					},
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "SubmissionTrendsChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 12,
						"row": 4,
						"rowSpan": 12
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(SubmissionTrendsChartWidget_title)#",
						"color": "dark-blue",
						"theme": "without-fill",
						"scales": {
							"stacked": false,
							"xAxis": {
								"name": "",
								"formatting": {
									"type": "string",
									"maxLinesCount": 2,
									"maxLineLength": 10
								}
							},
							"yAxis": {
								"name": "",
								"formatting": {
									"type": "number",
									"thousandAbbreviation": {
										"enabled": true
									}
								}
							}
						},
						"series": [
							{
								"color": "green",
								"type": "spline",
								"label": "#ResourceString(SubmissionTrendsChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "SubmissionTrendsChartWidget_SeriesData_2",
										"schemaName": "FormSubmit",
										"filters": {
											"filter": {
												"items": {
													"13b90732-bdc8-4d9e-9fdb-6bfbe1618eb6": {
														"filterType": 2,
														"comparisonType": 2,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "LandingPage"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "LandingPage",
														"isNull": false
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "FormSubmit"
											},
											"filterAttributes": []
										},
										"aggregation": {
											"column": {
												"orderDirection": 0,
												"orderPosition": -1,
												"isVisible": true,
												"expression": {
													"expressionType": 1,
													"functionArgument": {
														"expressionType": 0,
														"columnPath": "Id"
													},
													"functionType": 2,
													"aggregationType": 1,
													"aggregationEvalType": 2
												}
											}
										},
										"dependencies": [
											{
												"attributePath": "LandingPage",
												"relationPath": "DashboardDS.Id"
											}
										],
										"rowCount": 50,
										"grouping": {
											"type": "by-date-part",
											"column": [
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 3
													}
												},
												{
													"orderDirection": 0,
													"orderPosition": -1,
													"isVisible": true,
													"expression": {
														"expressionType": 1,
														"functionArgument": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														},
														"functionType": 3,
														"datePartType": 4
													}
												}
											]
										}
									},
									"formatting": {
										"type": "number",
										"decimalSeparator": ".",
										"decimalPrecision": 0,
										"thousandSeparator": ","
									}
								},
								"dataLabel": {
									"display": null
								}
							}
						],
						"seriesOrder": {
							"type": "by-aggregation-value",
							"direction": 1,
							"seriesIndex": 0
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {},
					"loadingConfig": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});