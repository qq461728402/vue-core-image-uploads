<template>
  <yd-layout>
    <yd-navbar slot="navbar" title="商品详情" bgcolor="#d41d0f" color="#FFF">
      <router-link to="" slot="left" @click.native="gotoback()">
        <yd-navbar-back-icon color="#FFF"></yd-navbar-back-icon>
      </router-link>
    </yd-navbar>
    <van-swipe :autoplay="3000" style="transform: none;" :style="{height:screenWidth+'px'}">
      <van-swipe-item v-for="(image, index) in skuModel.image" :key="index" class="thumb">
        <img v-lazy="image" style="min-height: 100px" @click="showPreview(index)"/>
      </van-swipe-item>
    </van-swipe>
    <van-cell-group>
      <div style="border-top: 1px solid #eeeeee;height: 120px;border-bottom: 10px solid #eeeeee">
        <p style="font-size: 14px;text-align: center;padding-top: 20px">{{skuModel.skuName}}</p>
        <p style="font-size: 12px;text-align: center;padding-top: 10px;color: #999999;">{{skuModel.skuDescription}}</p>
        <p style="text-align: center;padding-top: 10px">
          <em style="color: red;font-size: 16px;font-weight: bold">{{skuModel.promotionPoint}}积分</em>
          <em style="text-decoration: line-through;font-size: 14px;color: #999999;" v-if="false">￥{{skuModel.promotionPrice}}</em>
        </p>
      </div>
    </van-cell-group>
    <van-cell-group style="margin-top: 0.2rem">
      <van-cell is-link :to="{'path':'/home/greatCustomer'}">
        <span class="store">大客户经理</span>
      </van-cell>
      <van-cell title="门店选择" is-link @click="showMerchant">{{currentMerchant}}</van-cell>
      <van-cell title="剩余：">
        {{merchat_stock}}件
      </van-cell>
    </van-cell-group>
    <van-cell-group style="margin-top: 0.2rem;margin-bottom: 1.2rem">
      <van-cell>
        商品详情
      </van-cell>
      <van-cell>
        <van-col span="12" style="border-right: 1px solid #f5f5f5;border-bottom: 1px solid #f5f5f5;">等级{{param.greade}}</van-col>
        <van-col span="12" style="border-bottom: 1px solid #f5f5f5;padding-left: 0.2rem">规格{{param.model}}</van-col>
        <van-col span="12" style="border-right: 1px solid #f5f5f5;padding-right: 0.2rem">单位{{param.unit}}</van-col>
        <van-col span="12" style="padding-left: 0.2rem">产地{{param.place}}</van-col>
      </van-cell>
      <van-cell style="padding: 0px;margin: 0;line-height: normal">
        <div class="detal">
          <img v-lazy="img" v-for="(img,index) in descriptions" :key="index" @click="showPreviewDetail(index)">
        </div>
      </van-cell>
    </van-cell-group>
    <van-goods-action slot="tabbar">
      <van-goods-action-mini-btn icon="chat" text="客服" @click="onClickMiniBtn"/>
      <van-goods-action-big-btn text="立即兑换" primary @click="onClickExchange"/>
    </van-goods-action>
    <van-sku slot="tabbar"
             v-model="showBase"
             :sku="sku"
             :goods="goods"
             :goods-id="goodsId"
             :hide-stock="sku.hide_stock"
             :quota="quota"
             :reset-stepper-on-hide="sku.resetStepperOnHide"
             :reset-selected-sku-on-hide="sku.resetSelectedSkuOnHide"
             @buy-clicked="gotoOder">
      <template slot="sku-header" slot-scope="props">
        <div class="van-sku-header van-hairline--bottom">
          <div class="van-sku-header__img-wrap"><img :src="skuModel.image" class="van-sku__goods-img"></div>
          <div class="van-sku-header__goods-info">
            <div class="van-sku__goods-name van-ellipsis">{{skuModel.skuName}}</div>
            <div class="van-sku__goods-price"><span class="van-sku__price-num">{{skuModel.promotionPoint}}积分</span></div>
            <van-icon class="van-sku__close-icon" name="close" @click="props.skuEventBus.$emit('sku:close')"/>
          </div>
        </div>
      </template>
      <template slot="sku-actions" slot-scope="props">
        <div class="van-sku-actions">
          <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">立即兑换</van-button>
        </div>
      </template>
    </van-sku>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar title="选择门店" :columns="stroelist" @cancel="onCancel" @confirm="onConfirm"/>
    </van-popup>
  </yd-layout>
