

var svglocation = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px">'+    	
	'<circle fill="#FFFFFF" stroke="#AAAAAA" stroke-width="1" cx="15" cy="15" r="8"/>' +
	'<circle fill="#0099ff" stroke="#00aaff" stroke-width="1" cx="15" cy="15" r="5"/>'+
	'</svg>';
	
var svglocationNavi = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="80px" height="80px">'+    	
	'<circle fill="#ffffff" fill-opacity="0.1" stroke="#0099ff" stroke-width="0.5" cx="40" cy="40" r="39"/>' +
	'<circle fill="#FFFFFF" stroke="#bbbbbb" stroke-width="0.5" cx="40" cy="40" r="15"/>' +
	'<text x="35" y="12" fill="#000000" font-size="8pt" >&#21271;</text>'+
	'<text x="45" y="68" fill="#000000" font-size="8pt" rotate="180" >&#21335;</text>'+
	'<text x="12" y="45" fill="#000000" font-size="8pt" rotate="270" >&#35199;</text>'+
	'<text x="68" y="35" fill="#000000" font-size="8pt" rotate="90" >&#19996;</text>'+
	'</svg>';

var svglocationWarn = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px">'+    
	'<circle fill="#FFFFFF" stroke="#AA0000" stroke-width="1" cx="15" cy="15" r="8"/>' +
	'<circle fill="#ff3333" stroke="#ff0000" stroke-width="1" cx="15" cy="15" r="5"/></svg>';
	
var svgap = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px">'+    
	'<circle fill="#FFFFFF" stroke="#BBBBBB" stroke-width="1" cx="15" cy="15" r="8"/>' +
	'<circle fill="#2828ff" stroke="#0000FF" stroke-width="1" cx="15" cy="15" r="5"/></svg>';
	
var svgselect = '<svg version="1.1" id="Layer_1" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">'+    
		'<path fill="#ff0000" d="M20.906,10.438c0,4.367-6.281,14.312-7.906,17.031c-1.719-2.75-7.906-12.665-7.906-17.031S10.634,2.531,15,2.531S22.906,6.071,22.906,10.438z"/>'+
		'</svg>';//<text x="9.5" dy="13" fill="#FFFFFF" font-size="5pt" >oo</text>
	
var svgroutestart = '<svg version="1.1" id="Layer_1" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">'+    
	'<path fill="#00CD00" stroke="#ffffff" stroke-width="1" d="M22.906,10.438c0,4.367-6.281,14.312-7.906,17.031c-1.719-2.75-7.906-12.665-7.906-17.031S10.634,2.531,15,2.531S22.906,6.071,22.906,10.438z"/>'+
	'<text x="10.5" dy="14" fill="#FFFFFF" font-size="7pt" >&#36215;</text></svg>';	

var svgrouteend = '<svg version="1.1" id="Layer_1" encoding="UTF-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30" enable-background="new 0 0 30 30" xml:space="preserve">'+    
	'<path fill="#CD0000" stroke="#ffffff" stroke-width="1" d="M22.906,10.438c0,4.367-6.281,14.312-7.906,17.031c-1.719-2.75-7.906-12.665-7.906-17.031S10.634,2.531,15,2.531S22.906,6.071,22.906,10.438z"/>'+
	'<text x="10.5" dy="14" fill="#FFFFFF" font-size="7pt" >&#32456;</text></svg>';

	
var mysvglocation = new Image();
mysvglocation.src = 'data:image/svg+xml,' + escape(svglocation);	
var mysvglocationNavi = new Image();// 导航起点
mysvglocationNavi.src = 'data:image/svg+xml,' + escape(svglocationNavi);	
var mysvglocationWarn = new Image();
mysvglocationWarn.src = 'data:image/svg+xml,' + escape(svglocationWarn);
var mysvgap = new Image();
var mysvgselect = new Image();
mysvgselect.src = 'data:image/svg+xml,' + escape(svgselect);
var mysvgroutestart = new Image();
mysvgroutestart.src = 'data:image/svg+xml,' + escape(svgroutestart);
var mysvgrouteend = new Image();
mysvgrouteend.src = 'data:image/svg+xml,' + escape(svgrouteend);
	
