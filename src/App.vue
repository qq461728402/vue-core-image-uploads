<template>
  <div id="app">
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title" :img-set="imgUrl"  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-wechat-title="$route.meta.title" :img-set="imgUrl" v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
  import {shearUrl} from '@/config/weichatPay'
  import axios from 'axios'
  export default{
    name: 'app',
    data () {
      return {
        imgUrl:require('../static/logo.png'),
      }
    },
    mounted(){
      this.$store.dispatch('getAvatar');
      this.$store.dispatch('getToken');
      this.$store.dispatch('getUid');
      this.$store.dispatch('getUname');

      this.getuserInfo();
      this.indexOf();
    },
    methods: {
      /*获取购物车数量*/
      getCartsQuantity(){
        return;
        this.apiRequest('/api/carts/cartsQuantity',{},'get','',data=>{
          if (data.quantity >= 0) {
            this.$store.dispatch('setQuantity', data.quantity);
          }
        })
      },
      /*获取用户商城信息*/
      indexOf(){
        this.apiRequest('/api/mall/setting',{},'get','',data=>{
          if(data&&data.code==200){
            this.$store.dispatch('getStoreInfo',data);
          }
        })
      },
//      baseInfo(){
//       this.apiRequest('/api/store/storeInfo',{},'get','',data=>{
//          if(data&&data.code==200){
//            this.$store.dispatch('getStoreInfo',data);
//          }
//        })
//      },
      /*获取用户信息*/
      getuserInfo(){
        this.apiRequest('/api/personal/info', {}, 'get', '', data => {
          if (data) {
            this.$store.dispatch('getCustomerInfo', data.info);
          }
        })
      },
    },
    watch: {
      "$route"(to, from) {
        if(to.name=='/home'||to.name=='/category'||to.name=='/shoppingCart'||to.name=='/personalCenter'){
          this.getCartsQuantity();
        }
        const currentRouter = this.$router.currentRoute.fullPath;
        var link = axios.defaults.baseURL+'/'+this.$store.getters.store+"/proxy?url="+currentRouter;
        var title=this.$store.getters.shearTitle;
        if (this.$router.currentRoute.meta.title){
          title=this.$router.currentRoute.meta.title;
        }
        let wx = require('weixin-js-sdk');
        wx.onMenuShareTimeline({
          title: title,
          link: link,
        })
        wx.onMenuShareAppMessage({
          desc: link,
          title: title,
          link: link,
        })
      }
    },
  }
</script>
<style>
  #app {
    height: 100%;
  }
  #app .yd-navbar{
    display: none;
  }
  .hairline .yd-scrollview{
    margin-top: 0px;
  }
  .ios .yd-scrollview{
    margin-top: 0px;
  }
  .van-image-preview .van-swipe{
    background-color: white;
  }
  .yd-dialog-black-mask, .yd-dialog-white-mask{
    z-index:2010
  }
  .van-sku-messages{
    display: none;
  }
</style>
