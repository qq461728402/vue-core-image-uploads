webpackJsonp([40],{XZB0:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("bOdI"),i=a.n(e),o=(a("FDxC"),a("w+oK")),l=a.n(o),n=a("uaSg"),r={components:i()({},l.a.name,l.a),data:function(){return{items:[]}},mounted:function(){this.loadList()},methods:{loadList:function(){var t=this;Object(n.a)(this,"/api/promotion/list",{promotionType:"GROUPON"},"get","加载中...",function(s){t.items=s.promotions,t.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad")})},gotoDetail:function(t){this.$router.push({path:"/home/GroupBuyDetail",query:{promotionId:t.promotionId}})}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("yd-layout",{staticStyle:{"background-color":"#FFFFFF"}},[a("yd-navbar",{attrs:{slot:"navbar",title:"团购频道",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[a("router-link",[a("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),a("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.loadList}},[a("ul",{staticClass:"bulk_goods"},t._l(t.items,function(s,e){return a("li",{key:e,staticClass:"goods-item",on:{click:function(a){t.gotoDetail(s)}}},[a("div",{staticClass:"thumb center-img badge"},[a("img",{attrs:{src:s.skuModel.image}}),t._v(" "),a("span",{staticClass:"num"},[t._v("2人团")]),t._v(" "),a("i",{staticClass:"sell-out sell-out-60"})]),t._v(" "),a("div",{staticClass:"detail"},[a("div",{staticClass:"goods-info"},[a("div",{staticClass:"title"},[t._v(t._s(s.skuModel.skuName))]),t._v(" "),a("div",{staticClass:"meta"},[a("div",{staticClass:"price pull-left"},[a("span",[a("em",[t._v("¥")]),t._v(t._s(s.skuModel.price))]),t._v(" "),a("span",{staticClass:"del_price"},[a("em",[t._v("¥")]),t._v(t._s(s.skuModel.salePrice))])])])]),t._v(" "),a("div",{staticClass:"from-shop"},[a("p",{staticClass:"pull-left",staticStyle:{"font-size":"11px"}},[t._v("已团"),a("span",{staticStyle:{color:"#ff525e"}},[t._v(t._s(s.dan?s.dan:"0"))]),t._v("件")]),t._v(" "),a("van-button",{staticClass:"pull-right",attrs:{type:"danger",size:"mini"}},[t._v("去开团")])],1)])])}))])],1)},staticRenderFns:[]};var u=a("VU/8")(r,c,!1,function(t){a("w0OW")},"data-v-795bc319",null);s.default=u.exports},w0OW:function(t,s){}});