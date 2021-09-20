const app = getApp()
const DB = wx.cloud.database().collection("liuyanban")

let interstitialAd = null
var input_code = '';
var age = 18;
var yinti = 0;
var yintichengji = 0;
var yangwoqizuochengji = 0;
var sanshimichengji = 0;
var sangonglichengji = 0;
var yangwoqizuo = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var times = 0;
var time = 0;
var index7 = 0;
var index8 = 0;
var sexindex = 0;
var qubiindex = 0;
var qubishu = 0;
var qubichengjih = 0;
var heightvar = 0;
var weightvar = 0;
var leibievar = "1";
var yintivar = 0;
var fuwochengvar = 0;
var qubivar = 0;
var yangwoqizuovar = 0;
var shexingpaovar = 0;
var sangonglivar = 0;
var timevar = 0;
var bjtimevar = 0;
var zongchengjivar = 0;
var pingjivar = "";

// pages/liuyan/liuyan.js
var shuruneirong = '';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chaxunxingbie: '',
    chaxunleibie: '',
    datalist: [],
    'appdata': app.globalData, //全局变量的用法
    agez: 0,
    yintiz: 0,
    yintichengjiz: 0,
    yangwoqizuochengjiz: 0,
    sanshimichengjiz: 0,
    sangonglichengjiz: 0,
    qubichengjiz: 0,
    peopleindex: 1,
    mun: 10000,
    age2: 1,
    height: 1,
    weight: 0,
    list: [{
        id: 0,
        name: "项目1"
      },
      {
        id: 1,
        name: "项目2"
      },
      {
        id: 2,
        name: "项目3"
      }
    ],
    array: ['男', '女'],
    sexarray: ['男', '女'],
    sexindex: 0,
    people: ['一类人员', '二类人员', '三类人员'],
    yangwoqizuojige: [12, 23, 45],
    tixingchengji: 0,
    yangwoqizuo: 0,
    yintijige: 0,
    index: 0,
    index5: 0,
    index6: 0,
    qubishu: 0,
    sangongli: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
      ],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
        50, 51, 52, 53, 54, 55, 56, 57, 58, 59
      ]
    ],
    sanshimi: [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40
      ],
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 0,

    qubi: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
      50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
      60, 61, 62, 63, 64, 65, 66, 67, 68, 69,
      70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
      80, 81, 82, 83, 84, 85, 86, 87, 88, 89,
      90, 91, 92, 93, 94, 95, 96, 97, 98, 99
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    input_code2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权input_c
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res.userInfo)
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
              console.log('授权成功')
            },
            fail(res) {
              console.log("授权失败", res)
            }
          })
        }
      }
    })
    if (wx.createInterstitialAd) {
      interstitialAd = wx.createInterstitialAd({
        adUnitId: 'adunit-c7a55c039d4ac75c'
      })
      interstitialAd.onLoad(() => {
        console.log('onLoad event emit')
      })
      interstitialAd.onError((err) => {
        console.log('onError event emit', err)
      })
      interstitialAd.onClose((res) => {
        console.log('onClose event emit', res)
      })
    }
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  onShow: function () {
    let that = this
    wx.cloud.database().collection('liuyanban').limit(10).orderBy('timevar', 'desc').get({
      success(res) {
        console.log("查询成功", res)
        console.log(res.data[0].xingbie)
        console.log(res.data[0].leibie)
        that.setData({
          datalist: res.data
        })
        if (res.data[0].xingbie == 0) {
          that.setData({
            chaxunxingbie: '男'
          })
        }
        if (res.data[0].xingbie == 1) {
          that.setData({
            chaxunxingbie: '女'
          })
        }
        if (res.data[0].leibie == 0) {
          that.setData({
            chaxunleibie: '一类人员'
          })
        }
        if (res.data[0].leibie == 1) {
          that.setData({
            chaxunleibie: '二类人员'
          })
        }
        if (res.data[0].leibie == 2) {
          that.setData({
            chaxunleibie: '三类人员'
          })
        }
      },
      fail(res) {
        console.log("查询失败", res)
      }
    })

  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  shurukuang(e) {
    input_code = e.detail.value;
    console.log("输入的内容", input_code);
    this.setData({
      input_code2: input_code
    })
  },
  qingkong() {
    input_code = "",
      console.log('已经清空,内容为', input_code)
  },




  bindGetUserInfo(e) {
    wx.cloud.callFunction({
      name: 'msgCheck',
      data: {
        content: input_code
        //传入我得到的文本内容
      }
    }).then(ckres => {
      console.log(ckres)
      //写审核通过之后的操作 if == 0
      if (ckres.result.errCode == 0) {
        console.log('检测没有敏感词！！！')

        // 这里是发表提交
        DB.add({
          data: {
            name: e.detail.userInfo.nickName,
            leibie: leibievar,
            nianling: age,
            shengao: heightvar,
            tizhong: weightvar,
            yinti: yintivar,
            fuwocheng: fuwochengvar,
            qubi: qubivar,
            yangwoqizuo: yangwoqizuovar,
            shexingpao: shexingpaovar,
            sangongli: sangonglivar,
            touxiang: e.detail.userInfo.avatarUrl,
            xingbie: sexindex,
            xingbiewx: e.detail.userInfo.gender,
            guojia: e.detail.userInfo.country,
            shengfen: e.detail.userInfo.province,
            chegnshi: e.detail.userInfo.city,
            timevar: String(new Date().getTime()),
            bjtimevar: String(new Date()),
            neirong: input_code,
          },
          success(res) {
            console.log("发表成功", res)
            wx.showToast({
              title: '发表成功',
              icon: 'success',
              duration: 2000,
            })

          },
          fail(res) {
            console.log("发表失败", res)
          }
        })
        console.log(e.detail.userInfo.nickName)
        console.log(e.detail.userInfo.avatarUrl)
        console.log(e.detail.userInfo.gender)
        console.log(e.detail.userInfo.province)
        console.log(e.detail.userInfo.city)
        console.log(e.detail.userInfo.country)
        console.log('已经发表')
        this.setData({
          input_code: ""
        })
        console.log('已经清空')
        setTimeout(function () {
          wx.reLaunch({
            url: '../liuyan/liuyan',
          })
        }, 2000)
        // 这里是发表提交
      } else {
        console.log('检测有很多很多敏感词！！！')
        wx.showModal({
          title: '留言失败',
          content: '检测到敏感词,请注意言论',
          showCancel: false
        })
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