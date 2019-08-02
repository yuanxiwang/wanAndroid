//index.js
//获取应用实例
const app = getApp()
var call = require("../../utils/request.js")
var page = 0;

Page({
  /**
   * 页面初始化数据
   */
  data: {
    airtcleList: [{
      "apkLink": "",
      "author": "stevewang",
      "chapterId": 93,
      "chapterName": "基础知识",
      "collect": false,
      "courseId": 13,
      "desc": "",
      "envelopePic": "",
      "fresh": false,
      "id": 8690,
      "link": "https://www.jianshu.com/p/cb5181418c7a",
      "niceDate": "2019-07-12",
      "origin": "",
      "prefix": "",
      "projectLink": "",
      "publishTime": 1562861151000,
      "superChapterId": 94,
      "superChapterName": "自定义控件",
      "tags": [],
      "title": "Android TouchDelegate详解及优化",
      "type": 0,
      "userId": -1,
      "visible": 1,
      "zan": 0
    }],
    imgPaths: [{
      "desc": "Android高级进阶直播课免费学习",
      "id": 23,
      "imagePath": "https://wanandroid.com/blogimgs/0b712568-6203-4a03-b475-ff55e68d89e8.jpeg",
      "isVisible": 1,
      "order": 0,
      "title": "Android高级进阶直播课免费学习",
      "type": 0,
      "url": "https://url.163.com/4bj"
    }],
    //指示器
    indecatorDots: true,
    //滑动方向是否为纵向
    vertical: false,
    //自动切换
    autoplay: true,
    //采用衔接滑动
    circular: true,
    //自动切换时间间隔  单位ms
    interval: 2000,
    //滑动动画时长 单位ms
    duration: 500,
    //前边距，可用于露出前一项的一小部分，接受px和rpx
    perviousMargin: 0,
    //后边距，可用于露出后一项的一小部分，接受px和rpx
    nextMargin: 0
  },
  onLoad: function() {
    var that = this;
    //调用请求封装方法
    call.request('/banner/json', 'GET', this.onSuccess, this.doFail);
    call.request("article/list/" + page + "/json", 'GET', this.onArticleSuccess, this.onArticleFail);
  },
  onSuccess: function(data) {
    var that = this;
    console.log(data)
    that.setData({
      imgPaths: data.data
    })
  },
  doFail: function() {
    console.log("出错了");
  },
  searchClick: function(data) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  bannerClick: function(data) {
    console.log(data.target.dataset)
    wx.navigateTo({
      url: '../web/web?webInfo=' + data.target.dataset.bannerclick.url
    })
  },
  onPullDownRefresh: function(event) {
    wx.showNavigationBarLoading();
    page = 0;
    call.request("article/list/" + page + "/json", 'GET', this.onArticleSuccess, this.onArticleFail);
  },
  onArticleSuccess: function(data) {
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
    var that = this;
    console.log(data);
    that.setData({
      airtcleList: data.data.datas
    })
  },
  onArticleFail: function() {
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
    console.log("刷新失败");
  },
  onReachBottom: function() {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '玩命加载中',
    })
    // 页数+1
    page = page + 1;
    call.request("article/list/" + page + "/json", 'GET', this.onLoadMoreSuccess, this.loadMoreFail);
  },
  onLoadMoreSuccess: function(data) {
    var that = this;
    // 回调函数
    var airtcleList = that.data.airtcleList;
    const oldData = that.data.airtcleList;
    that.setData({
      airtcleList: oldData.concat(data.data.datas)
    });
    // 隐藏加载框
    wx.hideLoading();
  },
  loadMoreFail: function() {
    console.log("加载失败")
    wx.hideLoading();
  },
  itemClick: function(data) {
    console.log(data.currentTarget.dataset)
    wx.navigateTo({
      url: '../web/web?webInfo=' + data.currentTarget.dataset.item.link
    })
  }
})