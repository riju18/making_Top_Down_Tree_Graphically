// fix arrow end issues:
// https://github.com/DmitryBaranovskiy/raphael/issues/471

var chart_config = {
	chart: {
		container: "#OrganiseChart-big-commpany",
		levelSeparation: 50,

		rootOrientation: "WEST",

		nodeAlign: "BOTTOM",

		connectors: {
			type: "bCurve",
			style: {
				"stroke-width": 2
			}
		},
		node: {
			HTMLclass: "big-commpany"
		}
	},

	nodeStructure: {
		text: { name: "Web design & development" },
		connectors: {
			style: {
				'stroke': 'red',
				'arrow-end': 'oval-wide-long'
			}
		},
		children: [
			{
				text: { name: "Design" },
				stackChildren: true,
				connectors: {
					style: {
						'stroke': '#8080FF',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {name: "html"},
						HTMLclass: "reception"
					},
					{
						text: {name: "css"}
					},
					{
						text: {name: "bootstrap"}
					}
				]
			},
			{
				text: { name: "Web Application" },
				connectors: {
					style: {
						'stroke': '#bbb',
						"stroke-dasharray": "- .", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
						'arrow-start': 'classic-wide-long'
					}
				},
				children: [
					
					{
						text: {name: "node js"},
						connectors: {
							type: "curve",
							style: {
								stroke: "#50688D"
							}
						},
						children: [
							{
								text: {name: "package"},
								connectors: {
									type: "curve",
									style: {
										stroke: "red"
									}
								},
								children:[
									{
										text: {name: "any one"},
										connectors: {
											type: "curve",
											style: {
												stroke: "green"
											}
										},
										children:[
											{
												text: {name: "npm"},
											},
											{
												text: {name: "bower"},
											},
											{
												text: {name: "yarn"},
											}
										]
									}
								]
							}
						]
					}
				]
			},
			{
				text: { name: "Develop" },
				stackChildren: true,
				connectors: {
					stackIndent: 30,
					style: {
						'stroke': '#E3C61A',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					
					{
						text: {name: "Client Side"},
						connectors: {
							style: {
								stroke: "#00CE67"
							}
						},
						children: [
							{
								text: {name: "Javascript"}
							}
						]
					},
					{
						text: {name: "Server Side"},
						connectors: {
							style: {
								stroke: "#00CE67"
							}
						},
						children: [
							{
								text: {name: "Php"}
							},
							{
								text: {name: "ruby"}
							},
							{
								text: {name: "python"}
							},
							{
								text: {name: "more"}
							}
						]
					},
					{
						text: {name: "framework"},
						connectors: {
							style: {
								stroke: "red"
							}
						},
						children: [
							{
								text: {name: "Javascript"},
								connectors: {
									style: {
										stroke: "blue"
									}
								},
								children: [
									{
										text: {name: "any one"},
										connectors: {
											style: {
												stroke: "#00CE67"
											}
										},
										children:[
											{
												text: {name: "angular js"}
											},
											{
												text: {name: "Vue js"}
											},
											{
												text: {name: "react js"}
											},
											{
												text: {name: "meteor js"}
											},
											{
												text: {name: "and more"}
											}
										]
									}
								]
							},
							{
								text: {name: "Php"},
								connectors: {
									style: {
										stroke: "red"
									}
								},
								children: [
									{
										text: {name: "any one"},
										connectors: {
											style: {
												stroke: "#00CE67"
											}
										},
										children:[
											{
												text: {name: "laravel"}
											},
											{
												text: {name: "cakephp"}
											},
											{
												text: {name: "CodeIgniter"}
											},
											{
												text: {name: "symfony"}
											},
											{
												text: {name: "Yii"}
											},
											{
												text: {name: "more"}
											}
										]
									}
								]
							}
						]
					},
					{
						text: {name: "Database"},
						connectors: {
							style: {
								stroke: "green"
							}
						},
						children: [
							{
								text: {name: "Oracle"}
							},
							{
								text: {name: "MySql"}
							},
							{
								text: {name: "Microsoft Sql server"}
							},
							{
								text: {name: "MongoDb"}
							},
							{
								text: {name: "MariaDb"}
							},
							{
								text: {name: "Firebase"},
								connectors: {
									style: {
										stroke: "yellow"
									}
								},
								children:[
									{
										text: {name: "Real time"}
									}
								]
							}
						]
					}
				]
			}
		]
	}
};
