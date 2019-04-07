// pages/me/me.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 从 app的全局数据中进行获取并更新
    user_info: {},
    my_point: '初始积分0',
    // my_info: {
    //   src: '../../images/me/my_info/icon.png',
    //   id: '小螺号',
    //   point: 0,
    // },

    my_list: [
      { id: 1, src: '../../images/me/my_list/order.png', title: '我的订单' },
      { id: 2, src: '../../images/me/my_list/address.png', title: '收货地址' },
      { id: 3, src: '../../images/me/my_list/collect.png', title: '我的收藏' }
    ],
  },

  // 自定义函数
  // 根据点击的的不同 id 进入不同的页面
  navigateToMyPage: function (e) {
    var id = e.target.id;
    switch (id) {
      case '1':
        wx.navigateTo({
          url: '../my_order/my_order',
        }); break;

      case '2':
        wx.navigateTo({
          url: '../my_address/my_address',
        }); break;

      case '3':
        wx.navigateTo({
          url: '../my_collect/my_collect',
        }); break;
        
      default:
        break;
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // onload 指触发一次，正好适合一次从 全局变量中获取数据并将 user_info(信息有多余项，不过对性能影响不大) 信息更新一次！
    this.setData({
      user_info: app.globalData.user_info
    })
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
    // 因为积分随着购买会不断地增加，所以 积分的更新必须放在 onShow ,而不是 一次更新的 onLoad 中！

    // 总体：1、带上 openid 数据向后端发起请求，返回该用户（即该openid)所对应的 积分值 my_point
    var that = this;
    wx.request({
      url: app.globalData.basic_url + 'search_my_point.php',
      data: {
        openid: app.globalData.openid
      },
      success(res) {
        // console.log(res.data[0].point)
        // console.log(that.data.my_point)
        console.log('（经查询）openid为' + app.globalData.openid + '的积分为:' + res.data[0].point)
        that.setData({
          my_point: res.data[0].point
        })
      }
    })
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