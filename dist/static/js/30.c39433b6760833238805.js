webpackJsonp([30],{Ck91:function(t,e){},NDW5:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("Dd8w"),s=o.n(a),n=o("uaSg"),r=(o("yclV"),o("ngqk")),l=o("NYxO"),i={computed:s()({},Object(l.b)(["userInfo"])),components:{"vue-core-image-upload":r.a},data:function(){return{radio5:"",uploadURL:n.d,tag:{tag:"repUserInfo"}}},mounted:function(){},methods:{gotoback:function(){this.$router.go(-1)},imageuploaded:function(t){200==t.code&&t.result&&t.result.length>0&&(this.userInfo.avatar=t.result[0].url,this.userInfo.mediaId=t.result[0].id)},getuserInfo:function(){var t=this;Object(n.a)(this,"/api/personal/info",{},"get","",function(e){e&&t.$store.dispatch("setUserInfo",e.info)})},repInfo:function(){var t=this;Object(n.a)(this,"/api/personal/info/update",this.userInfo,"post","修改中...",function(e){t.$dialog.toast({mes:"修改成功!",timeout:1e3,icon:"success",callback:function(){t.getuserInfo()}})})}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("yd-layout",{attrs:{id:"reperInfo"}},[o("yd-navbar",{attrs:{slot:"navbar",title:"修改用户信息",bgcolor:"#d41d0f",color:"#FFF"},slot:"navbar"},[o("router-link",{attrs:{slot:"left",to:""},nativeOn:{click:function(e){t.gotoback()}},slot:"left"},[o("yd-navbar-back-icon",{attrs:{color:"#FFF"}})],1)],1),t._v(" "),o("yd-cell-group",{staticStyle:{"margin-top":"0.1rem"}},[o("yd-cell-item",[o("span",{attrs:{slot:"left"},slot:"left"},[t._v("头像：")]),t._v(" "),o("div",{attrs:{slot:"right"},slot:"right"},[o("vue-core-image-upload",{attrs:{inputOfFile:"file",credentials:!1,crop:!1,data:t.tag,"max-file-size":5242880,compress:70,inputAccept:"image/*",url:t.uploadURL},on:{imageuploaded:t.imageuploaded}},[o("img",{staticClass:"messimg",staticStyle:{height:"0.8rem",width:"0.8rem"},attrs:{src:t.userInfo.avatar}})])],1)]),t._v(" "),o("yd-cell-item",[o("span",{attrs:{slot:"left"},slot:"left"},[t._v("真实姓名：")]),t._v(" "),o("yd-input",{attrs:{slot:"right",placeholder:"请输入真实姓名"},slot:"right",model:{value:t.userInfo.name,callback:function(e){t.$set(t.userInfo,"name",e)},expression:"userInfo.name"}})],1),t._v(" "),o("yd-cell-item",[o("span",{attrs:{slot:"left"},slot:"left"},[t._v("昵称：")]),t._v(" "),o("yd-input",{attrs:{slot:"right",placeholder:"请输入昵称"},slot:"right",model:{value:t.userInfo.nickname,callback:function(e){t.$set(t.userInfo,"nickname",e)},expression:"userInfo.nickname"}})],1),t._v(" "),o("yd-cell-item",[o("span",{attrs:{slot:"left"},slot:"left"},[t._v("手机号：")]),t._v(" "),o("yd-input",{attrs:{slot:"right",placeholder:"请输入手机号码","show-clear-icon":!1},slot:"right",model:{value:t.userInfo.phone,callback:function(e){t.$set(t.userInfo,"phone",e)},expression:"userInfo.phone"}})],1),t._v(" "),o("yd-cell-item",[o("span",{attrs:{slot:"left"},slot:"left"},[t._v("性别：")]),t._v(" "),o("div",{attrs:{slot:"right"},slot:"right"},[o("yd-radio-group",{attrs:{color:"#F00"},model:{value:t.userInfo.sex,callback:function(e){t.$set(t.userInfo,"sex",e)},expression:"userInfo.sex"}},[o("yd-radio",{attrs:{val:"1"}},[o("span",[t._v("男")])]),t._v(" "),o("yd-radio",{attrs:{val:"0"}},[o("span",[t._v("女")])]),t._v(" "),o("yd-radio",{attrs:{val:"2"}},[o("span",[t._v("保密")])])],1)],1)])],1),t._v(" "),o("yd-button",{staticStyle:{"background-color":"#d41d0f",margin:"auto",width:"80%","margin-top":"20px","font-size":".3rem"},attrs:{size:"large",type:"primary"},nativeOn:{click:function(e){t.repInfo(e)}}},[t._v("修改")])],1)},staticRenderFns:[]};var u=o("VU/8")(i,c,!1,function(t){o("Ck91"),o("Oz93")},"data-v-663c1a21",null);e.default=u.exports},Oz93:function(t,e){}});