// interaction.Select
var selectSingleClickStyle = function(feature){
	if (feature.values_.sfloor != undefined){
		var style = new ol.style.Style({
			image: new ol.style.Icon({
				img: mysvgroutestart,
				imgSize: [30, 30],   // 图标大小
				anchor: [0.5,1],     // 摆放位置
				scale: map.getView().getZoom() / 20  // 根据层级缩放SVG图标
			}),
			zIndex: 700
		});
	}else if (feature.values_.efloor != undefined){
		var style = new ol.style.Style({
			image: new ol.style.Icon({
				img: mysvgrouteend,
				imgSize: [30, 30],   // 图标大小
				anchor: [0.5,1],     // 摆放位置
				scale: map.getView().getZoom() / 20  // 根据层级缩放SVG图标
			}),
			zIndex: 700
		});
	}else{
		var style =  new ol.style.Style({
			image: new ol.style.Circle({
				fill: new ol.style.Fill({
					color: [255,255,255,0.1]
				}),
				radius: 6,
			})
		});
	}
	return style;
};


// 隐藏定位 style 
var locationStyleUnshow= new ol.style.Style({
	image: new ol.style.Circle({
		fill: new ol.style.Fill({
			color: [255,255,255,0.1]
		}),
		radius: 6,
	})
});
// 定位 style 
var locationStyle =[
	new ol.style.Style({
		image: new ol.style.Icon({
			// img: mysvglocation,
			src: './icon/locate_rotation.png',
			rotateWithView: true,
			rotation: 0,
			// imgSize: [30, 30],   // 图标大小
			anchor: [0.5,0.34],    // 摆放位置
			scale: 0.3
		}),
		zIndex: 600
	}),
	new ol.style.Style({
		image: new ol.style.Icon({
			img: mysvglocation,
			imgSize: [30, 30],   // 图标大小
			anchor: [0.5,0.5]    // 摆放位置
		}),
		zIndex: 600
	})
]; 
// 定位 style --导航
var locationNaviStyle = [
	new ol.style.Style({
		image: new ol.style.Icon({
			// img: mysvglocation,
			src: './icon/locate-navi1.png',
			rotateWithView: true,
			rotation: 0,
			// imgSize: [30, 30],   // 图标大小
			anchor: [0.5,0.5],    // 摆放位置
			scale: 0.3
		}),
		zIndex: 600
	}),
	new ol.style.Style({
		image: new ol.style.Icon({
			img: mysvglocationNavi,
			rotateWithView: true,
			imgSize: [80, 80],   // 图标大小
			anchor: [0.5,0.5],    // 摆放位置
		}),
		zIndex: 599
	})
];
// 定位 style 电子围栏预警
var locationWarnStyle = new ol.style.Style({
	image: new ol.style.Icon({
		img: mysvglocationWarn,
		imgSize: [40, 40],   // 图标大小
		anchor: [0.5,0.5]    // 摆放位置
	}),
	zIndex: 600
});

// 收藏 style	
var collectionStyle = new ol.style.Style({
	image: new ol.style.RegularShape({
		points: 5,  // 点数
		radius1: 7,  // 外圈
		radius2: 4,	  // 内圈
		fill: new ol.style.Fill({
			color: '#FF8C00'
		}),
		// stroke: new ol.style.Stroke({
			// color: '#CD6600',
			// size: 0
		// }),
		angle: 0,          // 旋转角度 
		snapToPixel: false   // 模糊
	}),
	zIndex: 450
});

