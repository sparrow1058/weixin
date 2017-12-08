function countdown(that){
  var second=that.data.second
  if(second==0){
    that.setData({
      second: "30s seconds"
    });
    return;
  }
  var time=setTimeout(function(){
    that.setData({
      second:second -1
    });
    countdown(that);
  },1000)
 }
 Page({
   data:{
     second:20
   },
   onLoad:function(){
     countdown(this);
   }
 });