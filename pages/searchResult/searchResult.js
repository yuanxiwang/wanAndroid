// pages/searchResult/searchResult.js
var page = 0;
var keyWords = "";
var call = require("../../utils/request.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "自定义view",
    datas: [{
      "apkLink": "",
      "author": "郭霖",
      "chapterId": 409,
      "chapterName": "郭霖",
      "collect": false,
      "courseId": 13,
      "desc": "",
      "envelopePic": "",
      "fresh": false,
      "id": 8785,
      "link": "https://mp.weixin.qq.com/s/5fAmBYkkBr_7JUMm4bcsfQ",
      "niceDate": "2019-07-17",
      "origin": "",
      "prefix": "",
      "projectLink": "",
      "publishTime": 1563292800000,
      "superChapterId": 408,
      "superChapterName": "公众号",
      "tags": [{
        "name": "公众号",
        "url": "/wxarticle/list/409/1"
      }],
      "title": "由Android官方团队带你学习Android <em class='highlight'>Studio</em>的布局编辑器",
      "type": 0,
      "userId": -1,
      "visible": 1,
      "zan": 0
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    console.log(options.keyWords);
    keyWords = options.keyWords;
    that.setData({
      title: options.keyWords
    })
    wx.setNavigationBarTitle({
      title: options.keyWords,
    })
    call.requestWithParam("/article/query/" + page + "/json", "POST", {
      'k': keyWords
    }, this.doSuccess, this.doFail);
  },

  doSuccess: function(data) {
    console.log(data)
    var that = this;
    that.setData({
      datas:data.data.datas
    })
  },
  doFail: function() {
    console.log("请求失败")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    page = 0;
    call.requestWithParam("/article/query/" + page + "/json", "POST", {
      'k': keyWords
    }, this.doSuccess, this.doFail);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    call.requestWithParam("/article/query/" + page + "/json", "POST", {
      'k': keyWords
    }, this.onLoadMoreSuccess, this.loadMoreFail);
  },
  onLoadMoreSuccess:function(data){
    // 回调函数
    wx.hideLoading();
    var that = this;
    const oldData = that.data.datas;
    that.setData({
      datas: oldData.concat(data.data.datas)
    });
  },
  loadMoreFail:function(){
    wx.hideLoading();
    wx.showToast({
      title: '加载失败',
    })
  },
  itemClick: function (data) {
    console.log(data.currentTarget.dataset)
    wx.navigateTo({
      url: '../web/web?webInfo=' + data.currentTarget.dataset.item.link
    })
  }
})