// 检索
var selectStyle = {
	'30050100' : new ol.style.Style({
		image: new ol.style.Icon({
			// img: mysvgselect,
			src: './icon/select.png',
			imgSize: [22, 30],   // 图标大小
			anchor: [0.5,1]    // 摆放位置
		}),
		zIndex: 460
	}),
	'30050300' : new ol.style.Style({
		image: new ol.style.Icon({
			// img: mysvgselect,
			src: './icon/select.png',
			imgSize: [22, 30],   // 图标大小
			anchor: [0.5,1]    // 摆放位置
		}),
		zIndex: 460
	}),
	'30050800' : new ol.style.Style({
		image: new ol.style.Icon({
			// img: mysvgselect,
			src: './icon/select.png',
			imgSize: [22, 30],   // 图标大小
			anchor: [0.5,1]    // 摆放位置
		}),
		zIndex: 460
	})
};

// 绘制
// interaction.Draw
var drawlinestringStyle = new ol.style.Style({
	fill: new ol.style.Fill({
		color: 'rgba(255, 255, 255, 0.2)'
	}),
	stroke: new ol.style.Stroke({
		color: 'rgba(0, 0, 0, 0.5)',
		lineDash: [10, 10],
		width: 2
	}),
	image: new ol.style.Circle({
		radius: 5,
		stroke: new ol.style.Stroke({
		color: 'rgba(0, 0, 0, 0.7)'
		}),
		fill: new ol.style.Fill({
		color: 'rgba(255, 255, 255, 0.2)'
		})
	})
});
// Draw END
var drawstyle = new ol.style.Style({
    fill: new ol.style.Fill({
		color: 'rgba(255,0, 0, 1)'
    }),
    stroke: new ol.style.Stroke({
		color: '#ffcc33',
		width: 2
    }),
    image: new ol.style.Circle({
		radius: 7,
		fill: new ol.style.Fill({
			color: '#ffcc33'
		})
	}),
	zIndex: 500
});
var drawpointstyle = new ol.style.Style({
    image: new ol.style.Circle({
		radius: 4,
		stroke: new ol.style.Stroke({
			color: '#ffcc33',
			width: 1.5
		}),
		fill: new ol.style.Fill({
			color: '#ffffff'
		})
	}),
	zIndex: 500
});
	
