// pages/kefu/kefu.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // getrenyuanleibie2:2,
    // appdata:app.globalData,
    apprenyuanleibie: '',
    appxingbie:'',
    appnianling:'',
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

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
    this.setData({
      apprenyuanleibie: app.globalData.renyuanleibie, //全局变量不能再wxml中引用，需要将全局变量赋值给子页面中的某个变量
      appxingbie:app.globalData.xingbie,
      appnianling:app.globalData.nianling,
     
    })
    console.log('人员类别',app.globalData.renyuanleibie,'性别',app.globalData.xingbie,'年龄',app.globalData.nianling)
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
    return {
      title: '军事体育计算器',
      desc: '分享给好友使用吧！',
      
    }
  },
  adLoad() {
    console.log('Banner 广告加载成功')
  },
  adError(err) {
    console.log('Banner 广告加载失败', err)
  },
  adClose() {
    console.log('Banner 广告关闭')
  },
})