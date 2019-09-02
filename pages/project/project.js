// pages/project/project.js
var call = require("../../utils/request.js")
var page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [{
      "children": [],
      "courseId": 13,
      "id": 294,
      "name": "完整项目",
      "order": 145000,
      "parentChapterId": 293,
      "userControlSetTop": false,
      "visible": 0
    }],
    current: 0, //此属性暂时没有用到，后面会用到
    selectindicatorcolor: 'white',
    normalindicatorcolor: 'red',
    //指示器
    indecatorDots: true,
    //滑动方向是否为纵向
    vertical: false,
    //自动切换
    autoplay: false,
    //采用衔接滑动
    circular: true,
    //自动切换时间间隔  单位ms
    interval: 2000,
    //滑动动画时长 单位ms
    duration: 500,
    //前边距，可用于露出前一项的一小部分，接受px和rpx
    perviousMargin: 0,
    //后边距，可用于露出后一项的一小部分，接受px和rpx
    nextMargin: 0,
    datas: {
      "curPage": 1,
      "datas": [{
        "apkLink": "",
        "author": "goweii",
        "chapterId": 294,
        "chapterName": "完整项目",
        "collect": false,
        "courseId": 13,
        "desc": "开发初期主要是为了试水一些自己开发的开源框架，但是后面发现本人对这个APP的使用频率还是挺高的，在坐地铁的时候都会拿出来刷一刷文章。所以决定把这个APP做好看，做好用，不至于影响刷文章的心情。\r\n\r\n如果你也觉得好用，欢迎给个star，谢谢。",
        "envelopePic": "https://wanandroid.com/blogimgs/eb948f06-8895-4b67-8bf9-1aa41dea75cb.png",
        "fresh": true,
        "id": 8501,
        "link": "http://www.wanandroid.com/blog/show/2577",
        "niceDate": "9小时前",
        "origin": "",
        "prefix": "",
        "projectLink": "https://github.com/goweii/WanAndroid",
        "publishTime": 1567351026000,
        "superChapterId": 294,
        "superChapterName": "开源项目主Tab",
        "tags": [{
          "name": "项目",
          "url": "/project/list/1?cid=294"
        }],
        "title": "简洁美观的WanAndroid客户端",
        "type": 0,
        "userId": -1,
        "visible": 1,
        "zan": 0
      }],
      "offset": 0,
      "over": false,
      "pageCount": 11,
      "size": 15,
      "total": 156
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },


})