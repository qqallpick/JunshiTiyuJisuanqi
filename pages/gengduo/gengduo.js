Page({
  data: {
    changjingzhi: 0,
  },


  jinjiepaoyinyue() {
    wx.navigateTo({
      url: '/pages/jinjiepao/jinjiepao',
    })
  },

  gedoushu() {
    wx.navigateTo({
      url: '/pages/gedoushu/gedoushu',
    })
  },
  guanzhu() {
    wx.navigateTo({
      url: '/pages/gongzhonghao/gongzhonghao',
    })
  },
  onLoad: function (options) {
    var that = this
    var scene_img = 'cloud://junshixunlianchengji-86wg6.6a75-junshixunlianchengji-86wg6-1303113678/zanshang.jpg' //这里添加图片的地址
    that.setData({
      scene: scene_img
    })
    
  },
  zanshang() {
    
      wx.previewImage({
        urls: this.data.scene.split(',')
        // 需要预览的图片http链接  使用split把字符串转数组。不然会报错
      })
    
  },
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

  gaoyuanban(){
wx.navigateToMiniProgram({
  appId: 'wxd46e46c2d6d26383',
})



  },


















})