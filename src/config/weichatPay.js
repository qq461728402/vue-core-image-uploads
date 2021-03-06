/**
 * Created by dx on 18/1/22.
 */
import axios from 'axios'
import router from '@/router'
import store from '@/store'
//微信支付方法（点击按键调用）
let wx = require('weixin-js-sdk');
/*
 微信支付方法
 获取微信加签信息
 @param{data}:获取的微信加签
 @param{cb}:成功回调
 */
export function wexinPay(data,cb,errorCb) {
  let appId = data.appId;
  let timestamp = data.timeStamp;
  let nonceStr = data.nonceStr;
  let signature = data.signature;
  let packages = data.package;
  let paySign = data.paySign;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function(){
    wx.chooseWXPay({
      timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
      package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
      signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: paySign, // 支付签名
      success: function(res) {
        // 支付成功后的回调函数
        console.log(res);
        cb(res);
      },
      fail:function(res){
        errorCb(res);
      }
    });
  });
  wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    /*alert("config信息验证失败");*/
  });
}
export  function getLocation(data,cb,errorCb) {
  let appId = data.appId;
  let timestamp = data.timestamp;
  let nonceStr = data.nonceStr;
  let signature = data.signature;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['getLocation','onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function(){
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        // 支付成功后的回调函数
        cb(res);
      },
      fail:function(res){
        errorCb(res);
      }
    });
    const currentRouter = router.currentRoute.fullPath;
    var link = axios.defaults.baseURL+'/'+store.getters.store+"/proxy?url="+currentRouter;
    var title=store.getters.shearTitle;
    if (router.currentRoute.meta.title){
      title=router.currentRoute.meta.title;
    }
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    })
    wx.onMenuShareAppMessage({
      desc: link,   // 分享描述
      title: title, // 分享标题
      link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    })

  });
  wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    alert(JSON.stringify(res));
  });
}

export  function openLocation(data,storeInfo,cb,errorCb) {
  let appId = data.appId;
  let timestamp = data.timestamp;
  let nonceStr = data.nonceStr;
  let signature = data.signature;
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  wx.ready(function(){
    wx.openLocation({
      latitude:storeInfo.latitude,
      longitude: storeInfo.longitude,
      name: storeInfo.storeName,
      address:storeInfo.storeAddress,
      scale: 18,
      success: function () {
      },
      fail:function(res){
        errorCb(res);
      }
    });
  });
  wx.error(function(res) {
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    alert(JSON.stringify(res));
  });
}
export function  shearUrl(data,link,title) {
  let appId = data.appId;
  let timestamp = data.timestamp;
  let nonceStr = data.nonceStr;
  let signature = data.signature;
  wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
}





//威富通支付
export  function wftPay(data,cb,errorCb) {
   var payInfo =JSON.parse(data.pay_info);
   let appId = payInfo.appId;
   let timestamp = payInfo.timeStamp;
   let nonceStr = payInfo.nonceStr;
   let paySign = payInfo.paySign;
   let signType=payInfo.signType;
   WeixinJSBridge.invoke('getBrandWCPayRequest',{
     "appId" : appId, //公众号名称，由商户传入
     "timeStamp":timestamp, //时间戳，自1970 年以来的秒数
     "nonceStr" : nonceStr, //随机串
     "package" : payInfo.package,
     "signType" : signType, //微信签名方式:
     "paySign" : paySign //微信签名
   },function(res){
     if(res.err_msg == "get_brand_wcpay_request:ok" ) {
       // 支付成功后的回调函数
       cb(res);
     }else{
       errorCb(res);
     }
// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg 将在用户支付成功后返回ok，但并不保证它绝对可靠。
   });
 }





