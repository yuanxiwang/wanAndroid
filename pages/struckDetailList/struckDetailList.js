// pages/struckDetailList/struckDetailList.js
var call = require("../../utils/request.js")
var page = 0;
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
        nextMargin: 0,
        airtcleList: [{
            "apkLink": "",
            "author": " ztq",
            "chapterId": 60,
            "chapterName": "Android Studio相关",
            "collect": false,
            "courseId": 13,
            "desc": "",
            "envelopePic": "",
            "fresh": false,
            "id": 8201,
            "link": "https://juejin.im/post/5c9f2412f265da30bd3e428c",
            "niceDate": "2019-04-06",
            "origin": "",
            "prefix": "",
            "projectLink": "",
            "publishTime": 1554538973000,
            "superChapterId": 60,
            "superChapterName": "开发环境",
            "tags": [],
            "title": "零报错基于Virtualbox虚拟机搭建Linux(Ubuntu)的Android开发环境",
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
        var data = JSON.parse(options.subData).children;
        console.log(data);
        this.setData({
            subData: JSON.parse(options.subData).children
        });
        call.request('/article/list/' + page + '/json?cid=' + data[0].id, 'GET', this.onSuccess, this.doFail);
    },

    taptab: function(data) {
        console.log(data);
        var that = this;
        var currentIndex = data.currentTarget.dataset.index;
        that.setData({
            current: currentIndex
        });
		page = 0;
        console.log();
        call.request('/article/list/' + page + '/json?cid=' + that.data.subData[currentIndex].id, 'GET', this.onSuccess, this.doFail);
    },

    onSuccess: function(data) {
        console.log(data);
        this.setData({
            airtcleList: data.data.datas
        })
    },

    doFail: function() {
        console.log("查询失败")
    },
    onPullDownRefresh: function(event) {
        wx.showNavigationBarLoading();
        page = 0;
        call.request('article/list/' + page + '/json?cid=' + that.data.subData[currentIndex].id, 'GET', this.onArticleSuccess, this.onArticleFail);
    },
	onArticleSuccess: function (data) {
		wx.hideNavigationBarLoading();
		wx.stopPullDownRefresh();
		var that = this;
		console.log(data);
		that.setData({
			airtcleList: data.data.datas
		})
	},
	onArticleFail: function () {
		wx.hideNavigationBarLoading();
		wx.stopPullDownRefresh();
		console.log("刷新失败");
	},
	onReachBottom: function () {
		var that = this;
		// 显示加载图标
		wx.showLoading({
			title: '玩命加载中',
		})
		// 页数+1
		page = page + 1;
		call.request("article/list/" + page + "/json", 'GET', this.onLoadMoreSuccess, this.loadMoreFail);
	},
	onLoadMoreSuccess: function (data) {
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
	loadMoreFail: function () {
		console.log("加载失败")
		wx.hideLoading();
	},
	itemClick: function (data) {
		console.log(data.currentTarget.dataset)
		wx.navigateTo({
			url: '../web/web?webInfo=' + data.currentTarget.dataset.item.link
		})
	}
})