webpackJsonp([23],{gHYN:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("Dd8w"),r=e.n(s),a=e("uaSg"),i=e("yclV"),n=e("NYxO"),l={computed:r()({},Object(n.b)(["userInfo","quantity","title"])),data:function(){return{tel:"",isCookie:Object(i.a)("token").length>0,bonusPointsHistories:[],ordernum:{PURCHASED:0,SHIPPED:0,CONFIRMED:0,RECEIVED:0,COMMENTED:0,FINISHED:0,REFUNDING:0,NOT_COMMENT:0,RETURN:0,PAID:0},shearView:!1,shearData:{}}},activated:function(){var t=this.$store.getters.baseInfo;this.tel=t.storePhone,this.getOrderStatus()},methods:{gotouser:function(){this.$router.push({name:"userInfo"})},gotoallorder:function(t){this.$router.push({path:"/personalCenter/myOderList",query:{type:t},meta:{keepAlive:!1}})},gotoReturnOrder:function(){this.$router.push({name:"salesRetrunList"})},gotoshopcar:function(){this.$router.push({path:"/shoppingCart"})},gotostore:function(){},coupons:function(){this.$router.push({name:"myCoupons"})},mypolicy:function(){this.$router.push({name:"policyList"})},exchange:function(){},gotoGitfs:function(){this.$router.push({name:"giftList"})},gotobonushistroy:function(){this.$router.push({name:"PointsList"})},getOrderStatus:function(){var t=this;Object(a.a)(this,"/api/order/status",{},"get","",function(o){if(o.status)for(var e in o.status)t.ordernum[e]=o.status[e]})},introduct:function(){this.$router.push({name:"aboutUs"})}}},c={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("yd-layout",{staticClass:"personal"},[e("div",{staticClass:"mine_hearder",on:{click:function(o){t.gotouser()}}},[e("div",{staticClass:"user_icon"},[e("img",{attrs:{src:t.userInfo.avatar}})]),t._v(" "),e("div",{staticClass:"user_detal"},[e("p",{staticClass:"user_name"},[t._v(t._s(t.userInfo.nickname))]),t._v(" "),e("p",{staticClass:"user_des"},[e("yd-badge",{attrs:{type:"warning"}},[t._v("会员")])],1)]),t._v(" "),e("div",{staticClass:"manage_account"},[e("span",[t._v("用户管理")]),t._v(" "),e("div",{staticClass:"yd-cell-arrow",staticStyle:{float:"right"}})])]),t._v(" "),e("yd-cell-group",{staticStyle:{"margin-top":"0.2rem","margin-bottom":"0px"}},[e("yd-cell-item",{attrs:{arrow:""}},[e("yd-icon",{attrs:{slot:"icon",name:"icon2-copy",size:".42rem",color:"#d41d0f",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[e("span",[t._v("我的订单")])]),t._v(" "),e("span",{attrs:{slot:"right"},on:{click:function(o){t.gotoallorder(1)}},slot:"right"},[t._v("全部订单")])],1)],1),t._v(" "),e("yd-grids-group",{staticStyle:{"margin-top":"0.2rem"},attrs:{rows:5,id:"orderlist"}},[e("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(2)}}},[e("yd-icon",{attrs:{slot:"icon",name:"daifukuan",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),t.ordernum.PURCHASED>0?e("div",{attrs:{slot:"else"},slot:"else"},[e("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.PURCHASED))])],1):t._e(),t._v(" "),e("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待付款")])],1),t._v(" "),e("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(3)}}},[e("yd-icon",{attrs:{slot:"icon",name:"daishouhuo",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),t.ordernum.SHIPPED+t.ordernum.CONFIRMED+t.ordernum.PAID>0?e("div",{attrs:{slot:"else"},slot:"else"},[e("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.SHIPPED+t.ordernum.CONFIRMED+t.ordernum.PAID))])],1):t._e(),t._v(" "),e("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待收货")])],1),t._v(" "),e("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(4)}}},[e("yd-icon",{attrs:{slot:"icon",name:"daipingjia-copy",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),t.ordernum.NOT_COMMENT?e("div",{attrs:{slot:"else"},slot:"else"},[e("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem","background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.NOT_COMMENT))])],1):t._e(),t._v(" "),e("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("待评价")])],1),t._v(" "),e("yd-grids-item",{nativeOn:{click:function(o){t.gotoallorder(5)}}},[e("yd-icon",{attrs:{slot:"icon",name:"yiwancheng",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),e("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("已完成")])],1),t._v(" "),e("yd-grids-item",{nativeOn:{click:function(o){t.gotoReturnOrder()}}},[e("yd-icon",{attrs:{slot:"icon",name:"tuikuanshouhou",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),t.ordernum.RETURN?e("div",{attrs:{slot:"else"},slot:"else"},[e("yd-badge",{staticStyle:{position:"absolute",right:"0.1rem",top:"0.2rem"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.ordernum.RETURN))])],1):t._e(),t._v(" "),e("span",{staticStyle:{color:"#666666"},attrs:{slot:"text"},slot:"text"},[t._v("售后/服务")])],1)],1),t._v(" "),e("yd-cell-group",{staticStyle:{"margin-top":"0.2rem"}},[e("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.gotoshopcar(o)}}},[e("yd-icon",{attrs:{slot:"icon",name:"gouwuche",size:".35rem",color:"#00d3bf",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[t._v("我的购物车")]),t._v(" "),e("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.quantity)+"件商品")])],1),t._v(" "),e("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.coupons(o)}}},[e("yd-icon",{attrs:{slot:"icon",name:"youhuiquan",size:".35rem",color:"#5181ee",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[t._v(" 我的优惠券")]),t._v(" "),e("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"})],1),t._v(" "),e("yd-cell-item",{attrs:{type:"a"},nativeOn:{click:function(o){t.gotobonushistroy()}}},[e("yd-icon",{attrs:{slot:"icon",name:"jifen",size:".35rem",color:"#ff003e",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[t._v("积分商城")]),t._v(" "),e("span",{attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.userInfo.bonus?t.userInfo.bonus:"0")+"积分")])],1),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),e("yd-cell-item",{attrs:{arrow:"",type:"a"},nativeOn:{click:function(o){t.introduct(o)}}},[e("yd-icon",{attrs:{slot:"icon",name:"guanyu",size:".35rem",color:"#2e4057",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[t._v(t._s(t.title?t.title:"关于"))])],1),t._v(" "),e("yd-cell-item",{attrs:{arrow:"",type:"a",href:"tel:"+t.tel}},[e("yd-icon",{attrs:{slot:"icon",name:"kefu",size:".35rem",color:"#ff003e",custom:""},slot:"icon"}),t._v(" "),e("span",{attrs:{slot:"left"},slot:"left"},[t._v("客服帮助")]),t._v(" "),e("span",{staticStyle:{"font-size":".3rem"},attrs:{slot:"right"},slot:"right"},[t._v(t._s(t.tel))])],1)],1),t._v(" "),e("yd-tabbar",{attrs:{slot:"tabbar",activeColor:"#d41d0f"},slot:"tabbar"},[e("yd-tabbar-item",{attrs:{title:"首页",link:"/home"}},[e("yd-icon",{attrs:{slot:"icon",name:"shouye",size:"0.54rem",custom:""},slot:"icon"})],1),t._v(" "),e("yd-tabbar-item",{attrs:{title:"分类",link:"/category"}},[e("yd-icon",{attrs:{slot:"icon",size:"0.54rem",name:"fenlei",custom:""},slot:"icon"})],1),t._v(" "),e("yd-tabbar-item",{attrs:{title:"购物车",link:"/shoppingCart"}},[e("yd-icon",{attrs:{slot:"icon",name:"gouwuche",size:"0.54rem",custom:""},slot:"icon"}),t._v(" "),0!=t.quantity?e("yd-badge",{staticStyle:{"background-color":"#d41d0f"},attrs:{slot:"badge",type:"danger"},slot:"badge"},[t._v(t._s(t.quantity))]):t._e()],1),t._v(" "),e("yd-tabbar-item",{attrs:{title:"个人中心",type:"a",active:""}},[e("yd-icon",{attrs:{slot:"icon",name:"ucenter",size:"0.54rem"},slot:"icon"})],1)],1)],1)},staticRenderFns:[]};var u=e("VU/8")(l,c,!1,function(t){e("mfQ+"),e("hejQ")},"data-v-e6963b8e",null);o.default=u.exports},hejQ:function(t,o){},"mfQ+":function(t,o){}});