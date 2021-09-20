const myAudio = wx.createInnerAudioContext()
const playRateRange = [0.8, 1.0, 1.5, 2.0]
const audioAccent = [{
    key: 'audio_uk',
    text: '英音'
  },
  {
    key: 'audio_us',
    text: '美音'
  },
]

var wenjiandizhi = '';
let interstitialAd = null
Page({
  data: {
    active: 0,
    isPlay: false,
    thumbnail: '/icon/guangpan.png',
    thumbnail2: '/icon/kuaitui.png',
    thumbnail3: '/icon/kuaijin.png',
    progress: 0,
    curAccentIndex: 0,
    curAccentText: '',
    curPlayRateIndex: 1,
    curPlayRate: 0,
  },

  onLoad: function () {
    this.setData({
      //curPlayRate: playRateRange[this.data.curPlayRateIndex].toFixed(1),
      curAccentText: audioAccent[this.data.curAccentIndex].text
    })
    this.init()
     // 在页面onLoad回调事件中创建插屏广告实例
     if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-b7fe7575c3f5a984'
      })
      interstitialAd.onLoad(() => {})
      interstitialAd.onError((err) => {})
      interstitialAd.onClose(() => {})
    }

    // 在适合的场景显示插屏广告
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },

  onUnload: function (e) {
    myAudio.destroy(); //销毁这个实例
  },

  init() {
    //myAudio.playbackRate = 2
    myAudio.src = 'cloud://junshixunlianchengji-86wg6.6a75-junshixunlianchengji-86wg6-1303113678/jinjiepao.mp3'

    myAudio.onCanplay(() => {
      myAudio.duration; //必须写，不然获取不到。。。
    })

    //进度条变化 
    myAudio.onTimeUpdate(() => {
      this.setData({
        progress: myAudio.currentTime / myAudio.duration * 100
      })
    })

    myAudio.onEnded(() => {
      this.setData({
        isPlay: false
      })
      // 播放结束回到开头，stop
      myAudio.seek(0)
    })
  },

  //播放  
  play: function () {
    myAudio.startTime = this.data.myAudioCurrent;
    myAudio.play()
    this.setData({
      isPlay: true
    })
  },

  pause: function () {
    myAudio.pause();
    this.setData({
      isPlay: false
    });
  },

  stop: function () {
    myAudio.stop();
    this.setData({
      isPlay: false
    });
  },

  // 快进
  seekPosition(e) {
    myAudio.seek(myAudio.currentTime + 5 * e.currentTarget.dataset.flag)
  },

  // 切换英音/美音
  switchAccent() {
    this.data.curAccentIndex = this.data.curAccentIndex == 0 ? 1 : 0
    this.setData({
      curAccentText: audioAccent[this.data.curAccentIndex].text
    })
    myAudio.stop()
    // 在onCanplay里获取并设置音频时长和播放进度
    myAudio.src = '换个音频地址'
    myAudio.onCanplay(() => {
      myAudio.duration; //必须写，不然获取不到。。。 
      if (this.data.isPlay) {
        myAudio.play()
      }
    })

    //进度条变化，换了个音频地址，所以要再写一下
    myAudio.onTimeUpdate(() => {
      this.setData({
        progress: myAudio.currentTime / myAudio.duration * 100
      })
    })
  },

  // 更改播放速度,暂时无效，等待版本修复
  switchPlayRate() {

  },

  xiazai(e) {
    wx.showToast({
        title: '下载中，请等待',
        icon: 'loading',
        duration: 50000
      }),
      wx.cloud.downloadFile({
        fileID: 'cloud://junshixunlianchengji-86wg6.6a75-junshixunlianchengji-86wg6-1303113678/jinjiepao3.mp4',
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