webpackJsonp([7],{"9a5Z":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),s=i("uaSg"),r=i("NYxO"),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"popup"}},[i("yd-popup",{attrs:{position:"center",width:"80%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("yd-cell-group",[i("yd-cell-item",[i("span",{attrs:{slot:"left"},slot:"left"},[t._v("推荐码：")]),t._v(" "),i("yd-input",{attrs:{slot:"right",required:"",placeholder:"请输入推荐码(可不填)"},slot:"right",model:{value:t.txcode,callback:function(e){t.txcode=e},expression:"txcode"}})],1)],1),t._v(" "),i("yd-button",{attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){t.confirm(e)}}},[t._v("购买")])],1)],1)},staticRenderFns:[]};var c=i("VU/8")({data:function(){return{txcode:"",show:!1,item:""}},components:{},name:"couponPop",methods:{init:function(t){this.txcode="",this.item=t,this.show=!this.show},confirm:function(){this.$emit("confirmok",this.item,this.txcode)}}},l,!1,function(t){i("zgd0")},null,null).exports,a={computed:n()({},Object(r.b)(["customerinfo"])),components:{couponpop:c},data:function(){return{isbuy:!1,page:1,pageSize:10,couponnum:{},couponslist:[],count:1,selettype:"CASH_COUPON",tablist:[{type:"CASH_COUPON",name:"现金券"}],bg:{background:"url("+i("LSyK")+")"}}},mounted:function(){this.page=1,this.couponlist(!1)},methods:{gotoback:function(){this.$router.go(-1)},switchlist:function(t,e){this.selettype=t,document.getElementById("scroll").scrollLeft=e.currentTarget.offsetLeft-10,this.page=1,this.couponlist(!1)},couponlist:function(t){var e={page:this.page,pageSize:this.pageSize};e.type=this.selettype;var i=this;Object(s.a)(this,"/api/coupon/list",e,"get",0==t&&1==this.page?"加载中...":"",function(t){i.count=2,1==i.page?t.coupons&&(i.couponslist=t.coupons,i.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.reInit"),i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")):t.coupons?(i.couponslist=i.couponslist.concat(t.coupons),t.coupons&&t.coupons.length!=this.pageSize?i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"):i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")):i.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},pullList:function(){this.page=1,this.couponlist(!0)},loadList:function(){this.page=this.page+1,this.couponlist(!0)},getCoupos:function(t){var e=this;this.$dialog.confirm({title:"温馨提示",mes:"您确定购买优惠券",opts:function(){e.isbuy=!0,e.$nextTick(function(){e.$refs.coupon.init(t)})}})},couponbuy:function(t,e){var i=this;Object(s.a)(this,"/api/order/prePayCoupon",{confirmCode:e,coupon_id:t.id,customer_id:this.customerinfo.customerId},"get","正在购买",function(e){i.$dialog.toast({mes:"购买成功!",timeout:2e3}),t.quantityAvailable=t.quantityAvailable-1})}}},u={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("yd-layout",{attrs:{id:"getcou"}},[o("yd-navbar",{attrs:{slot:"navbar",title:"优惠券",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[o("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[o("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),t.tablist.length>1?o("ul",{staticClass:"yd-scrollnav-tab-item",staticStyle:{color:"rgb(255, 0, 0)",height:"0.9rem"},attrs:{slot:"navbar",id:"scroll"},slot:"navbar"},t._l(t.tablist,function(e){return o("li",{class:{"yd-scrollnav-current":t.selettype==e.type},staticStyle:{color:"rgb(51, 51, 51)"},on:{click:function(i){t.switchlist(e.type,i)}}},[o("i"),o("span",[t._v(t._s(e.name))])])})):t._e(),t._v(" "),o("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.pullList}},[o("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadList}},[t._l(t.couponslist,function(e){return o("div",{staticStyle:{margin:"0.2rem"},attrs:{slot:"list"},slot:"list"},[o("yd-flexbox",{staticStyle:{"background-size":"100% 100%","border-radius":"0.15rem"},style:t.bg},[o("div",{staticStyle:{overflow:"hidden",padding:"0.15rem",height:"1.8rem",width:"1.8rem"}},[e.imgUrl?o("img",{staticStyle:{height:"1.5rem",width:"1.5rem"},attrs:{src:e.imgUrl}}):o("img",{staticStyle:{height:"1.5rem",width:"1.5rem",border:"1px solid #f2f2f2"},attrs:{src:i("S/uF")}})]),t._v(" "),o("yd-flexbox-item",{staticStyle:{height:"1.8rem"}},[o("yd-flexbox",{staticStyle:{"padding-top":"0.15rem"},attrs:{direction:"vertical"}},[o("yd-flexbox-item",[o("p",{staticStyle:{"font-size":"0.3rem","font-weight":"bold",height:"1rem"}},[t._v(t._s(e.description))])]),t._v(" "),o("yd-flexbox-item",[o("span",{staticStyle:{"font-size":"0.4rem",color:"#f00","padding-right":"0.2rem"}},[t._v(t._s(e.discount))]),o("span",{staticStyle:{color:"#f00","background-color":"#ffebdb",padding:"0.05rem","font-size":"0.25rem"}},[t._v(t._s(e.orderRequirement>0?"满"+e.orderRequirement+"可用":"无金额门槛"))])])],1)],1),t._v(" "),o("div",{attrs:{align:"center"}},[o("div",{staticStyle:{width:"1.6rem",height:"1.5rem",padding:"0.15rem"}},[o("yd-progressbar",{attrs:{progress:(e.quantity-e.quantityAvailable)/(e.quantity+0),"trail-width":"10","stroke-width":"10","stroke-color":"#ffb7b8","trail-color":"#f13130","fill-color":"#ffffff"}},[t._v("已抢\n                "),o("yd-countup",{attrs:{endnum:(e.quantity-e.quantityAvailable)/(e.quantity+0)*100,duration:.5,suffix:"%"}})],1)],1),t._v(" "),o("div",{staticStyle:{width:"1.6rem","text-align":"center","padding-bottom":".15rem"}},[o("yd-button",{staticStyle:{"font-size":".25rem",width:"1rem"},attrs:{type:"danger",bgcolor:"#f13130",color:"#ffffff"},nativeOn:{click:function(i){i.stopPropagation(),t.getCoupos(e)}}},[t._v(t._s(e.bonusPoints&&e.bonusPoints>0?e.bonusPoints+"积分":"立即购买"))])],1)])],1)],1)}),t._v(" "),o("span",{staticStyle:{display:"none"},attrs:{slot:"doneTip"},slot:"doneTip"},[t._v("我是有底线的")])],2)],1),t._v(" "),o("yd-backtop"),t._v(" "),0==t.couponslist.length&&1!=t.count?o("div",{staticClass:"noProduct"},[o("img",{attrs:{src:i("evVK")}}),t._v(" "),o("p",[t._v("没有优惠券领取")])]):t._e(),t._v(" "),t.isbuy?o("couponpop",{ref:"coupon",on:{confirmok:t.couponbuy}}):t._e()],1)},staticRenderFns:[]};var d=i("VU/8")(a,u,!1,function(t){i("z/kt"),i("ww9Y")},"data-v-424585ca",null);e.default=d.exports},LSyK:function(t,e,i){t.exports=i.p+"static/img/bj.29822cc.jpg"},"S/uF":function(t,e,i){t.exports=i.p+"static/img/defuletCoupons1.2faee96.png"},evVK:function(t,e,i){t.exports=i.p+"static/img/myyhq.c20b577.png"},ww9Y:function(t,e){},"z/kt":function(t,e){},zgd0:function(t,e){}});