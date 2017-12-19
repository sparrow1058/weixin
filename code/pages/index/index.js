//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    scanImagePath: '../../images/bt_scan.png',
        imgUrls: [
      'http://ssl.haidiyun.top/web/image/wall1.jpg',
      'http://ssl.haidiyun.top/web/image/wall2.jpg',
      'http://ssl.haidiyun.top/web/image/wall3.jpg',
      'http://ssl.haidiyun.top/web/image/wall4.jpg',
      
     ],
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(app.globalData.userInfo.avatarUrl);
  },
  bindScanTap:function(){
    wx.scanCode({
      success: (res) => {
        var codeUrl=res.result;
        var pos = codeUrl.indexOf('?');
        codeUrl = codeUrl.slice(pos + 1)
        var detail = codeUrl.split('&');
        wx.setStorage({
          key: 'detail',
          data: detail,
        })
        
        var actions=detail[0].split('=');
        if(actions[1]=='charge')
        {
          
          wx.navigateTo({
            url: '../charge/charge',

          })
          
        }else if (actions[1] == 'call') {
   
          wx.navigateTo({
            url: '../call/call',

          })

        }else{
          console.log('pay');

        }



       // codeUrl=res.slice(res)
       // if detail['action']=='charge'
               
        
  


      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
