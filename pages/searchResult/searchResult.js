// pages/searchResult/searchResult.js
var page = 0;
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
  that.setData({
    title: options.keyWords
  })
  console.log(options.keyWords)
  call.requestWithParam("/article/query/" + page + "/json", "POST", {
    'k': options.keyWords
  }, this.doSuccess, this.doFail);
},

doSuccess: function(data) {
  console.log(data)
},
doFail: function() {
  console.log("请求失败")
},

/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function() {

},

/**
 * 生命周期函数--监听页面显示
 */
onShow: function() {

},

/**
 * 生命周期函数--监听页面隐藏
 */
onHide: function() {

},

/**
 * 生命周期函数--监听页面卸载
 */
onUnload: function() {

},

/**
 * 页面相关事件处理函数--监听用户下拉动作
 */
onPullDownRefresh: function() {

},

/**
 * 页面上拉触底事件的处理函数
 */
onReachBottom: function() {

},

/**
 * 用户点击右上角分享
 */
onShareAppMessage: function() {

}
})