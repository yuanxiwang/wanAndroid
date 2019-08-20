// pages/struckDetailList/struckDetailList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subData: [{
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
    nextMargin: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(JSON.parse(options.subData).children);
    this.setData({
      subData: JSON.parse(options.subData).children
    })
    
  },
  taptab: function(data) {
    console.log(data);
    var that = this;
    that.setData({
      current: data.currentTarget.dataset.index
    })
  }
})