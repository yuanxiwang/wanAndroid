//index.js
//获取应用实例
const app = getApp()
var call = require("../../utils/request.js")

Page({
  /**
   * 页面初始化数据
   */
  data: {
    imgPaths: [{ "desc": "Android高级进阶直播课免费学习", "id": 23, "imagePath": "https://wanandroid.com/blogimgs/0b712568-6203-4a03-b475-ff55e68d89e8.jpeg", "isVisible": 1, "order": 0, "title": "Android高级进阶直播课免费学习", "type": 0, "url": "https://url.163.com/4bj" }, { "desc": "一起来做个App吧", "id": 10, "imagePath": "https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png", "isVisible": 1, "order": 0, "title": "一起来做个App吧", "type": 1, "url": "http://www.wanandroid.com/blog/show/2" }, { "desc": "", "id": 6, "imagePath": "https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png", "isVisible": 1, "order": 1, "title": "我们新增了一个常用导航Tab~", "type": 1, "url": "http://www.wanandroid.com/navi" }
    ],
    //指示器
    indecatorDots:true,
    //滑动方向是否为纵向
    vertical:false,
    //自动切换
    autoplay:true,
    //采用衔接滑动
    circular:true,
    //自动切换时间间隔  单位ms
    interval:2000,
    //滑动动画时长 单位ms
    duration:500,
    //前边距，可用于露出前一项的一小部分，接受px和rpx
    perviousMargin:0,
    //后边距，可用于露出后一项的一小部分，接受px和rpx
    nextMargin:0,
    contentList:[{
      "apkLink": "",
      "author": "mseddl ",
      "chapterId": 245,
      "chapterName": "集合相关",
      "collect": false,
      "courseId": 13,
      "desc": "",
      "envelopePic": "",
      "fresh": false,
      "id": 8688,
      "link": "https://www.jianshu.com/p/e1c020d37c6a",
      "niceDate": "2019-07-12",
      "origin": "",
      "prefix": "",
      "projectLink": "",
      "publishTime": 1562861004000,
      "superChapterId": 245,
      "superChapterName": "Java深入",
      "tags": [],
      "title": "详解并发下的HashMap以及JDK8的优化",
      "type": 0,
      "userId": -1,
      "visible": 1,
      "zan": 0
    }, {
        "apkLink": "",
        "author": "xiaoyang",
        "chapterId": 440,
        "chapterName": "官方",
        "collect": false,
        "courseId": 13,
        "desc": "<p>和<a href=\"https://www.wanandroid.com/wenda/show/8672\" target=\"_blank\" style=\"font-size: 16px;\">上一个问题</a>&nbsp;当成兄弟问题咯。</p><br><p>如果可以，为什么？</p>",
        "envelopePic": "",
        "fresh": false,
        "id": 8680,
        "link": "https://www.wanandroid.com/wenda/show/8680",
        "niceDate": "2019-07-11",
        "origin": "",
        "prefix": "",
        "projectLink": "",
        "publishTime": 1562858911000,
        "superChapterId": 440,
        "superChapterName": "问答",
        "tags": [{
          "name": "问答",
          "url": "/article/list/0?cid=440"
        }],
        "title": "每日一问 在Activity 的 onResume 方法中 view.postRunnable 能获取到 View 宽高吗？",
        "type": 0,
        "userId": 2,
        "visible": 1,
        "zan": 8
      }]
  },
  onLoad:function(){
    var that = this;
    //调用请求封装方法
    call.request('/banner/json', 'GET', this.onSuccess, this.doFail);
  },
  onSuccess:function(data){
    var that = this;
    console.log(data)
    that.setData({
      imgPaths:data.data
    })
  },
  doFail:function(){
    console.log("出错了");
  },
  bannerClick:function(data){
    console.log(data.target.dataset)
    wx.navigateTo({
      url: '../web/web?webInfo=' + data.target.dataset.bannerclick.url
    })
  },
  onPullDownRefresh:function(event){
    call.request
  },
})
