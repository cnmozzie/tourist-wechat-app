//index.js
//获取应用实例
var app = getApp()

//panel.js
var base64 = require("../images/base64");

//navbar.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({
  data: {
    //navbar.js
    tabs: ["主页", "活动通知", "我的"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0
    //userInfo: {}
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
    //app.getUserInfo(function(userInfo){
      //更新数据
      //that.setData({
        //userInfo:userInfo
      //})
    //})

    //navbar.js
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  //navbar.js
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})
