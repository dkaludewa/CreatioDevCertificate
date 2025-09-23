define("CampaignsOverviewDashboard", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "TotalContactsIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(TotalContactsIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "TotalContactsIndicatorWidget_Data",
								"schemaName": "Contact",
								"filters": {
									"filter": {
										"items": {
											"95ec81df-5867-4fbe-9494-51912bd89529": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Account.Type"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AccountType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Customer",
																"Id": "03a75490-53e6-df11-971b-001d60e938c6",
																"value": "03a75490-53e6-df11-971b-001d60e938c6",
																"displayValue": "Customer"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Partner",
																"Id": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"value": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"displayValue": "Partner"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Contact"
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
								"dependencies": []
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(TotalContactsIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "dark-turquoise",
							"icon": {
								"iconName": "contact-icon"
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
				"name": "ParticipatedIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 4,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ParticipatedIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ParticipatedIndicatorWidget_Data",
								"schemaName": "CampaignParticipant",
								"filters": {
									"filter": {
										"items": {
											"b26b2d67-bea1-4a53-893e-1b901a3e3421": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Campaign.CampaignStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CampaignStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Active",
																"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"displayValue": "Active"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Stopped",
																"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"displayValue": "Stopped"
															}
														}
													}
												]
											},
											"dc1d4c1e-7793-4b1e-a1dc-f5d326bb2748": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Contact.Account.Type"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AccountType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Customer",
																"Id": "03a75490-53e6-df11-971b-001d60e938c6",
																"value": "03a75490-53e6-df11-971b-001d60e938c6",
																"displayValue": "Customer"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Partner",
																"Id": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"value": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"displayValue": "Partner"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CampaignParticipant"
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
												"columnPath": "Contact.Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Campaign",
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
							"template": "#ResourceString(ParticipatedIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "blue",
							"icon": {
								"iconName": "contact-filter-icon"
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
				"name": "ReachedTheGoalIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 3,
						"rowSpan": 3,
						"row": 1
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(ReachedTheGoalIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "ReachedTheGoalIndicatorWidget_Data",
								"schemaName": "CampaignParticipant",
								"filters": {
									"filter": {
										"items": {
											"5348eae1-7b99-4afd-bf5d-36d5153fecac": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Status"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CmpgnParticipantStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Reached the goal",
																"Id": "12f170a5-ecaf-4130-b386-01cd63be7c48",
																"value": "12f170a5-ecaf-4130-b386-01cd63be7c48",
																"displayValue": "Reached the goal"
															}
														}
													}
												]
											},
											"1d96de13-cc42-4242-8859-2cf938b53d77": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Campaign.CampaignStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CampaignStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Active",
																"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"displayValue": "Active"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Stopped",
																"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"displayValue": "Stopped"
															}
														}
													}
												]
											},
											"97e6a4a3-f3b0-4d46-bdeb-c5aa03c6f146": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "Contact.Account.Type"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "AccountType",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Customer",
																"Id": "03a75490-53e6-df11-971b-001d60e938c6",
																"value": "03a75490-53e6-df11-971b-001d60e938c6",
																"displayValue": "Customer"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Partner",
																"Id": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"value": "f2c0ce97-53e6-df11-971b-001d60e938c6",
																"displayValue": "Partner"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "CampaignParticipant"
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
												"columnPath": "Contact.Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "Campaign",
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
							"template": "#ResourceString(ReachedTheGoalIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green",
							"icon": {
								"iconName": "goal-icon"
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
				"name": "AvgGoalReachedIndicatorWidget",
				"values": {
					"layoutConfig": {
						"column": 10,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 3
					},
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(AvgGoalReachedIndicatorWidget_title)#",
						"data": {
							"providing": {
								"attribute": "AvgGoalReachedIndicatorWidget_Data",
								"schemaName": "Campaign",
								"filters": {
									"filter": {
										"items": {
											"280b4602-3c55-4166-9aa3-9393bab7760c": {
												"filterType": 4,
												"comparisonType": 3,
												"isEnabled": true,
												"trimDateTimeParameterToDate": false,
												"leftExpression": {
													"expressionType": 0,
													"columnPath": "CampaignStatus"
												},
												"isAggregative": false,
												"dataValueType": 10,
												"referenceSchemaName": "CampaignStatus",
												"rightExpressions": [
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Active",
																"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																"displayValue": "Active"
															}
														}
													},
													{
														"expressionType": 2,
														"parameter": {
															"dataValueType": 10,
															"value": {
																"Name": "Stopped",
																"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																"displayValue": "Stopped"
															}
														}
													}
												]
											}
										},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "Campaign"
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
												"columnPath": "TargetAchieve"
											},
											"functionType": 2,
											"aggregationType": 3,
											"aggregationEvalType": 0
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
							"template": "#ResourceString(AvgGoalReachedIndicatorWidget_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "medium",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "violet",
							"icon": {
								"iconName": "diagram-icon"
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
				"name": "ParticipantsByMonthChartWidget",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 6,
						"row": 4,
						"rowSpan": 12
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(ParticipantsByMonthChartWidget_title)#",
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
								"color": "blue",
								"type": "spline",
								"label": "#ResourceString(ParticipantsByMonthChartWidget_series_0)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ParticipantsByMonthChartWidget_SeriesData_0",
										"schemaName": "CampaignParticipant",
										"filters": {
											"filter": {
												"items": {
													"da1ae4ba-b8e7-4f78-8701-15ae92a156d1": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Campaign.CampaignStatus"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "CampaignStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Active",
																		"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"displayValue": "Active"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Stopped",
																		"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"displayValue": "Stopped"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "CampaignParticipant"
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
												"attributePath": "Campaign",
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
							},
							{
								"color": "green",
								"type": "bar",
								"label": "#ResourceString(ParticipantsByMonthChartWidget_series_1)#",
								"legend": {
									"enabled": true
								},
								"data": {
									"providing": {
										"attribute": "ParticipantsByMonthChartWidget_SeriesData_1",
										"schemaName": "CampaignParticipant",
										"filters": {
											"filter": {
												"items": {
													"952b9a1b-03c0-4ead-a5f8-7bc6e326561f": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Status"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "CmpgnParticipantStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Reached the goal",
																		"Id": "12f170a5-ecaf-4130-b386-01cd63be7c48",
																		"value": "12f170a5-ecaf-4130-b386-01cd63be7c48",
																		"displayValue": "Reached the goal"
																	}
																}
															}
														]
													},
													"97528363-f276-461d-89e8-40e96613230a": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "Campaign.CampaignStatus"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "CampaignStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Stopped",
																		"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"displayValue": "Stopped"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Active",
																		"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"displayValue": "Active"
																	}
																}
															}
														]
													},
													"columnIsNotNullFilter": {
														"comparisonType": 2,
														"filterType": 2,
														"isEnabled": true,
														"isNull": false,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CreatedOn"
														}
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "CampaignParticipant"
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
												"attributePath": "Campaign",
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
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "StartByMonthChartWidget",
				"values": {
					"layoutConfig": {
						"column": 7,
						"colSpan": 6,
						"row": 4,
						"rowSpan": 12
					},
					"type": "crt.ChartWidget",
					"config": {
						"title": "#ResourceString(StartByMonthChartWidget_title)#",
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
								"color": "burnt-coral",
								"type": "bar",
								"label": "#ResourceString(StartByMonthChartWidget_series_0)#",
								"legend": {
									"enabled": false
								},
								"data": {
									"providing": {
										"attribute": "StartByMonthChartWidget_SeriesData_0",
										"schemaName": "Campaign",
										"filters": {
											"filter": {
												"items": {
													"c54773ee-bac8-4cf0-b956-4adc78bfc440": {
														"filterType": 4,
														"comparisonType": 3,
														"isEnabled": true,
														"trimDateTimeParameterToDate": false,
														"leftExpression": {
															"expressionType": 0,
															"columnPath": "CampaignStatus"
														},
														"isAggregative": false,
														"dataValueType": 10,
														"referenceSchemaName": "CampaignStatus",
														"rightExpressions": [
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Active",
																		"Id": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"value": "49cc0a4f-75df-4b47-953b-0faa4983321d",
																		"displayValue": "Active"
																	}
																}
															},
															{
																"expressionType": 2,
																"parameter": {
																	"dataValueType": 10,
																	"value": {
																		"Name": "Stopped",
																		"Id": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"value": "5b792494-d40f-4b2b-8cfd-ab75ac5d33aa",
																		"displayValue": "Stopped"
																	}
																}
															}
														]
													}
												},
												"logicalOperation": 0,
												"isEnabled": true,
												"filterType": 6,
												"rootSchemaName": "Campaign"
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
															"columnPath": "StartDate"
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
															"columnPath": "StartDate"
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
									"display": false
								}
							}
						],
						"seriesOrder": {
							"type": "by-grouping-value",
							"direction": 1
						},
						"layout": {}
					},
					"sectionBindingColumnRecordId": "$Id",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
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