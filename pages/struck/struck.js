// pages/struck/struck.js
const app = getApp()
var call = require("../../utils/request.js")
var page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [{
      "children": [{
        "children": [],
        "courseId": 13,
        "id": 60,
        "name": "Android Studio相关",
        "order": 1000,
        "parentChapterId": 150,
        "userControlSetTop": false,
        "visible": 1
      }, {
        "children": [],
        "courseId": 13,
        "id": 169,
        "name": "gradle",
        "order": 1001,
        "parentChapterId": 150,
        "userControlSetTop": false,
        "visible": 1
      }, {
        "children": [],
        "courseId": 13,
        "id": 269,
        "name": "官方发布",
        "order": 1002,
        "parentChapterId": 150,
        "userControlSetTop": false,
        "visible": 1
      }],
      "courseId": 13,
      "id": 150,
      "name": "开发环境",
      "order": 1,
      "parentChapterId": 0,
      "userControlSetTop": false,
      "visible": 1
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    call.request("tree/json", "GET", this.doSuccess, this.doFail);
  },

  doSuccess:function(data){
    var that = this;
    console.log(data);
    that.setData({
      data:data.data
    })
  },

  doFail:function(){
    wx.showToast({
      title: '加载失败',
    })
  },

  itemClick:function(data){
    console.log(data.currentTarget.dataset.item);
    var s = JSON.stringify(data.currentTarget.dataset.item);
    console.log("Json : " + s);
    wx.navigateTo({
      url: '../struckDetailList/struckDetailList?subData=' + s,
    })
  },
  searchClick:function(data){
    console.log(data);
    wx.navigateTo({
      url: '../search/search',
    })
  }
})