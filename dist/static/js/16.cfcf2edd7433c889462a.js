webpackJsonp([16],{"31G8":function(t,e){},"6YR3":function(t,e){},ecyP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("uaSg"),o=(i("yclV"),{data:function(){return{orders:[],userInfo:{}}},mounted:function(){this.insuranceOrders()},activated:function(){this.insuranceOrders()},methods:{gotoback:function(){this.$router.go(-1)},insuranceOrders:function(){var t=this;Object(r.a)(this,"/api/insurance/orders",{},"get","加载中...",function(e){t.orders=e.orders})},gotoDeatil:function(t){this.$router.push({name:"policyDetail",query:{insuranceId:t.insuranceId}})}}}),A={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("yd-layout",{attrs:{id:"policylist"}},[r("yd-navbar",{attrs:{slot:"navbar",title:"我的保单",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[r("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[r("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),r("yd-cell-group",{staticClass:"policy_2"},[r("yd-cell-item",[r("img",{attrs:{slot:"icon",src:i("igyM")},slot:"icon"}),t._v(" "),r("span",{attrs:{slot:"left"},slot:"left"},[t._v("全部保单")])])],1),t._v(" "),t._l(t.orders,function(e,i){return r("div",{key:i,staticStyle:{overflow:"hidden",padding:".15rem","background-color":"white"}},[r("div",{staticStyle:{overflow:"hidden",border:"1px solid #D9D9D9",padding:".15rem","border-radius":".1rem"}},[r("div",{staticStyle:{"border-bottom":"1px solid #D9D9D9","padding-bottom":".1rem"}},[r("span",{staticStyle:{"font-size":".3rem"}},[t._v("保单号："),r("i",{staticStyle:{color:"#666"}},[t._v(t._s(e.bussinessNumber?e.bussinessNumber:"正在出单中"))])]),r("span",{staticStyle:{float:"right","font-size":".3rem",color:"#d41d0f"}},[t._v("投保状态："+t._s("NEW"==e.status?"未支付":"PAID "==e.status?"已支付—正在出单":"FINISHED"==e.status?"完成配送信息":"保单完成"))])]),t._v(" "),r("div",{staticStyle:{width:"80%",float:"left","line-height":".5rem","font-size":".3rem",height:"1.4rem","margin-top":".1rem"}},[r("p",[t._v("产品名称："+t._s(e.insuranceName))]),t._v(" "),r("p",[t._v("投保人："+t._s(e.username))]),t._v(" "),r("p",[t._v("投保金额："+t._s(e.totleFee))])]),t._v(" "),r("div",{staticStyle:{width:"20%",float:"right","text-align":"center",height:"1.4rem","line-height":"1.5rem","border-left":"1px solid #D9D9D9","margin-top":".1rem"}},[r("yd-badge",{staticStyle:{"font-size":".3rem",border:"1px solid rgb(255, 125, 73)","background-color":"#FFFFFF",color:"rgb(255, 125, 73)"},attrs:{shape:"square"},nativeOn:{click:function(i){t.gotoDeatil(e)}}},[t._v("查看")])],1)])])})],2)},staticRenderFns:[]};var n=i("VU/8")(o,A,!1,function(t){i("6YR3"),i("31G8")},"data-v-62859402",null);e.default=n.exports},igyM:function(t,e){t.exports="data:image/png;base64,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"}});