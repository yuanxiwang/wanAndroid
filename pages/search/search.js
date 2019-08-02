// pages/search/search.js
const app = getApp()
var call = require("../../utils/request.js")
const LABEL_SOURCE = require('../../utils/label_flow_source.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    labels: LABEL_SOURCE.labels,
    intputString:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    call.request("/hotkey/json", "GET", this.onSuccess, this.doFail);
  },
  onSuccess: function(data){
    var that = this;
    that.setData({
      labels:data.data
    })
  },
  doFail:function(){
    console.log("获取失败")
  }, 
  labelTap:function(data) {
    console.log(data)
    wx.navigateTo({
      url: '../searchResult/searchResult?keyWords=' + data.detail.dataset.item.name,
    })
  },
  searchInput:function(data){
      var that = this;
      that.setData({
        intputString:data.detail.value
      })
  },
  search:function(){
    wx.navigateTo({
      url: '../searchResult/searchResult?keyWords=' + this.data.intputString,
    })
  }

})