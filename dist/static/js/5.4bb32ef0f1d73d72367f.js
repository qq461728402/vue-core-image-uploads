webpackJsonp([5],{"9a5Z":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("uaSg"),s={data:function(){return{page:1,pageSize:10,couponnum:{},couponslist:[],count:1,selettype:"OFFLINE_COUPON",tablist:[{type:"OFFLINE_COUPON",name:"代金券"}],bg:{background:"url("+e("LSyK")+")"}}},mounted:function(){this.page=1,this.couponlist(!1)},methods:{gotoback:function(){this.$router.go(-1)},switchlist:function(t,i){this.selettype=t,document.getElementById("scroll").scrollLeft=i.currentTarget.offsetLeft-10,this.page=1,this.couponlist(!1)},couponlist:function(t){var i={page:this.page,pageSize:this.pageSize};i.type=this.selettype;var e=this;Object(o.a)(this,"/api/coupon/list",i,"get",0==t&&1==this.page?"加载中...":"",function(t){e.count=2,1==e.page?t.coupons&&(e.couponslist=t.coupons,e.$refs.pullrefreshDemo.$emit("ydui.pullrefresh.finishLoad"),e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.reInit"),e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")):t.coupons?(e.couponslist=e.couponslist.concat(t.coupons),t.coupons&&t.coupons.length!=this.pageSize?e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone"):e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.finishLoad")):e.$refs.infinitescrollDemo.$emit("ydui.infinitescroll.loadedDone")})},pullList:function(){this.page=1,this.couponlist(!0)},loadList:function(){this.page=this.page+1,this.couponlist(!0)},getCoupos:function(t){var i=this;t.bonusPoints>0?this.$dialog.confirm({title:"温馨提示",mes:"您确定积分兑换优惠券",opts:function(){i.sureCoupos(t)}}):this.sureCoupos(t)},sureCoupos:function(t){var i=this;Object(o.a)(this,"/api/coupon/get",{couponId:t.id},"get","正在领取",function(e){i.$dialog.toast({mes:"领取成功!",timeout:2e3}),t.quantityAvailable=t.quantityAvailable-1})}}},n={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("yd-layout",{attrs:{id:"getcou"}},[o("yd-navbar",{attrs:{slot:"navbar",title:"优惠券",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[o("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(i){t.gotoback()}},slot:"left"},[o("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),t.tablist.length>1?o("ul",{staticClass:"yd-scrollnav-tab-item",staticStyle:{color:"rgb(255, 0, 0)",height:"0.9rem"},attrs:{slot:"navbar",id:"scroll"},slot:"navbar"},t._l(t.tablist,function(i){return o("li",{class:{"yd-scrollnav-current":t.selettype==i.type},staticStyle:{color:"rgb(51, 51, 51)"},on:{click:function(e){t.switchlist(i.type,e)}}},[o("i"),o("span",[t._v(t._s(i.name))])])})):t._e(),t._v(" "),o("yd-pullrefresh",{ref:"pullrefreshDemo",attrs:{callback:t.pullList}},[o("yd-infinitescroll",{ref:"infinitescrollDemo",attrs:{callback:t.loadList}},[t._l(t.couponslist,function(i){return o("div",{staticStyle:{margin:"0.2rem"},attrs:{slot:"list"},slot:"list"},[o("yd-flexbox",{staticStyle:{"background-size":"100% 100%","border-radius":"0.15rem"},style:t.bg},[o("div",{staticStyle:{overflow:"hidden",padding:"0.15rem",height:"1.8rem",width:"1.8rem"}},[i.imgUrl?o("img",{staticStyle:{height:"1.5rem",width:"1.5rem"},attrs:{src:i.imgUrl}}):o("img",{staticStyle:{height:"1.5rem",width:"1.5rem",border:"1px solid #f2f2f2"},attrs:{src:e("S/uF")}})]),t._v(" "),o("yd-flexbox-item",{staticStyle:{height:"1.8rem"}},[o("yd-flexbox",{staticStyle:{"padding-top":"0.15rem"},attrs:{direction:"vertical"}},[o("yd-flexbox-item",[o("p",{staticStyle:{"font-size":"0.3rem","font-weight":"bold",height:"1rem"}},[t._v(t._s(i.description))])]),t._v(" "),o("yd-flexbox-item",[o("span",{staticStyle:{"font-size":"0.4rem",color:"#f00","padding-right":"0.2rem"}},[t._v(t._s(i.discount))]),o("span",{staticStyle:{color:"#f00","background-color":"#ffebdb",padding:"0.05rem","font-size":"0.25rem"}},[t._v(t._s(i.orderRequirement>0?"满"+i.orderRequirement+"可用":"无金额门槛"))])])],1)],1),t._v(" "),o("div",{attrs:{align:"center"}},[o("div",{staticStyle:{width:"1.6rem",height:"1.5rem",padding:"0.15rem"}},[o("yd-progressbar",{attrs:{progress:(i.quantity-i.quantityAvailable)/(i.quantity+0),"trail-width":"10","stroke-width":"10","stroke-color":"#ffb7b8","trail-color":"#f13130","fill-color":"#ffffff"}},[t._v("已抢\n                "),o("yd-countup",{attrs:{endnum:(i.quantity-i.quantityAvailable)/(i.quantity+0)*100,duration:.5,suffix:"%"}})],1)],1),t._v(" "),o("div",{staticStyle:{width:"1.6rem","text-align":"center","padding-bottom":".15rem"}},[o("yd-button",{staticStyle:{"font-size":".25rem",width:"1rem"},attrs:{type:"danger",bgcolor:"#f13130",color:"#ffffff"},nativeOn:{click:function(e){e.stopPropagation(),t.getCoupos(i)}}},[t._v(t._s(i.bonusPoints&&i.bonusPoints>0?i.bonusPoints+"积分":"立即领取"))])],1)])],1)],1)}),t._v(" "),o("span",{staticStyle:{display:"none"},attrs:{slot:"doneTip"},slot:"doneTip"},[t._v("我是有底线的")])],2)],1),t._v(" "),o("yd-backtop"),t._v(" "),0==t.couponslist.length&&1!=t.count?o("div",{staticClass:"noProduct"},[o("img",{attrs:{src:e("evVK")}}),t._v(" "),o("p",[t._v("没有优惠券领取")])]):t._e()],1)},staticRenderFns:[]};var r=e("VU/8")(s,n,!1,function(t){e("y7QS"),e("9m2G")},"data-v-9e21b1ea",null);i.default=r.exports},"9m2G":function(t,i){},LSyK:function(t,i,e){t.exports=e.p+"static/img/bj.29822cc.jpg"},"S/uF":function(t,i,e){t.exports=e.p+"static/img/defuletCoupons1.2faee96.png"},evVK:function(t,i,e){t.exports=e.p+"static/img/myyhq.c20b577.png"},y7QS:function(t,i){}});