</template>
<script type="text/babel">
  import {Swipe, SwipeItem, Cell, CellGroup, Col, GoodsAction, GoodsActionBigBtn, GoodsActionMiniBtn, Sku, Button, ImagePreview,Icon,Popup,Picker} from 'vant';
  import {setStore, getStore} from '@/config/mUtils'

  import {mapGetters} from 'vuex'
  const vm = {
    computed: {
      ...mapGetters([
        'quantity',
        'customerinfo',
        'storeinfo'
      ])
    },
    components: {
      [Picker.name]:Picker,
      [Popup.name]:Popup,
      [Icon.name] :Icon,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Col.name]: Col,
      [GoodsAction.name]: GoodsAction,
      [GoodsActionBigBtn.name]: GoodsActionBigBtn,
      [GoodsActionMiniBtn.name]: GoodsActionMiniBtn,
      [Sku.name]: Sku,
      [Button.name]: Button,
      [ImagePreview.name]: ImagePreview,
    },
    data() {
      return {
        loading:false,
        stroelist: [],
        stroeIds:[],
        currentMerchant:'',
        merchat_stock:0,
        screenWidth: document.body.clientWidth,
        showBase: false,
        show:false,
        promotionSkuId: '',
        securitylst: ['正品保障', '正规发票', '自营门店'],
        param: {},//商品规格
        descriptions: [],//商品图文
        sku: {
          tree: [],
          list: [],
          none_sku: true, // 是否无规格商品
          stock_num:1,
          collection_id:0,
          price:'',
          messages: [{
            datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: '留言', // 留言名称
            type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: '0' // 是否必填 '1' 表示必填
          }],
          hide_stock: false, // 是否隐藏剩余库存
          resetStepperOnHide: true,//窗口隐藏时重置选择的商品数量
          resetSelectedSkuOnHide: true,//窗口隐藏时重置已选择的sku
        },
        goods: {
          title: '',
          picture: ''
        },
        merchantId:'',
        quota:0,//限购
        skuModel: {},
        goodsId: '',
        endTime: '',//活动结束时间
      }
    },
    mounted(){
      this.promotionSkuId = this.$route.query.promotionSkuId;
      this.getDetail();
      const  that =this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    methods: {
      gotoback(){
        this.$router.go(-1);
      },
      showMerchant(){
        if (this.stroelist.length==0){
          this.$dialog.toast({mes: '没有门店可选择', timeout: 1500}); return;
        }
        this.show=!this.show;
      },
      onClickExchange(){
        if (this.stroelist.length==0){
          this.$dialog.toast({mes: '没有门店可兑换', timeout: 1500}); return;
        }
        this.showBase=!this.showBase;
      },
      onCancel(){
        this.show=!this.show;
      },
      onConfirm(value, index) {
        this.currentMerchant=value;
        this.getSkuInventory(this.stroeIds[index]);
        this.show=!this.show;
      },
      gotoback(){
        this.$router.go(-1);
      },
      //获取门店商品数量
      getSkuInventory(merchantId){
        this.merchantId=merchantId;
       this.apiRequest('/api/promotion/getSkuInventory',{'merchant_Id':merchantId,'skuId':this.skuModel.skuId},'get','加载中...',data=>{
         this.merchat_stock=data.SkuQuantity;
          this.sku.stock_num=data.SkuQuantity;
        });
      },
      getDetail(){
       this.apiRequest( '/api/promotion/promotionSku', {'promotionSkuId': this.promotionSkuId}, 'get', '加载中...', data=> {
          var promotion=data.promotion;
          if(promotion.hasLimit==true){
            this.quota=promotion.limitQuantity;
          }
          this.endTime=promotion.promotionVO.endTime;
          if(data.productOptions){
            this.sku.tree=data.productOptions;
          }
          if(data.skus){
            this.sku.none_sku=false;
            this.sku.list=data.skus;
          }
          if(promotion){
            this.skuModel=promotion;
            this.sku.collection_id=promotion.skuId;
            this.goods.picture=promotion.image;
            this.goods.title=promotion.skuName;
            this.goodsId=promotion.skuId;
            this.sku.price=promotion.promotionPoint/100.0;
          }
          if (promotion.merchant&&promotion.merchant.length>0){
              this.stroelist=promotion.merchant.map(item=>{
                return item.storeName;
              });
            this.stroeIds=promotion.merchant.map(item=>{
              return item.merchantId;
            });
           this.currentMerchant=this.stroelist[0];
           this.getSkuInventory(this.stroeIds[0]);
          }
          this.productDesc();
        })
      },
      /*商品图文描述*/
      productDesc(){
        const that = this;
       this.apiRequest( '/api/mall/productDesc', {'skuId': this.skuModel.skuId}, 'get', '', function (data) {
          if (data.images) {
            if (data.images.descriptions) that.descriptions = data.images.descriptions;
            if (data.images.param) that.param = data.images.param;
          }
        })
      },
      formatPrice(time){
        var date = new Date(time);
        var Y = date.getFullYear() + '/';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        this.endTime = Y + M + D + h + m + s;
      },
      //图片预览
      showPreview(index){
        ImagePreview(this.skuModel.images, index);
      },
      showPreviewDetail(index){
        ImagePreview(this.descriptions, index);
      },
      gotoCar(){
        this.$router.push({name: 'shoppingCart', meta: {title: '购物车'}});
      },
      gotoOder(skuData){
        if (skuData.selectedSkuComb.price*skuData.selectedNum>this.customerinfo.bonusPoints){
          this.$dialog.toast({
            mes: `您当前积分不足${skuData.selectedSkuComb.price*skuData.selectedNum}不能兑换`,
            timeout: 1000,
          });
          return;
        }
        this.showBase=!this.showBase;
        this.$dialog.confirm({
          title: '温馨提示',
          mes: `确定兑换用${skuData.selectedSkuComb.price*skuData.selectedNum}积分兑换此商品`,
          opts: () => {
            var skuId='';
            var bonusPoints='';
            if (skuData.selectedSkuComb) {
              skuId = skuData.selectedSkuComb.id;
              bonusPoints = skuData.selectedSkuComb.price;
            } else {
              skuId = skuData.goodsId;
              bonusPoints=this.skuModel.bonusPoints
            }
            var orderInfo= {skuCode: "",skuId: 0, skuName: "", skuPrice: 0,skuQuantity: 0, subTotal: 0, totalPrice: 0};
            orderInfo.skuId=skuId;
            orderInfo.merchantId=this.merchantId;
            orderInfo.skuName=this.skuModel.skuName;
            orderInfo.skuQuantity = skuData.selectedNum;
            orderInfo.subTotal=bonusPoints;
            orderInfo.skuPrice=bonusPoints;
           this.apiRequest('/api/order/buyIntegralGoods',orderInfo,'post','兑换中...',data=> {
              if (data&&data.code==200){
                this.$dialog.toast({
                  mes: '兑换成功,请到我的订单查看',
                  timeout: 2000,
                  icon: 'success',
                  callback: ()=>{
                    this.getuserInfo();
                    this.getDetail();
                  }
                });
              }
            })
            console.log(skuData);
          }
        });
      },
      /*获取用户信息*/
      getuserInfo(){
       this.apiRequest( '/api/personal/info', {}, 'get', '', data => {
          if (data) {
            this.$store.dispatch('getCustomerInfo', data.info);
            this.gotoback();
          }
        })
      },
      //客服电话
      onClickMiniBtn(){
        window.location.href = 'tel://'+this.storeinfo.systemPhone;
      },
    },
  }
  export default vm;
</script>
<style scoped>
  .thumb img {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    border: 0;
    vertical-align: middle;
  }
  .thumb {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
  }

  .goods-title {
    font-size: 0.3rem;
    line-height: 1.5;
    font-weight: 500;
    margin: 0.1rem 0;
  }

  #active .van-cell {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  #times span {
    color: #ff002c;
    background-color: #ffffff;
    border-radius: 2px;
    padding: 0 2px;
  }

  .security {
    line-height: 0.6rem;
    margin-right: 0.2rem;
    border: none;
  }

  .detal {
    width: 100%;
    text-align: center;
    min-height: 100px;
  }
  .detal img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }

  .goods-des {
    text-decoration: underline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #D41D0F;
    font-size: .25rem;
  }
  .thumb {
    width: 100%;
    background-color: #ffffff;
    text-align: center;
  }
  .thumb img {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
