var app=getApp()
Page({
  data:{
    userInfo:{},
    indicatorDots:true,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      '../images/box.png',
      '../images/buddy.png'
    ],
    functions:[
      {
        "name":"use card",
        "pic_url":'../../images/music.png'
      },
      {
       "name":"get pad",
       "pic_url":'../../images/think.png' 
      },
      {
        "name": "use card",
        "pic_url": '../../images/music.png'
      },
      {
        "name": "get pad",
        "pic_url": '../../images/think.png'
      },    
    ]
  },
  //do somethings
  bindViewTap:function(event)
  {
    console.log(event);

  },
  onLoad: function () {
    console.log('onLoad')

  }
})