// pages/gedoushu/gedoushu.js
let interstitialAd = null
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 在页面onLoad回调事件中创建插屏广告实例
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-23ccf5404644c3ee'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
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
    return {
      title: '军事体育计算器',
      desc: '分享给好友使用吧！',

    }
  },
  xiazai(e) {
    console.log('dianle')
    wx.showToast({
        title: '下载中，请等待',
        icon: 'loading',
        duration: 50000
      }),
      wx.cloud.downloadFile({
        fileID: 'cloud://junshixunlianchengji-86wg6.6a75-junshixunlianchengji-86wg6-1303113678/gedoushu.mp4',
        success: res => {
          // get temp file path
          console.log(res.tempFilePath)

          wx.saveVideoToPhotosAlbum({
            filePath: res.tempFilePath,
            success(res) {
              console.log(res.errMsg)
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
        },
        fail: err => {
          // handle error
          if (err.errMsg === 'saveVideoToPhotosAlbum:fail auth deny') {
            wx.showModal({
              title: '提示',
              content: '需要您授权保存相册',
              showCancel: false,
              success: data => {
                wx.openSetting({
                  success(settingdata) {
                    if (settingdata.authSetting['scope.writePhotosAlbum']) {
                      wx.showModal({
                        title: '提示',
                        content: '获取权限成功,再次点击下载即可保存',
                        showCancel: false,
                      })
                    } else {
                      wx.showModal({
                        title: '提示',
                        content: '获取权限失败，将无法保存到相册哦~',
                        showCancel: false,
                      })
                    }
                  },
                })
              }
            })
          }
        }

      })

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