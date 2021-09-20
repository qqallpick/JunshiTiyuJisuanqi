//app.js
App({
  // 全局变量
  globalData: {
    renyuanleibie: '1',
    xingbie: '0',
    nianling: '24',
  },
  onLaunch: function () {
    wx.cloud.init({
      env: "junshixunlianchengji-86wg6",
    })
  }






})