// 电子围栏 1-4 系数越大颜色越深
var electronicFenceStyle = {
	// polygon
	'1' /*黄*/: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [255,255,0,1],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,255,0,0.3]
		})
	}),
	'2' /*橙*/: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [250,128,10,1],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [250,128,10,0.3],
		})
	}),
	'3' /*红*/: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [255,0,0,1],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,0,0,0.3]
		})
	}),
	'4' /*紫*/: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [255,0,255,1],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,0,255,0.3]
		})
	}),
	// point
	'11' /*黄*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/electronic1.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		text: new ol.style.Text({
			font: '0.61em sans-serif',
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [255,255,0,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:300
	}),	
	'22' /*橙*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/electronic2.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		text: new ol.style.Text({
			font: '0.61em sans-serif',
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [250,128,10,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:300
	}),		
	'33' /*红*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/electronic3.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		text: new ol.style.Text({
			font: '0.61em sans-serif',
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [255,0,0,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:300
	}),		
	'44' /*紫*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/electronic4.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		text: new ol.style.Text({
			font: '0.61em sans-serif',
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [255,0,255,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:300
	})
};
	
// 规划路线style
var routeStyle = 	{
	'1': [	new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [0, 153, 255,1],
					width: 8
				}),
			}),
			new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [60, 173, 255,1],
					// color: gradient,
					// lineCap: , //butt, round, or square Default is round.
					// lineJoin: , //bevel, round, or miter Default is round.
					// lineDash: [1,2,3,4,5,6], // 虚线
					// lineDashOffset: 1,
					// miterLimit: ,  // 最大斜接长度
					width: 6
				}),
				zIndex: 250
			})
		],
	'0': [	new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [200, 200, 200,1],
					width: 8
				}),
			}),
			new ol.style.Style({
				stroke: new ol.style.Stroke({
					color: [220, 220, 220,1],
					// color: gradient,
					// lineCap: , //butt, round, or square Default is round.
					// lineJoin: , //bevel, round, or miter Default is round.
					// lineDash: [1,2,3,4,5,6], // 虚线
					// lineDashOffset: 1,
					// miterLimit: ,  // 最大斜接长度
					width: 6
				}),
				zIndex: 250
			})
		]
};
	
// 基础图层style
var geojsonstyle = {
	'999999' : new ol.style.Style({
		fill: new ol.style.Fill({
			color: [200,200,200,1]
		}),
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width:1
		}),
		zIndex: 100
	}),
	/************
	*
	*polygon
	*
	************/
	'10020511'/*公司范围*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,255,255,1]
		}),
		zIndex:101
	}),
	'10020401'/*教室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,255,255,1]
		}),
		zIndex:101
	}),
	'10020101'/*监狱*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width:1
		}),
		fill: new ol.style.Fill({
			color: [255,255,255,1]
		}),
		zIndex:101
	}),
	'10030101'/*监室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [250,224,204,1]
		}),
		zIndex: 103
	}),
	'10030102'/*放风场*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [217,237,218,1]
		}),
		zIndex: 103
	}),
	'10030103'/*谈话室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [195,229,233,1]
		}),
		zIndex: 103
	}),
	'10030104'/*管教办公室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [146,183,188,1]
		}),
		zIndex: 103
	}),
	'10030105'/*医疗器具室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [211,211,180,1]
		}),
		zIndex: 103
	}),
	'10030106'/*储藏室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [252,246,156,1]
		}),
		zIndex: 103
	}),
	'10030107'/*开水间*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,213,219,1]
		}),
		zIndex: 103
	}),
	'10030108'/*休息室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,143,124,1]
		}),
		zIndex: 103
	}),
	'10030109'/*值班室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [199,161,149,1]
		}),
		zIndex: 103
	}),
	'10030110'/*分控室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [189,139,142,1]
		}),
		zIndex: 103
	}),
	'10030111'/*禁闭室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [210,190,113,1]
		}),
		zIndex: 103
	}),
	'10030112'/*会见室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [174,189,196,1]
		}),
		zIndex: 103
	}),
	'10030113'/*询问室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [199,214,225,1]
		}),
		zIndex: 103
	}),
	'10030114'/*淋浴室*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,188,155,1]
		}),
		zIndex: 103
	}),
	'10030115'/*铁栅隔离*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [255,255,255,0.4],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [199,214,225,0.4]
		}),
		zIndex: 102
	}),
	'10030501'/*总裁*/: new ol.style.Style({ 
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [204,153,255,0.5]
		}),
		zIndex: 103
	}),
	'10030502' /*财务室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030503' /*涉密机房*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,153,0,0.5]
		}),
		zIndex: 103
	}),
	'10030504' /*会议室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,255,204,0.5]
		}),
		zIndex: 103
	}),
	'10030505' /*办公桌*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [108,94,80,0.8]
		}),
		zIndex: 104
	}),
	'10030506' /*技术总监*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [220,220,255,0.5]
		}),
		zIndex: 103
	}),
	'10030507' /*市场部*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030508' /*综合部*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030509' /*质量部*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030510' /*商务部*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030511' /*人力资源*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030512' /*项目管理*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030513' /*地图办公室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [233,242,239,0.5]
		}),
		zIndex: 103
	}),
	'10030514' /*总经理室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [220,220,255,0.5]
		}),
		zIndex: 103
	}),
	'10030515' /*副总经理室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [220,220,255,0.5]
		}),
		zIndex: 103
	}),
	'10030516' /*经理*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [220,220,255,0.5]
		}),
		zIndex: 103
	}),
	'10030517' /*资料室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [252,231,212,0.5]
		}),
		zIndex: 103
	}),
	'10030518' /*技术服务*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [252,231,212,0.5]
		}),
		zIndex: 103
	}),
	'10030519' /*打印室*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [252,231,212,0.5]
		}),
		zIndex: 103
	}),
	'10030520' /*设备间*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [252,231,212,0.5]
		}),
		zIndex: 103
	}),
	'10030599' /*其他*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [252,231,212,0.5]
		}),
		zIndex: 103
	}),
	// '10030101' /*看板*/: new ol.style.Style({  
		// stroke: new ol.style.Stroke({
			// color: [128,128,128,0.6],
			// width: 1
		// }),
		// fill: new ol.style.Fill({
			// color: [255,153,204,0.8]
		// }),
		// zIndex: 104
	// }),
	'10030602' /*卫生间*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [255,178,190,1]
		}),
		zIndex: 104
	}),
	'10030603' /*沙发*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [204,204,104,0.8]
		}),
		zIndex: 104
	}),
	'10030604' /*电梯间*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [180,180,180,0.5]
		}),
		zIndex: 103
	}),
	'10030605' /*楼梯间*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [255,255,255,1],
			width: 0.8
		}),
		fill: new ol.style.Fill({
			color: [180,180,180,0.5]
		}),
		zIndex: 103
	}),
	'10030606' /*书架*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [224,224,224,0.8]
		}),
		zIndex: 104
	}),
	'10030607' /*机柜*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [104,104,104,0.8]
		}),
		zIndex: 104
	}),
	'10030608' /*资料架*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [224,224,224,0.8]
		}),
		zIndex: 104
	}),
	'10030609' /*衣柜*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [204,204,204,0.8]
		}),
		zIndex: 104
	}),
	'10030610' /*床*/: new ol.style.Style({  
		stroke: new ol.style.Stroke({
			color: [128,128,128,0.6],
			width: 1
		}),
		fill: new ol.style.Fill({
			color: [244,244,204,0.8]
		}),
		zIndex: 105
	}),


	/************
	*
	*polyline
	*
	************/
	'20020900'/*道路*/: new ol.style.Style({
		stroke: new ol.style.Stroke({
			color: [208,128,128,0.6],
			width: 0.8
		}),
		zIndex:200	
	}),
	/************
	*
	*point
	*
	************/
	'30060000' /*公司名*/: new ol.style.Style({  
		text: new ol.style.Text({
			font: '1em sans-serif',
			// scale: 100,
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [40,40,40,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 3
			})
		}),
		zIndex:350
	}),	
	'30060100' /*工位*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/chair_right.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		zIndex:300
	}),
	'30060200' /*工位*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/chair_left.png',
			anchor: [0.5,0.5],
			rotateWithView: true
		}),
		zIndex:300
	}),	
	'30060300' /*会议室&财务室&公共办公区&总经理室*/: new ol.style.Style({  
		text: new ol.style.Text({
			font: '0.71em sans-serif',
			// scale: 100,
			textAlign: 'center',
			textBaseline: 'bottom',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [40,40,40,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:340
	}),
	'30040100' /*教室*/: new ol.style.Style({  
		text: new ol.style.Text({
			font: '0.71em sans-serif',
			// scale: 100,
			textAlign: 'center',
			textBaseline: 'middle',
			offsetY: -5,
			fill: new ol.style.Fill({
				color: [40,40,40,1]
			}),
			stroke: new ol.style.Stroke({
				color: [255,255,255,1],
				width: 1
			})
		}),
		zIndex:340
	}),
	'30050100' /*卫生间*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/wc.png',
		}),
		zIndex:330
	}),	
	'30050200' /*楼梯*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/stair.png',
		}),
		zIndex:330
	}),	
	'30050300' /*电梯*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/elevator.png',
		}),
		zIndex:330
	}),	
	'30050800' /*大门*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/door.png',
		}),
		zIndex:330
	}),	
	'30052200' /*床*/: new ol.style.Style({  
		image: new ol.style.Icon({
			src: './icon/bed.png',
		}),
		zIndex:330
	}),	
	
};