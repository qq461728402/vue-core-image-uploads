webpackJsonp([35],{"7A4Z":function(t,e){},hzQU:function(t,e){},jPHv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("uaSg"),i=n("yclV"),l={data:function(){return{brands:[],hotBrands:[],types:[],seen:!1,seen2:!1,displacement:[],yearType:[],typeType:[],level:0,brandType:"",disStr:"",yearStr:"",typeStr:"",typeId:""}},mounted:function(){this.getbrands()},methods:{gotoback:function(){this.$router.go(-1)},le:function(){this.level=0,this.seen2=!1,this.seen=!0},getbrands:function(){var t=this;Object(a.a)(this,"/api/car/brands",{},"get","加载中...",function(e){for(var n={},a=[],i=e.brands,l=0;l<i.length;l++){var s=i[l];if(n[s.initial])for(var o=0;o<a.length;o++){var r=a[o];if(r.initial==s.initial){r.data.push(s);break}}else a.push({initial:s.initial,data:[s]}),n[s.initial]=s}t.brands=a,t.hotBrands=e.hotBrands})},gettypes:function(t){var e=this;Object(a.a)(this,"/api/car/types",{brandId:t.id},"post","加载中...",function(t){var n=[];for(var a in t.types)n.push({brandType:a,codelst:t.types[a]});e.types=n,e.seen=!e.seen})},gotocarModel:function(t){var e=this;e.brandType=t.fullname,Object(a.a)(this,"/api/car/displacement",{typeId:t.id},"post","加载中...",function(n){e.typeId=t.id,e.displacement=n.displacement,e.seen=!1,e.seen2=!0,e.level=1})},gotocar:function(t){var e=this;Object(a.a)(this,"/api/car/yearType",{typeId:this.typeId,displacement:t},"post","加载中...",function(n){e.level=2,e.disStr=t,e.yearType=n.yearType})},getType:function(t){var e=this;Object(a.a)(this,"/api/car/salesName",{typeId:this.typeId,displacement:this.disStr,yearType:t},"post","加载中...",function(n){e.yearStr=t,e.level=3,e.typeType=n.yearType})},chooseCar:function(t){var e=this;Object(a.a)(this,"/api/car/update",{car:t.id},"post","加载中...",function(t){e.$dialog.toast({mes:"车辆更新成功!",timeout:1e3,icon:"success",callback:function(){t.result&&t.result.type&&(Object(i.e)("carInfo",t.result),e.gotoback())}})})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("yd-layout",[n("yd-navbar",{attrs:{slot:"navbar",title:"选择车辆信息",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[n("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[n("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),n("h3",{staticStyle:{color:"#666",padding:"6px 0 6px 16px","border-bottom":"1px solid #d9d9d9","font-size":"16px"}},[t._v("热门品牌")]),t._v(" "),n("yd-grids-group",{attrs:{rows:4,id:"hotbrand"}},t._l(t.hotBrands,function(e,a){return n("yd-grids-item",{key:a,nativeOn:{click:function(n){t.gettypes(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.logo,expression:"hotitem.logo"}],attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("span",{attrs:{slot:"text"},slot:"text"},[t._v(t._s(e.name))])])})),t._v(" "),t._l(t.brands,function(e,a){return n("ul",{key:a,staticClass:"brandlist"},[n("li",{staticStyle:{"background-color":"#f7f7f7",padding:"0.1rem 0",color:"#999","padding-left":"0.2rem"}},[n("p",[t._v(t._s(e.initial))])]),t._v(" "),t._l(e.data,function(e,a){return n("li",{key:a,staticStyle:{"background-color":"#ffffff",padding:"0.2rem 0"},on:{click:function(n){t.gettypes(e)}}},[n("div",{staticStyle:{float:"left","padding-left":"0.2rem"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.logo,expression:"brand.logo"}],staticStyle:{height:"0.8rem",width:"0.8rem"}})]),t._v(" "),n("div",{staticStyle:{height:"0.8rem"}},[n("p",{staticStyle:{"line-height":"0.8rem","padding-left":"1.4rem"}},[t._v(t._s(e.name))])])])})],2)}),t._v(" "),n("yd-popup",{attrs:{position:"right",width:"70%"},model:{value:t.seen,callback:function(e){t.seen=e},expression:"seen"}},t._l(t.types,function(e,a){return n("yd-cell-group",{key:a,attrs:{title:e.brandType,id:"typebrand"}},t._l(e.codelst,function(e,a){return n("yd-cell-item",{key:a,nativeOn:{click:function(n){t.gotocarModel(e)}}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.name))])])}))})),t._v(" "),t.seen2?n("div",{staticStyle:{position:"absolute",top:"0",right:"0",left:"0",bottom:"0","z-index":"3","background-color":"#fff"}},[n("div",{staticClass:"header"},[t.level>0?n("span",{on:{click:function(e){t.le()}}},[t._v(t._s(t.brandType)+">>")]):t._e(),t.level>1?n("span",{on:{click:function(e){t.level=1}}},[t._v(t._s(t.disStr)+">>")]):t._e(),t.level>2?n("span",{on:{click:function(e){t.level=2}}},[t._v(t._s(t.yearStr)+">>")]):t._e(),t._v(" "),n("span",[t._v(t._s(1==t.level?"请选择发动机排量":2==t.level?"请选择生产年份":3==t.level?"请选择车型":""))])]),t._v(" "),n("div",{staticClass:"alternative"},[n("span",[t._v(t._s(1==t.level?"发动机排量":2==t.level?"生产年份":3==t.level?"选择车型":""))])]),t._v(" "),1==t.level?n("yd-cell-group",t._l(t.displacement,function(e,a){return n("yd-cell-item",{key:a,nativeOn:{click:function(n){t.gotocar(e)}}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e))])])})):2==t.level?n("yd-cell-group",t._l(t.yearType,function(e,a){return n("yd-cell-item",{key:a,nativeOn:{click:function(n){t.getType(e)}}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e+"年生产"))])])})):3==t.level?n("yd-cell-group",t._l(t.typeType,function(e,a){return n("yd-cell-item",{key:a,nativeOn:{click:function(n){t.chooseCar(e)}}},[n("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(e.name))])])})):t._e()],1):t._e()],2)},staticRenderFns:[]};var o=n("VU/8")(l,s,!1,function(t){n("7A4Z"),n("hzQU")},"data-v-4bd24802",null);e.default=o.exports}});