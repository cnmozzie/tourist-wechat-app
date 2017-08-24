//index.js
//获取应用实例
var app = getApp()

//panel.js
var base64 = require("../images/base64");

Page({
  data: {
    motto: 'This is my motto!',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindActivityTap: function (event) {
    console.log(event)

    wx.navigateTo({
      url: '../activity/activity'
    })
  },
  onLoad: function () {
    console.log('onLoad')

    //panel.js
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
