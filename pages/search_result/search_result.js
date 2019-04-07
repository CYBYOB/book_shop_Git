// pages/search_result/search_result.js

// 当前页面的 路径前缀
const basic_path = '../../images/search_result/';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 销量渲染列表
    sale_list: {
      range: ['销量','从低到高','从高到低'],
      index: 1
    },

    // 销量渲染列表
    price_list: {
      range: ['价格', '从低到高', '从高到低'],
      index: 1
    },

    // 搜索结果的商品列表
    good_list: [
      { src: basic_path + '1.png', title: '高等数学（上）', price: 15, sale: 20 },
      { src: basic_path + '2.png', title: '高等数学（下）', price: 16, sale: 21 },
      { src: basic_path + '1.png', title: '大学物理（上）', price: 17, sale: 22 },
      { src: basic_path + '2.png', title: '大学物理（下）', price: 15, sale: 20 },
      { src: basic_path + '1.png', title: '大学英语（上）', price: 15, sale: 20 },
    ],

  },


  // 自定义函数 开始
  // 用户改变了销量的 排序方式
  sortChangeSale: function(e) {
    this.setData({
      'sale_list.index': e.detail.value
    })
  },

  // 用户改变了价格的 排序方式
  sortChangePrice: function (e) {
    this.setData({
      'price_list.index': e.detail.value
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