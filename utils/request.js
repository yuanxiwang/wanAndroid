var app = getApp();
//项目中URL相同的部分，减轻代码量， 同时方便代码迁移
var host ='https://www.wanandroid.com/';
function request(url, method, doSuccess, doFail){
  wx.request({
    url: host + url,
    header:{
      "content-type":"application/json;charset=UTF-8"
    },
    method:method,
    success:function(res){
      /**
       * 参数值为res.data,直接将返回的数据传入
       */
      doSuccess(res.data);
    },
    fail:function(){
      console.log("失败");
      doFail();
    }
  })
}
/**
 * module.exports用来导出代码
 * js文件中通过var call = require("../util/request.js")  加载
 * 在引入引入文件的时候"  "里面的内容通过../../../这种类型，小程序的编译器会自动提示，因为你可能
 * 项目目录不止一级，不同的js文件对应的工具类的位置不一样
 */
module.exports.request = request;
// module.exports.getData = getData;