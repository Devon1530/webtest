var mymap = L.map('mapid').setView([24.969249, 121.267454], 22);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGV2b245MjEiLCJhIjoiY2tnN293cHpoMDllczJ5bnY5dXdmcW43aSJ9.WNT_Bd1MAFvBx6BibFqbqg'
}).addTo(mymap);


var greenIcon = L.icon({
    iconUrl: 'green.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var yellowIcon = L.icon({
    iconUrl: 'yellow.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'red.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var oaa_1=Math.floor(Math.random()*100);  //教務處
var oga_1=Math.floor(Math.random()*100);  //總務處
var epso_1=Math.floor(Math.random()*100); //環境保護暨安全衛生中心
var lab_1=Math.floor(Math.random()*100);  //實驗室
var classroom_1=Math.floor(Math.random()*100);  //教室
var num1=oaa_1+oga_1+epso_1+lab_1+classroom_1; //一館

var ce_2=Math.floor(Math.random()*100);  //工程學院
var cems_2=Math.floor(Math.random()*100); //化學工程與材料科學學系
var iem_2=Math.floor(Math.random()*100);  //工業工程與管理學系
var rest_2=Math.floor(Math.random()*100); //資源與環境科學技術系
var num2=ce_2+cems_2+iem_2+rest_2;  //二館

var dacd_3=Math.floor(Math.random()*100); //藝術創意與發展學系
var me_3=Math.floor(Math.random()*100); //機械工程學系
var uf_3=Math.floor(Math.random()*100); //三館地下室
var num3=dacd_3+me_3+uf_3;  //三館

var cgs_5=Math.floor(Math.random()*100);  //通識教學部
var flal_5=Math.floor(Math.random()*100); //應用外語學系
var cll_5=Math.floor(Math.random()*100);  //中國語文學系
var lib_5=Math.floor(Math.random()*150);  //圖書館
var ysh_5=Math.floor(Math.random()*100);  //彥公廳
var num5=cgs_5+flal_5+cll_5+lib_5+ysh_5;  //五館

var opa_6=Math.floor(Math.random()*100);  //公共事務室
var cmclassroom_6=Math.floor(Math.random()*300); //管理學院教室
var yzh_6=Math.floor(Math.random()*200);  //有庠廳
var num6=opa_6+cmclassroom_6+yzh_6;  //六館

var ilcc_7=Math.floor(Math.random()*100); //國際語言文化中心
var oia_7=Math.floor(Math.random()*100); //國際暨兩岸事務室
var cece_7=Math.floor(Math.random()*300); //電機通訊學院教室
var num7=ilcc_7+oia_7+cece_7;  //七館


var marker1 ;
var marker2 ;
var marker3 ;
var marker5 ;
var marker6 ;
var marker7 ;


if(num1<200){
    marker1 = L.marker([24.970446, 121.266635],{icon: greenIcon}).addTo(mymap);
} else if(num1>=200 && num1<300){
    marker1 = L.marker([24.970446, 121.266635],{icon: yellowIcon}).addTo(mymap);
} else{
    marker1 = L.marker([24.970446, 121.266635],{icon: redIcon}).addTo(mymap);
}

if(num2<200){
    marker2 = L.marker([24.969270, 121.268201],{icon: greenIcon}).addTo(mymap);
} else if(num2>=200 && num2<300){
    marker2 = L.marker([24.969270, 121.268201],{icon: yellowIcon}).addTo(mymap);
} else{
    marker2 = L.marker([24.969270, 121.268201],{icon: redIcon}).addTo(mymap);
}

if(num3<200){
    marker3 = L.marker([24.969239, 121.266773],{icon: greenIcon}).addTo(mymap);
} else if(num3>=200 && num3<300){
    marker3 = L.marker([24.969239, 121.266773],{icon: yellowIcon}).addTo(mymap);
} else{
    marker3 = L.marker([24.969239, 121.266773],{icon: redIcon}).addTo(mymap);
}

if(num5<200){
    marker5 = L.marker([24.970144, 121.268311],{icon: greenIcon}).addTo(mymap);
} else if(num5>=200 && num5<300){
    marker5 = L.marker([24.970144, 121.268311],{icon: yellowIcon}).addTo(mymap);
} else{
    marker5 = L.marker([24.970144, 121.268311],{icon: redIcon}).addTo(mymap);
}

if(num6<200){
    marker6 = L.marker([24.970758, 121.267770],{icon: greenIcon}).addTo(mymap);
} else if(num6>=200 && num6<300){
    marker6 = L.marker([24.970758, 121.267770],{icon: yellowIcon}).addTo(mymap);
} else{
    marker6 = L.marker([24.970758, 121.267770],{icon: redIcon}).addTo(mymap);
}

if(num7<200){
    marker7 = L.marker([24.968595, 121.266772],{icon: greenIcon}).addTo(mymap);
} else if(num7>=200 && num7<300){
    marker7 = L.marker([24.968595, 121.266772],{icon: yellowIcon}).addTo(mymap);
} else{
    marker7 = L.marker([24.968595, 121.266772],{icon: redIcon}).addTo(mymap);
}


var chart = L.control({position: 'bottomright'});
chart.onAdd = function (mymap) {
    var div = L.DomUtil.create('div', 'chart');
    div.id="chartpie";
    return div;
};
chart.addTo(mymap);

var myChart = echarts.init(document.getElementById('chartpie'));
option = {
    title: {
            text: '各館的人數占比圖: 目前總共 '+(num1+num2+num3+num5+num6+num7)+'人'
        },
    series : [
    {
        name: '占比圖',
        type: 'pie',
        radius: '80%',
        roseType: 'angle',
        data:[
            {value:num1, name:'一館'},
            {value:num2, name:'二館'},
            {value:num3, name:'三館'},
            {value:num5, name:'五館'},
            {value:num6, name:'六館'},
            {value:num7, name:'七館'}
        ]
    }
    ]  
};

myChart.setOption(option);


var content1='<div style="width:450px;height:300px"id="mark1"></div>'; //一館的彈出式視窗
marker1.bindPopup(content1,{maxWidth:500});
marker1.on('popupopen', function(e) {
                     
    var subChart = echarts.init(document.getElementById('mark1'));          
    option = {
        title: {
            text: '目前一館有 : '+num1+' 人'
        },
        series : [
        {
            name: '一館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:oaa_1, name:'教務處'},
                {value:oga_1, name:'總務處'},
                {value:epso_1, name:'環境保護暨安全衛生中心'},
                {value:lab_1, name:'實驗室'},
                {value:classroom_1, name:'其餘教室'}
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});

var content2='<div style="width:450px;height:300px"id="mark2"></div>'; //二館的彈出式視窗
marker2.bindPopup(content2,{maxWidth:500});
marker2.on('popupopen', function(e) {
                     
    var subChart = echarts.init(document.getElementById('mark2'));          
    option = {
        title: {
            text: '目前二館有 : '+num2+' 人'
        },
        series : [
        {
            name: '二館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:ce_2, name:'工程學院教室'},
                {value:cems_2, name:'化學工程與材料科學學系教室'},
                {value:iem_2, name:'工業工程與管理學系教室'},
                {value:rest_2, name:'資源與環境科學技術系教室'}             
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});

var content3='<div style="width:450px;height:300px"id="mark3"></div>'; //三館的彈出式視窗
marker3.bindPopup(content3,{maxWidth:500});
marker3.on('popupopen', function(e) {
                     
    var subChart = echarts.init(document.getElementById('mark3'));          
    option = {
        title: {
            text: '目前三館有 : '+num3+' 人'
        },
        series : [
        {
            name: '三館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:dacd_3, name:'藝術創意與發展學系教室'},
                {value:me_3, name:'機械工程學系教室'},
                {value:uf_3, name:'三館地下室'}
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});

var content5='<div style="width:450px;height:300px"id="mark5"></div>'; //五館的彈出式視窗
marker5.bindPopup(content5,{maxWidth:500});
marker5.on('popupopen', function(e) {
                     
var subChart = echarts.init(document.getElementById('mark5'));          
    option = {
        title: {
            text: '目前五館有 : '+num5+' 人'
        },
        series : [
        {
            name: '五館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:cgs_5, name:'通識教學部'},
                {value:flal_5, name:'應用外語學系教室'},
                {value:cll_5, name:'中國語文學系教室'},
                {value:lib_5, name:'圖書館'},
                {value:ysh_5, name:'彥公廳'}
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});

var content6='<div style="width:450px;height:300px"id="mark6"></div>'; //六館的彈出式視窗
marker6.bindPopup(content6,{maxWidth:500});
marker6.on('popupopen', function(e) {
                     
    var subChart = echarts.init(document.getElementById('mark6'));          
    option = {
        title: {
            text: '目前六館有 : '+num6+' 人'
        },
        series : [
        {
            name: '六館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:opa_6, name:'公共事務室'},
                {value:cmclassroom_6, name:'管理學院教室'},
                {value:yzh_6, name:'有庠廳'}
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});

var content7='<div style="width:450px;height:300px"id="mark7"></div>'; //七館的彈出式視窗
marker7.bindPopup(content7,{maxWidth:500});
marker7.on('popupopen', function(e) {
                     
    var subChart = echarts.init(document.getElementById('mark7'));          
    option = {
        title: {
            text: '目前七館有 : '+num7+' 人'
        },
        series : [
        {
            name: '七館',
            type: 'pie',
            radius: '70%',
            roseType: 'angle',
            data:[
                {value:ilcc_7, name:'國際語言文化中心'},
                {value:oia_7, name:'國際暨兩岸事務室'},
                {value:cece_7, name:'電機通訊學院教室'}
            ]
        }
        ]  
    };                      
    subChart.setOption(option);
});