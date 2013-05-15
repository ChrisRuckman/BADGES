/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['andika, sans-serif']='<script src=\"http://use.edgefonts.net/andika:n4:all.js\"></script>';
   fonts['carme, sans-serif']='<script src=\"http://use.edgefonts.net/carme:n4:all.js\"></script>';
   fonts['cabin, sans-serif']='<script src=\"http://use.edgefonts.net/cabin:n4,i4,n7,i7,n5,i5,n6,i6:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'GEAR_RW',
            type:'rect',
            rect:['62','120','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gear_top52',
            type:'rect',
            rect:['569px','334px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'GEAR_GTemp',
            type:'rect',
            rect:['34px','294px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gear_Selene32',
            type:'rect',
            rect:['176px','604px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         },
         {
            id:'gear_IW',
            type:'rect',
            rect:['667px','427px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gear_MarsCuriosity',
            type:'rect',
            rect:['640px','610px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Desc_Mars',
            type:'rect',
            rect:['315px','103px','auto','auto','auto','auto']
         },
         {
            id:'gear_Selene72',
            type:'rect',
            rect:['265px','540px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gear_waves2',
            type:'rect',
            rect:['13px','400px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'connector12',
            type:'image',
            rect:['-130px','303px','50px','201px','auto','auto'],
            fill:["rgba(0,0,0,0)",'publish/web/images/connector1.png','0px','0px'],
            transform:[[],['61']]
         },
         {
            id:'GEAR_ROVER',
            type:'rect',
            rect:['18px','433px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'GEAR_EVAL',
            type:'rect',
            rect:['857px','409px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'GEAR_MENTOR',
            type:'rect',
            rect:['698px','176px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'gear_grandprize',
            type:'rect',
            rect:['413px','445px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Desc_Champ',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Mentor',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'GEAR_COACH',
            type:'rect',
            rect:['251px','364px','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'Desc_RW',
            type:'rect',
            rect:['314px','105px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Rover3',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Coach',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_top5',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Judge',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Flight',
            type:'rect',
            rect:['324px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_Waves',
            type:'rect',
            rect:['324px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_ETE',
            type:'rect',
            rect:['324px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_AA2',
            type:'rect',
            rect:['324px','103px','auto','auto','auto','auto']
         },
         {
            id:'Desc_3star',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_IW',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'Desc_7star',
            type:'rect',
            rect:['323px','103px','auto','auto','auto','auto'],
            transform:[]
         },
         {
            id:'GEAR_FLIGHT',
            type:'rect',
            rect:['155px','261px','auto','auto','auto','auto'],
            cursor:['pointer'],
            transform:[]
         },
         {
            id:'AAgear',
            type:'image',
            rect:['37px','177px','56px','56px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"AAgear.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['98px','190px','128px','31px','auto','auto'],
            text:"Astronaut Academy for STEM badges",
            font:['Arial, Helvetica, sans-serif',14,"rgba(180,180,180,1.00)","normal","none",""]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:['92px','148px','195px','31px','auto','auto'],
            text:"Visit our Project Whitecard Studios badge partner site:",
            font:['Arial, Helvetica, sans-serif',14,"rgba(180,180,180,1.00)","normal","none",""]
         }],
         symbolInstances: [
         {
            id:'Desc_Mentor',
            symbolName:'Desc_Mentor'
         },
         {
            id:'Desc_Waves',
            symbolName:'Desc_Waves'
         },
         {
            id:'Desc_3star',
            symbolName:'Desc_3star'
         },
         {
            id:'GEAR_COACH',
            symbolName:'GEAR_COACH'
         },
         {
            id:'GEAR_RW',
            symbolName:'GEAR_RW'
         },
         {
            id:'gear_IW',
            symbolName:'gear_IW'
         },
         {
            id:'gear_Selene32',
            symbolName:'gear_Selene3'
         },
         {
            id:'GEAR_FLIGHT',
            symbolName:'GEAR_GLIGHT'
         },
         {
            id:'Desc_AA2',
            symbolName:'Desc_AA'
         },
         {
            id:'Desc_Champ',
            symbolName:'Desc_Champ'
         },
         {
            id:'Desc_7star',
            symbolName:'Desc_7star'
         },
         {
            id:'Desc_Rover3',
            symbolName:'Desc_Rover'
         },
         {
            id:'Desc_IW',
            symbolName:'Desc_IW'
         },
         {
            id:'gear_grandprize',
            symbolName:'gear_grandprize'
         },
         {
            id:'GEAR_EVAL',
            symbolName:'GEAR_EVAL'
         },
         {
            id:'Desc_Judge',
            symbolName:'Desc_Judge'
         },
         {
            id:'Desc_RW',
            symbolName:'Desc_RW'
         },
         {
            id:'GEAR_MENTOR',
            symbolName:'GEAR_MENTOR'
         },
         {
            id:'Desc_ETE',
            symbolName:'Desc_ETE'
         },
         {
            id:'GEAR_GTemp',
            symbolName:'GEAR_GTemp'
         },
         {
            id:'gear_waves2',
            symbolName:'gear_waves'
         },
         {
            id:'gear_top52',
            symbolName:'gear_top5'
         },
         {
            id:'GEAR_ROVER',
            symbolName:'GEAR_ROVER'
         },
         {
            id:'Desc_Flight',
            symbolName:'Desc_Flight'
         },
         {
            id:'Desc_top5',
            symbolName:'Desc_top5'
         },
         {
            id:'Desc_Coach',
            symbolName:'Desc_Coach'
         },
         {
            id:'gear_MarsCuriosity',
            symbolName:'gear_MarsCuriosity'
         },
         {
            id:'Desc_Mars',
            symbolName:'Desc_Mars'
         },
         {
            id:'gear_Selene72',
            symbolName:'gear_Selene7'
         }
         ]
      },
   states: {
      "Base State": {
         "${_gear_waves2}": [
            ["style", "top", '400px'],
            ["style", "left", '13px'],
            ["style", "cursor", 'pointer']
         ],
         "${_GEAR_GTemp}": [
            ["style", "top", '303px'],
            ["style", "left", '421px'],
            ["style", "cursor", 'pointer']
         ],
         "${_gear_Selene72}": [
            ["style", "top", '557px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '274px']
         ],
         "${_Desc_Mentor}": [
            ["style", "display", 'block'],
            ["style", "left", '323px'],
            ["style", "top", '103px']
         ],
         "${_Desc_ETE}": [
            ["style", "display", 'block'],
            ["style", "left", '324px'],
            ["style", "top", '103px']
         ],
         "${_GEAR_MENTOR}": [
            ["style", "top", '176px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '698px']
         ],
         "${_GEAR_ROVER}": [
            ["style", "top", '324px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '68px']
         ],
         "${_AAgear}": [
            ["style", "height", '56px'],
            ["style", "top", '177px'],
            ["style", "left", '37px'],
            ["style", "width", '56px']
         ],
         "${_TextCopy}": [
            ["style", "top", '148px'],
            ["style", "width", '195px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(180,180,180,1.00)'],
            ["style", "left", '92px'],
            ["style", "font-size", '14px']
         ],
         "${_Desc_RW}": [
            ["style", "top", '105px'],
            ["style", "left", '314px'],
            ["style", "display", 'block']
         ],
         "${_Desc_Flight}": [
            ["style", "display", 'block'],
            ["style", "left", '324px'],
            ["style", "top", '103px']
         ],
         "${_Desc_Judge}": [
            ["style", "display", 'block'],
            ["style", "left", '323px'],
            ["style", "top", '103px']
         ],
         "${_Desc_Mars}": [
            ["style", "display", 'block'],
            ["style", "left", '315px'],
            ["style", "top", '103px']
         ],
         "${_GEAR_EVAL}": [
            ["style", "top", '409px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '857px']
         ],
         "${_Desc_AA2}": [
            ["style", "display", 'block'],
            ["style", "top", '103px'],
            ["style", "left", '324px'],
            ["style", "overflow", 'hidden']
         ],
         "${_gear_grandprize}": [
            ["style", "top", '445px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '413px']
         ],
         "${_Desc_IW}": [
            ["style", "top", '103px'],
            ["style", "left", '323px'],
            ["style", "display", 'block']
         ],
         "${_Desc_Champ}": [
            ["style", "top", '103px'],
            ["style", "left", '323px'],
            ["style", "display", 'block']
         ],
         "${_Desc_Rover3}": [
            ["style", "top", '103px'],
            ["style", "display", 'block'],
            ["style", "left", '323px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Desc_Coach}": [
            ["style", "top", '103px'],
            ["style", "left", '323px'],
            ["style", "display", 'block']
         ],
         "${_gear_top52}": [
            ["style", "top", '325px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '569px']
         ],
         "${_Desc_3star}": [
            ["style", "display", 'block'],
            ["style", "left", '323px'],
            ["style", "top", '103px']
         ],
         "${_connector12}": [
            ["style", "top", '303px'],
            ["transform", "rotateZ", '55deg'],
            ["style", "height", '201px'],
            ["style", "left", '-130px'],
            ["style", "width", '50px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '100%'],
            ["style", "width", '100%']
         ],
         "${_GEAR_FLIGHT}": [
            ["style", "top", '261px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '155px'],
            ["style", "cursor", 'pointer']
         ],
         "${_gear_IW}": [
            ["style", "top", '427px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '667px']
         ],
         "${_gear_Selene32}": [
            ["style", "top", '521px'],
            ["transform", "scaleY", '1'],
            ["transform", "scaleX", '1'],
            ["style", "left", '201px'],
            ["style", "cursor", 'pointer']
         ],
         "${_GEAR_RW}": [
            ["style", "top", '399px'],
            ["style", "left", '103px'],
            ["style", "cursor", 'pointer']
         ],
         "${_Text}": [
            ["style", "top", '190px'],
            ["style", "font-size", '14px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(180,180,180,1.00)'],
            ["style", "left", '98px'],
            ["style", "width", '128px']
         ],
         "${_Desc_top5}": [
            ["style", "display", 'block'],
            ["style", "left", '323px'],
            ["style", "top", '103px']
         ],
         "${_Desc_7star}": [
            ["style", "top", '103px'],
            ["style", "left", '323px'],
            ["style", "display", 'block']
         ],
         "${_Desc_Waves}": [
            ["style", "display", 'block'],
            ["style", "left", '324px'],
            ["style", "top", '103px']
         ],
         "${_gear_MarsCuriosity}": [
            ["style", "top", '610px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '640px']
         ],
         "${_GEAR_COACH}": [
            ["style", "top", '364px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '251px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid140", tween: [ "style", "${_Desc_Waves}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid151", tween: [ "style", "${_Desc_Waves}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid135", tween: [ "style", "${_Desc_top5}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid154", tween: [ "style", "${_Desc_top5}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid268", tween: [ "style", "${_gear_Selene32}", "left", '201px', { fromValue: '201px'}], position: 4000, duration: 0 },
            { id: "eid141", tween: [ "style", "${_Desc_ETE}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid150", tween: [ "style", "${_Desc_ETE}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid136", tween: [ "style", "${_Desc_Champ}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid159", tween: [ "style", "${_Desc_Champ}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid253", tween: [ "style", "${_GEAR_ROVER}", "left", '68px', { fromValue: '68px'}], position: 4000, duration: 0 },
            { id: "eid266", tween: [ "style", "${_gear_Selene72}", "left", '274px', { fromValue: '274px'}], position: 4000, duration: 0 },
            { id: "eid142", tween: [ "style", "${_Desc_IW}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid148", tween: [ "style", "${_Desc_IW}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid273", tween: [ "style", "${_gear_Selene32}", "top", '521px', { fromValue: '521px'}], position: 4000, duration: 0 },
            { id: "eid260", tween: [ "style", "${_GEAR_RW}", "left", '103px', { fromValue: '103px'}], position: 4000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Desc_Mars}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid167", tween: [ "style", "${_Desc_Mars}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid138", tween: [ "style", "${_Desc_Judge}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid153", tween: [ "style", "${_Desc_Judge}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid74", tween: [ "transform", "${_connector12}", "rotateZ", '55deg', { fromValue: '55deg'}], position: 2000, duration: 0, easing: "easeOutQuad" },
            { id: "eid218", tween: [ "style", "${_GEAR_GTemp}", "left", '421px', { fromValue: '421px'}], position: 4000, duration: 0 },
            { id: "eid269", tween: [ "style", "${_GEAR_ROVER}", "top", '324px', { fromValue: '324px'}], position: 4000, duration: 0 },
            { id: "eid270", tween: [ "style", "${_GEAR_RW}", "top", '399px', { fromValue: '399px'}], position: 4000, duration: 0 },
            { id: "eid271", tween: [ "style", "${_gear_top52}", "top", '325px', { fromValue: '325px'}], position: 4000, duration: 0 },
            { id: "eid132", tween: [ "style", "${_Desc_Coach}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid155", tween: [ "style", "${_Desc_Coach}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid144", tween: [ "style", "${_Desc_3star}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid149", tween: [ "style", "${_Desc_3star}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid139", tween: [ "style", "${_Desc_Flight}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid152", tween: [ "style", "${_Desc_Flight}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid212", tween: [ "style", "${_gear_top52}", "left", '569px', { fromValue: '569px'}], position: 4000, duration: 0 },
            { id: "eid129", tween: [ "style", "${_Desc_Rover3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_Desc_Rover3}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid146", tween: [ "style", "${_Desc_7star}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid147", tween: [ "style", "${_Desc_7star}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid201", tween: [ "style", "${_Desc_AA2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeOutQuad" },
            { id: "eid131", tween: [ "style", "${_Desc_RW}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid157", tween: [ "style", "${_Desc_RW}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid137", tween: [ "style", "${_Desc_Mentor}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid158", tween: [ "style", "${_Desc_Mentor}", "display", 'none', { fromValue: 'none'}], position: 4000, duration: 0 },
            { id: "eid274", tween: [ "style", "${_GEAR_GTemp}", "top", '303px', { fromValue: '303px'}], position: 4000, duration: 0 },
            { id: "eid272", tween: [ "style", "${_gear_Selene72}", "top", '557px', { fromValue: '557px'}], position: 4000, duration: 0 }         ]
      }
   }
},
"gear_XL": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'gear_XL',
      rect: ['-662px','-285px','187px','187px','auto','auto'],
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/gear_XL.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_XL}": [
            ["style", "top", '0px'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '187px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid5", tween: [ "style", "${_gear_XL}", "left", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "style", "${_gear_XL}", "top", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "transform", "${_gear_XL}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_L": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_L4',
      type: 'image',
      rect: ['-10px','13px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_L.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_L4}": [
            ["style", "top", '13px'],
            ["style", "left", '-10px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "transform", "${_gear_L4}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_M": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_M',
      type: 'image',
      rect: ['0px','0px','87px','88px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_M.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_M}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '-360deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid22", tween: [ "transform", "${_gear_M}", "rotateZ", '0deg', { fromValue: '-360deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_XXL": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_XXL',
      type: 'image',
      rect: ['0px','0px','254px','254px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_XXL.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '254px'],
            ["style", "width", '254px']
         ],
         "${_gear_XXL}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid25", tween: [ "transform", "${_gear_XXL}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_coach": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_XL_coach',
      type: 'image',
      rect: ['0px','0px','187px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','publish/web/images/gear_XL_coach.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_XL_coach}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '187px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid64", tween: [ "transform", "${_gear_XL_coach}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_waves": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_waves',
      type: 'image',
      rect: ['0px','0px','87px','88px','auto','auto'],
      fill: ['rgba(0,0,0,0)','publish/web/images/gear_waves.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_waves}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "transform", "${_gear_waves}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_GTEMP": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_GT',
      type: 'image',
      rect: ['0px','0px','87px','88px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_GT.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_GT}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid75", tween: [ "transform", "${_gear_GT}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_Selene3": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_Selene3',
      type: 'image',
      rect: ['0px','0px','87px','87px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_Selene3.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_Selene3}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '87px'],
            ["style", "left", '0px'],
            ["style", "width", '87px']
         ],
         "${symbolSelector}": [
            ["style", "height", '87px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid77", tween: [ "transform", "${_gear_Selene3}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_Selene7": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_Selene7',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_Selene7.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_Selene7}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid76", tween: [ "transform", "${_gear_Selene7}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_GLIGHT": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_FLIGHT',
      type: 'image',
      rect: ['0px','0px','142px','144px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_FLIGHT.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_FLIGHT}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '144px'],
            ["style", "left", '0px'],
            ["style", "width", '142px']
         ],
         "${symbolSelector}": [
            ["style", "height", '144px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid78", tween: [ "transform", "${_gear_FLIGHT}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_MarsCuriosity": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_CURIOSITY',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_CURIOSITY.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ],
         "${_gear_CURIOSITY}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid79", tween: [ "transform", "${_gear_CURIOSITY}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_IW": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_XL_IW',
      type: 'image',
      rect: ['0px','0px','187px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_XL_IW.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_XL_IW}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '187px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid80", tween: [ "transform", "${_gear_XL_IW}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_ROVER": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_ROVER',
      type: 'image',
      rect: ['0px','0px','87px','88px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_ROVER.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_ROVER}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '88px'],
            ["style", "width", '87px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid81", tween: [ "transform", "${_gear_ROVER}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_GTemp": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_GTEMP',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_GTEMP.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_GTEMP}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid82", tween: [ "transform", "${_gear_GTEMP}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_top5": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_top5',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_top5.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_top5}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid83", tween: [ "transform", "${_gear_top5}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_EVAL": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_EVAL',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_EVAL.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ],
         "${_gear_EVAL}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid84", tween: [ "transform", "${_gear_EVAL}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_MENTOR": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_MENTOR',
      type: 'image',
      rect: ['0px','0px','254px','254px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_MENTOR.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_MENTOR}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '254px'],
            ["style", "width", '254px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid85", tween: [ "transform", "${_gear_MENTOR}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_grandprize": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_grandPrize',
      type: 'image',
      rect: ['0px','0px','254px','254px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_grandPrize.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '254px'],
            ["style", "width", '254px']
         ],
         "${_gear_grandPrize}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid86", tween: [ "transform", "${_gear_grandPrize}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_COACH": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_COACH',
      type: 'image',
      rect: ['0px','0px','187px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_COACH.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '187px']
         ],
         "${_gear_COACH}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid87", tween: [ "transform", "${_gear_COACH}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_GrandPrize": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_XXL_GP',
      type: 'image',
      rect: ['0px','0px','254px','254px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_XXL_GP.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '254px'],
            ["style", "width", '254px']
         ],
         "${_gear_XXL_GP}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid58", tween: [ "transform", "${_gear_XXL_GP}", "rotateZ", '-360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"GEAR_RW": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_RW2',
      type: 'image',
      rect: ['0px','0px','142px','142px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_RW.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '142px'],
            ["style", "width", '142px']
         ],
         "${_gear_RW2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid88", tween: [ "transform", "${_gear_RW2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"gear_arm": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'Group',
      type: 'group',
      rect: ['0','0','223','223','auto','auto'],
      c: [
      {
         id: 'armgear2',
         type: 'image',
         rect: ['0px','0px','223px','223px','auto','auto'],
         fill: ['rgba(0,0,0,0)','images/armgear.png','0px','0px']
      }]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_armgear2}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '23deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '223px'],
            ["style", "width", '223px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid111", tween: [ "transform", "${_armgear2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 2000, easing: "swing" }         ]
      }
   }
},
"BUTTON-about": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '37px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Button-about_white": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'button_about_w',
      type: 'image',
      rect: ['0px','0px','37px','37px','auto','auto'],
      fill: ['rgba(0,0,0,0)','publish/web/images/button_about_w.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_about_w}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '37px'],
            ["style", "width", '37px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Rover": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Learners apply their knowledge of the rate formula and Pythagorean theorem to a space exploration challenge.',
      align: 'left',
      rect: ['14px','49px','307px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Lunar Rover Geometry',
      align: 'left',
      rect: ['14px','14px','307px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "height", '85px'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "width", '307px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "height", '45px'],
            ["style", "font-style", 'normal'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '307px']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_RW": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Modeling, teamwork, engineering skills applied to solve challenge: research &amp; redesign a mirror/sunshield for a Space Telescope. ',
      align: 'left',
      rect: ['23px','74px','346px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW NASA Engineering Design Challenge',
      align: 'left',
      rect: ['23px','12px','312px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '74px'],
            ["style", "width", '346px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '23px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '23px'],
            ["style", "font-size", '24px'],
            ["style", "top", '12px'],
            ["style", "width", '312px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '174px'],
            ["style", "width", '492px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Coach": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Time management/engineering skills applied to lead team to solve a Space Telescope mirror/sunshield redesign challenge. ',
      align: 'left',
      rect: ['14px','49px','336px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW RealWorld Coach Badge',
      align: 'left',
      rect: ['14px','14px','386px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "width", '336px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '386px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_IW": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['14px','49px','371px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Modeling, teamwork, engineering, and programming skills applied to present space telescope mirror/sunshield design in virtual world.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['14px','14px','344px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'RWIW InWorld Team Badge',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "width", '371px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '344px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_top5": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Advanced modeling/engineering/programming skills applied to present mirror/sunshield design for Space Telescope in virtual world.',
      align: 'left',
      rect: ['14px','49px','344px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW InWorld Top 5 Team Badge',
      align: 'left',
      rect: ['14px','14px','371px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "width", '344px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '371px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Champ": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Exemplary modeling/engineering/programming skills applied to present mirror/sunshield design for Space Telescope in virtual world.',
      align: 'left',
      rect: ['14px','77px','341px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW InWorld Champion Team Badge',
      align: 'left',
      rect: ['14px','14px','322px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '77px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "height", '85px'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "width", '341px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '322px']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Mentor": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Virtual world/engineering skills applied to lead team to present and improve NASA Space Telescope design in virtual world.',
      align: 'left',
      rect: ['14px','49px','335px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW InWorld Mentor Badge<br>',
      align: 'left',
      rect: ['14px','14px','352px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "width", '335px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '352px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Judge": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Skillfully/diplomatically used rubric to observe/question/evaluate virtual world Space Telescope design in virtual world tours.',
      align: 'left',
      rect: ['14px','49px','340px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'RWIW InWorld Judge Badge',
      align: 'left',
      rect: ['14px','14px','365px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '49px'],
            ["style", "width", '340px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '365px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Flight": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'After NASA aerodynamics videoconference, apply skill to design/test a shoebox glider; present results in second videoconference. ',
      align: 'left',
      rect: ['14px','76px','370px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Flight Aerodynamics/Shoebox Glider Challenge Badge',
      align: 'left',
      rect: ['14px','14px','370px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '76px'],
            ["style", "width", '370px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '370px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Waves": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text2',
      text: 'Order/model/share research electromagnetic spectrum &amp; apply to Fermi Gamma Ray Telescope; calculate wavelength/frequency.',
      align: 'left',
      rect: ['14px','75px','338px','85px','auto','auto']
   },
   {
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      type: 'text',
      id: 'Text2Copy',
      text: 'Making Waves – <br>Electromagnetic Spectrum Badge<br>',
      align: 'left',
      rect: ['14px','14px','359px','45px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '75px'],
            ["style", "width", '338px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '359px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_ETE": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['14px','75px','381px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Analyze global temperature data sets; describe trends/impacts; propose strategy to lessen impacts &amp; perform pros/cons analysis.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['14px','14px','420px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'Global Temperatures – Exploring the Environment Badge',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '75px'],
            ["style", "width", '381px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '420px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_3star": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['14px','50px','392px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'CyGaMEs Three Star Geologists finished Selene and correctly discovered and applied lunar and planetary geology concepts heat, mass, and radiation. <br><br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['14px','14px','488px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'Three Star CyGaMEs Selene Lunar Geologist',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '50px'],
            ["style", "width", '392px'],
            ["style", "height", '85px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "font-size", '16px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "width", '488px'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "font-style", 'normal']
         ],
         "${symbolSelector}": [
            ["style", "height", '164px'],
            ["style", "width", '362px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_7star": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['14px','51px','424px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'CyGaMEs Seven Star Geologists discovered and applied all seven lunar and planetary geology concepts replicating 4.5 billion years of lunar history. <br>',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['14px','14px','463px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'Seven Star CyGaMEs Selene Lunar Geologist',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '51px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "height", '85px'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "width", '424px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '463px']
         ],
         "${symbolSelector}": [
            ["style", "height", '162px'],
            ["style", "width", '361px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Desc_Mars": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['23px','46px','346px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'Learners apply engineering design to create or redesign a mobile robot model of the Curiosity rover and submit documentation.',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['23px','12px','312px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'Curiosity Rover Design',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '46px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "height", '85px'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '23px'],
            ["style", "width", '346px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '23px'],
            ["style", "font-size", '24px'],
            ["style", "top", '12px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '312px']
         ],
         "${symbolSelector}": [
            ["style", "height", '118px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '369px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"gear_AA": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'gear_AA',
      type: 'image',
      rect: ['0px','0px','187px','187px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/gear_AA.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_gear_AA}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '360deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '187px'],
            ["style", "width", '187px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid175", tween: [ "transform", "${_gear_AA}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 0, duration: 2000, easing: "easeOutQuad" }         ]
      }
   }
},
"Desc_AA": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['14px','47px','381px','85px','auto','auto'],
      font: ['carme, sans-serif',16,'rgba(177,177,177,1.00)','normal','none','normal'],
      id: 'Text2',
      text: 'An exciting badges launch-pad made in conjunction with NASA!',
      align: 'left',
      type: 'text'
   },
   {
      rect: ['14px','14px','420px','45px','auto','auto'],
      font: ['cabin, sans-serif',24,'rgba(5,146,193,1.00)','800','none','normal'],
      id: 'Text2Copy',
      text: 'Astronaut Academy for STEM Badges',
      align: 'left',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text2}": [
            ["style", "top", '47px'],
            ["style", "font-size", '16px'],
            ["color", "color", 'rgba(177,177,177,1.00)'],
            ["style", "height", '85px'],
            ["style", "font-family", 'carme, sans-serif'],
            ["style", "left", '14px'],
            ["style", "width", '381px']
         ],
         "${_Text2Copy}": [
            ["color", "color", 'rgba(5,146,193,1.00)'],
            ["style", "font-weight", '800'],
            ["style", "left", '14px'],
            ["style", "font-size", '24px'],
            ["style", "top", '14px'],
            ["style", "font-style", 'normal'],
            ["style", "height", '45px'],
            ["style", "font-family", 'cabin, sans-serif'],
            ["style", "text-decoration", 'none'],
            ["style", "width", '420px']
         ],
         "${symbolSelector}": [
            ["style", "height", '156px'],
            ["style", "width", '443px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-182707976");
