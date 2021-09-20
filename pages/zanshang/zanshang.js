var app = getApp();
Page({
  data: {
    scene: ''
  },
  onLoad: function (options) {
    var that = this
    var scene_img = 'cloud://junshixunlianchengji-86wg6.6a75-junshixunlianchengji-86wg6-1303113678/zanshang.jpg' //这里添加图片的地址
    that.setData({
      scene: scene_img
    })
    
  },
  previewImage: function (e) {
    wx.previewImage({
      urls: this.data.scene.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错
    })
  }
})