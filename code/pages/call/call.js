var Util = require('../../utils/util.js');
var shopInfo=new Array;
Page({
  data: {
    shopRegCode:"",
    shopName:" ",
    tableName:" ",
    second: 20,
    functions: [
      {
        "name": "买单",
        "pic_url": '../../images/music.png'
      },
      {
        "name": "催菜",
        "pic_url": '../../images/think.png'
      },
      {
        "name": "打包",
        "pic_url": '../../images/music.png'
      },
      {
        "name": "纸巾",
        "pic_url": '../../images/think.png'
      },
      {
        "name": "清洁",
        "pic_url": '../../images/music.png'
      },
      {
        "name": "加水",
        "pic_url": '../../images/think.png'
      },
      ]
  
  },
  bindImageTap: function (event)
  {
    var id=event.target.id;
    var itemList=this.data.functions;
    wx.request({
      url: 'https://ssl.haidiyun.top/web/call.php', 
        data: {
        regcode:shopInfo['regCode'],
        table: shopInfo['tableNo'],
        calltype: itemList[id].name
      },
      method :'POST',
      header: {
        header: { 'content-type': 'application/x-www-form-urlencoded' }
      },
      success: function (res) {
       // console.log(res.data)
      }
    })
  
  },
  addCallItem:function()
  {
    var newarray=[{
      id:8,
      name:'type',
    }];
    this.setData({
      'functions': this.data.list.concat(newarray)
    });

  },
  getShopName:function()
  {
    var that=this;
    wx.request({
      url: 'https://ssl.haidiyun.top/web/calltype.php',
      data: {
        'regcode':shopInfo['regCode'],
       },
      method: 'POST',
      header: {
        header: { 'content-type': 'application/x-www-form-urlencoded' }
      },
      success: function (res) {  

        var codeUrl = res.data;
        var shopStr = codeUrl['Remark']
       // console.log(typeof shopStr)
        //var pos = shopStr.indexOf('_');
       // shopStr.substring(shopStr.length - 2, shopStr.length)
        that.setData({
          'shopName': shopStr,
        })
      }
    })
  },
  onShow:function()
  {

  },
  getShopInfo:function()
  {
    var that = this;
    console.log(shopInfo + "test2")
    wx.getStorage({
      key: 'detail',
      success: function (res) {
        var param;
        for (var i = 0; i < res.data.length; i++) {
          param = res.data[i].split('=');
          shopInfo[param[0]] = param[1];
        }
        that.setData({
          'tableName': shopInfo['tableNo']
        })
      }
    })

  },
  onLoad: function () {
    
    var that=this;
    this.getShopInfo();
    setTimeout(function () {
      that.getShopName();
    }, 2000);
  },
  


});
