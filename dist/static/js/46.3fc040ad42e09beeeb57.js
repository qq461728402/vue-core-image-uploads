webpackJsonp([46],{h5ZV:function(t,s){},"j4/s":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("bOdI"),i=e.n(o),a=(e("FDxC"),e("w+oK")),l=e.n(a),n=e("Dd8w"),r=e.n(n),c=e("uaSg"),d=e("NYxO"),u={computed:r()({},Object(d.b)(["userInfo"])),components:i()({},l.a.name,l.a),data:function(){return{items:[]}},mounted:function(){this.loadList()},methods:{loadList:function(){var t=this;Object(c.a)(this,"/api/promotion/list",{promotionType:"EXCHANGE"},"get","加载中...",function(s){t.items=s.promotions,t.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad")})},gotoDetail:function(t){this.$router.push({path:"/home/PointsDetail",query:{promotionId:t.promotionId}})}},activated:function(){this.loadList()}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("yd-layout",{staticStyle:{"background-color":"#FFFFFF"}},[e("yd-navbar",{attrs:{slot:"navbar",title:"积分中心",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[e("router-link",{attrs:{slot:"left",to:"/home/MyPoints"},slot:"left"},[e("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),e("div",{staticStyle:{background:"linear-gradient(90deg,#eb3c3c,#ff7459)","box-shadow":"0 2px 5px rgba(255,98,98,.4)",width:"100%",height:"130px"}},[e("div",{staticStyle:{"font-size":"14px","padding-top":"20px","text-align":"center",color:"rgba(76,0,0,.7)"}},[t._v("可用积分")]),t._v(" "),e("div",{staticStyle:{"font-size":"48px",color:"#ffffff","text-align":"center"}},[t._v(t._s(t.userInfo.bonus?t.userInfo.bonus:"0"))]),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"hsla(0,0%,100%,.7)","text-align":"center"}},[t._v("小积分 换好礼 会员专享 每月更新")])]),t._v(" "),e("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.loadList}},[e("ul",{staticClass:"bulk_goods"},t._l(t.items,function(s,o){return e("li",{key:o,staticClass:"goods-item",on:{click:function(e){t.gotoDetail(s)}}},[e("div",{staticClass:"thumb center-img"},[e("img",{attrs:{src:s.skuModel.image}})]),t._v(" "),e("div",{staticClass:"detail"},[e("div",{staticClass:"goods-info"},[e("div",{staticClass:"title"},[t._v(t._s(s.skuModel.skuName))]),t._v(" "),e("div",{staticClass:"meta"},[e("div",{staticClass:"price pull-left"},[e("span",[t._v(t._s(s.skuModel.bonusPoints)+"积分")]),t._v(" "),e("span",{staticClass:"del_price"},[e("em",[t._v("¥")]),t._v(t._s(s.skuModel.salePrice))])])])]),t._v(" "),e("div",{staticClass:"from-shop"},[e("van-button",{staticClass:"pull-right",staticStyle:{border:"1px solid red",color:"red"},attrs:{size:"normal"}},[t._v("立即兑换")])],1)])])}))])],1)},staticRenderFns:[]};var v=e("VU/8")(u,f,!1,function(t){e("h5ZV")},"data-v-2ae3befa",null);s.default=v.exports}});