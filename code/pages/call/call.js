Page({
  data: {
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
        table: "test",
        calltype: itemList[id].name
      },
      method :'POST',
      header: {
        header: { 'content-type': 'application/x-www-form-urlencoded' }
      },
      success: function (res) {
        console.log(res.data)
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

  onLoad: function () {
    /*
    wx.request({
      url: 'https://ssl.haidiyun.top/web/calltype.php', //仅为示例，并非真实的接口地址
      data: {
        table: '',
        calltype: ''
      },
      header: {
        "Content-Type": "application/json"
      },
      success: function (res) {
        console.log(res.data)
      }
    })
    */ 
  },


});
