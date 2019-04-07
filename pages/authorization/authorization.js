// pages/authorization/authorization.js
// 请求的 URL 公共前缀
var app = getApp();
const basic_url = app.globalData.basic_url;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  // 自定义函数 开始
  getUserInfo: function(e) {
    // var that = this;

    // console.log(e.detail.userInfo)
    // 用户未授权！
    if (e.detail.userInfo == undefined  ) {
      wx.showToast({
        title: '授权方能更好用体验哦~',
        icon: 'none',
      })
      return;
    }

    // 用户允许授权，将 userInfo 数据存放到 storage 和 全局变量 中。
    app.globalData.user_info = e.detail.userInfo;
    wx.setStorageSync('user_info', JSON.stringify(e.detail.userInfo));

    // console.log('授权后的app.globalData.user_info：', app.globalData.user_info)
    // console.log('授权后的storage user_info：', JSON.parse(wx.getStorageSync('user_info')))
    
    // 通过 login 获取到 openid ,并存放到 storage 和 全局变量 中
    wx.login({
      success(res) {
        console.log('不含openid的res:', res)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: 'wx468a8bf22a59ac97',
            secret: '0d1dcbb72010bd21c5f76bf0e57fc405',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          // 通过 code 获取到 openid , 然后将 openid 存放到 全局变量和 Storage 中
          success(res) {
            console.log('含openid的res:', res)
            app.globalData.openid = res.data.openid
            wx.setStorageSync('openid', res.data.openid)
          }
        })
      }
    });
    
    // 所需的 user_info 、oprnid 都存放好了，跳转到小程序的首页
    wx.switchTab({
      url: '../me/me',
    })
  },
  // 自定义函数 结束

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})