webpackJsonp([25],{"GAP+":function(t,e){},HM3m:function(t,e){},zxxN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("uaSg"),s=i("yclV"),a={data:function(){return{show4:!1,quantity:0,stores:[],areas:[],isCookie:!1}},activated:function(){this.loadList();var t=Object(s.a)("userInfo");this.isCookie=!!t.token,t.token&&this.getCartsQuantity()},mounted:function(){},methods:{getCartsQuantity:function(){var t=this;Object(o.a)(this,"/api/carts/cartsQuantity",{},"get","",function(e){e.quantity&&(t.quantity=e.quantity)})},gotoDetail:function(t){this.$router.push({path:"stores/storesDetail",query:{id:t.id}})},loadList:function(){var t=this;Object(o.a)(this,"/api/store/list",{},"get","加载中...",function(e){for(var i in t.stores=e.stores,e.areas)e.areas[i].select=!1;t.areas=e.areas,t.show4=!1,t.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad")})},search:function(t,e){var i=this;Object(o.a)(this,"/api/store/search",{area:t.id},"get","查询中...",function(t){for(var o in i.areas)o!=e&&(i.areas[o].select=!1);i.areas[e].select=!0,i.stores=t.stores,i.show4=!1})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",{staticClass:"m-style",staticStyle:{"background-color":"#fff"}},[i("yd-navbar",{attrs:{slot:"navbar",title:"门店",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"}),t._v(" "),i("yd-cell-group",{attrs:{slot:"navbar"},slot:"navbar"},[i("yd-cell-item",[i("span",{staticStyle:{border:"1px solid #D9D9D9",width:"55px","text-align":"center","border-radius":"4px"},attrs:{slot:"right"},slot:"right"},[i("div",{on:{click:function(e){t.show4=!0}}},[i("yd-icon",{attrs:{slot:"icon",name:"type",size:".24rem",color:"#c5c5c5"},slot:"icon"}),t._v(" "),i("span",{attrs:{slot:"left"},slot:"left"},[t._v("筛选")])],1)])])],1),t._v(" "),i("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.loadList}},[i("ul",{staticClass:"storeList"},t._l(t.stores,function(e){return i("li",{on:{click:function(i){t.gotoDetail(e)}}},[i("yd-flexbox",[i("div",{staticStyle:{overflow:"hidden",padding:"0.15rem",height:"1.8rem",width:"1.8rem"}},[i("img",{staticStyle:{height:"1.5rem",width:"1.5rem"},attrs:{src:e.logo}})]),t._v(" "),i("yd-flexbox-item",{staticStyle:{height:"1.8rem"}},[i("yd-flexbox",{staticStyle:{"padding-top":"0.15rem","padding-right":".15rem"},attrs:{direction:"vertical"}},[i("yd-flexbox-item",[i("div",{staticStyle:{"font-size":"0.3rem",overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},[t._v(t._s(e.storeName))])]),t._v(" "),i("yd-flexbox-item",[i("span",{staticStyle:{color:"#6e6f70","font-size":"0.25rem","line-height":"0.5rem"}},[t._v("评价 "),i("span",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(e.ratesCount?e.ratesCount:"0"))]),t._v(" |总订单 "),i("span",{staticStyle:{color:"#ff7d49"}},[t._v(t._s(e.orderCount?e.orderCount:"0"))])])]),t._v(" "),i("yd-flexbox-item",[i("div",{staticStyle:{color:"#6e6f70","font-size":"0.25rem","line-height":"0.5rem",overflow:"hidden","text-overflow":"ellipsis",display:"-webkit-box","-webkit-line-clamp":"1","-webkit-box-orient":"vertical"}},[t._v(t._s(e.storeAddress))])])],1)],1)],1)],1)}))]),t._v(" "),i("yd-popup",{staticStyle:{"z-index":"50"},attrs:{position:"right",width:"60%"},model:{value:t.show4,callback:function(e){t.show4=e},expression:"show4"}},[i("p",{staticStyle:{padding:"0.2rem","font-size":"0.3rem","border-bottom":"1px solid #edeeef",width:"100%"}},[t._v("地区")]),t._v(" "),i("div",{staticStyle:{"margin-top":"0.1rem",padding:"0 0.1rem"}},[i("yd-button",{attrs:{type:"hollow"},nativeOn:{click:function(e){t.loadList()}}},[t._v("全部地区")]),t._v(" "),t._l(t.areas,function(e,o){return i("yd-button",{key:o,staticStyle:{"margin-top":"0.1rem","margin-left":"0.05rem"},attrs:{type:0==e.select?"hollow":"danger"},nativeOn:{click:function(i){t.search(e,o)}}},[t._v(t._s(e.name))])})],2)]),t._v(" "),i("yd-tabbar",{attrs:{slot:"tabbar",activeColor:"#d41d0f"},slot:"tabbar"},[i("yd-tabbar-item",{attrs:{title:"首页",link:"/"}},[i("yd-icon",{attrs:{slot:"icon",name:"shouye",size:"0.54rem",custom:""},slot:"icon"})],1),t._v(" "),i("yd-tabbar-item",{attrs:{title:"分类",link:"/home/category",active:""}},[i("yd-icon",{attrs:{slot:"icon",size:"0.54rem",name:"fenlei1",custom:""},slot:"icon"})],1),t._v(" "),i("yd-tabbar-item",{attrs:{title:"购物车",link:"/shoppingCart"}},[i("yd-icon",{attrs:{slot:"icon",name:"gouwuche",size:"0.54rem",custom:""},slot:"icon"}),t._v(" "),0!=t.quantity?i("yd-badge",{staticStyle:{"background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.quantity))]):t._e()],1),t._v(" "),i("yd-tabbar-item",{attrs:{title:"个人中心",link:"/personalCenter"}},[i("yd-icon",{attrs:{slot:"icon",name:"ucenter",size:"0.54rem"},slot:"icon"})],1)],1)],1)},staticRenderFns:[]};var n=i("VU/8")(a,r,!1,function(t){i("HM3m"),i("GAP+")},"data-v-77ff55ca",null);e.default=n.exports}});