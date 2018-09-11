// pages/xs_info/xs_info.js
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
        "pagePath": "/pages/xs_index/xs_index",
        "selectedIconPath": "../../images/index1.png",
        "iconPath": "../../images/index.png",
        "text": "赛事"
      },
      {
        "pagePath": "/pages/xs_score/xs_score",
        "iconPath": "../../images/sheet.png",
        "selectedIconPath": "../../images/sheet2.png",
        "text": "成绩"
      }, {
        "pagePath": "/pages/xs_info/xs_info",
        "selectedIconPath": "../../images/geren1.png",
        "iconPath": "../../images/geren.png",
        "text": "我的"
      }
    ],
    "position": "bottom"
  },
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.index("tabBar", 0, this)
  },
  userinfo:function(){
      wx.navigateTo({
        url: 'user_info/user_info',
      })
  },
  apply_record: function () {
    wx.navigateTo({
      url: 'apply_record/apply_record',
    })
  },
  match_record: function () {
    wx.navigateTo({
      url: 'match_record/match_record',
    })
  },
  all_match: function () {
    wx.navigateTo({
      url: 'all_match/all_match',
    })
  },
  setting: function () {
    wx.navigateTo({
      url: 'setting/setting',
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