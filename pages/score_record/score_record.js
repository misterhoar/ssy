// pages/score_record/score_record.js
const app = getApp()
var template = require('../../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  tabBar: {
    "color": "#9E9E9E",
    "selectedColor": "#f00",
    "backgroundColor": "#fff",
    "borderStyle": "#ccc",
    "list": [
      {
        "selectedIconPath": "../../images/index1.png",
        "iconPath": "../../images/index.png",
        "pagePath": "/pages/pw_index/pw_index",
        "text": "赛事"
      },
      {
        "selectedIconPath": "../../images/geren1.png",
        "iconPath": "../../images/geren.png",
        "pagePath": "/pages/score_record/score_record",
        "text": "打分纪录"
      }
    ],
    "position": "bottom"
  },
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    template.tabbar("tabBar", 0, this);
  },
  pingyu:function(){
    wx.navigateTo({
      url: '../player/player'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})