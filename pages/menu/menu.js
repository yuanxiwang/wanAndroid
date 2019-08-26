// pages/menu/menu.js
const LABEL_SOURCE = require('../../utils/label_flow_source.js');
var call = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstData: [{
      "articles": [{
        "apkLink": "",
        "author": "小编",
        "chapterId": 272,
        "chapterName": "常用网站",
        "collect": false,
        "courseId": 13,
        "desc": "",
        "envelopePic": "",
        "fresh": false,
        "id": 1848,
        "link": "https://developers.google.cn/",
        "niceDate": "2018-01-07",
        "origin": "",
        "prefix": "",
        "projectLink": "",
        "publishTime": 1515322795000,
        "superChapterId": 0,
        "superChapterName": "",
        "tags": [],
        "title": "Google开发者",
        "type": 0,
        "userId": -1,
        "visible": 0,
        "zan": 0
      }],
      "cid": 272,
      "name": "常用网站",
      "labels": [{
        "url": "https://developers.google.cn/",
        "name": "google开发者"
      }]
    }],
    currentIndex: 0,
    selectedColor:"blue",
    normalColor:"black",
    toView:"常用网站"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    call.request("/navi/json", "GET", this.onSuccess, this.onFailed);
  },
  onSuccess: function(data) {
    let i;
    var firstArray = new Array();
    for (i in data.data) {
      var first = data.data[i].articles;
      var labelsData = new Array();
      for (let index = 0; index < first.length; index++) {
        labelsData[index] = new Label(first[index].link, first[index].title);
      };
      var firstLabel = {
        "articles": data.data[i],
        "labels": labelsData
      };
      firstArray[i] = firstLabel;
    }
    this.setData({
      firstData: firstArray
    });

  },
  onFailed(data) {
    console.log("获取失败")
  },
  leftClick: function(data) {
    console.log(data);
    this.setData({
      currentIndex: data.currentTarget.dataset.id,
      toView: this.data.firstData[data.currentTarget.dataset.id]
    });
  },
  labelTap: function(data) {
    console.log(data)
    wx.navigateTo({
      url: '../web/web?webInfo=' + data.detail.dataset.item.url,
    })
  }
})
class Label {
  constructor(url, name) {
    this.url = url;
    this.name = name;
  }
}