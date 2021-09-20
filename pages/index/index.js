const app = getApp()
const DB = wx.cloud.database().collection("yonghuxinxi")
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
var dianzanshuvar = 0;



Page({

  data: {
    chaxunxingbie: '',
    dianzanshu: '',
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
      90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
      100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
      110, 111, 112, 113, 114, 115, 116, 117, 118, 119,
      120
    ],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    this.getdianzanshu()
    // 查看是否授权
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
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
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
      },
      success(res) {
        console.log("添加成功", res)
        wx.showToast({
          title: '保存成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail(res) {
        console.log("添加失败", res)
      }
    })
    console.log(e.detail.userInfo.nickName)
    console.log(e.detail.userInfo.avatarUrl)
    console.log(e.detail.userInfo.gender)
    console.log(e.detail.userInfo.province)
    console.log(e.detail.userInfo.city)
    console.log(e.detail.userInfo.country)
  },
  getdata(res) {
    let that = this
    wx.cloud.database().collection('yonghuxinxi').limit(1).orderBy('timevar', 'desc').get({
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
        wx.showToast({
          title: '显示最新的成绩',
          icon: 'success',
          duration: 2000
        })
      },
      fail(res) {
        console.log("查询失败", res)
      }
    })
  },




  onShareAppMessage: function () {
    return {
      title: '军事体育计算器',
      desc: '分享给好友使用吧！',

    }
  },
  handleContact(e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
  },
  // 点赞相关
  dianzan(e) {
    console.log("点赞了")
    let that = this
    wx.cloud.database().collection('yonghuxinxi').limit(1).orderBy('timevar', 'desc').get({
      success(res) {
        console.log("查询成功1", res.data[0].dianzan)
        DB.add({
          data: {
            dianzan: res.data[0].dianzan + 1,
            timevar: String(new Date().getTime()),
          }
        })
        console.log("上传了")
      }
    })
    // wx.cloud.database().collection('yonghuxinxi').limit(1).orderBy('timevar', 'desc').get({
    //   success(res) {
    //     console.log("查询成功2", res)
    //     console.log(res)
    //     console.log(res.data[0].dianzan)
    //       that.setData({
    //         dianzanshu:res.data[0].dianzan
    //       })
    //   }
    // })
    console.log("-----------------")
    this.getdianzanshu()

  },
  getdianzanshu(e) {
    let that = this
    wx.cloud.database().collection('yonghuxinxi').limit(1).orderBy('timevar', 'desc').get({
      success(res) {
        console.log("查询成功", res)
        console.log(res)
        console.log("res.data[0].dianzan", res.data[0].dianzan)
        that.setData({
          dianzanshu: res.data[0].dianzan
        })
        dianzanshuvar = res.data[0].dianzan
        console.log("dianzanshuvar", dianzanshuvar)
      }
    })
  },
  // 年龄输入
  ageinput(e) {
    console.log("age", e.detail.value);
    age = Number(e.detail.value)
    console.log(age);
    this.setData({
      agez: Number(e.detail.value),
      'appdata.nianling': e.detail.value //全局变量的用法
    })
    app.globalData.nianling = e.detail.value;
  },

  // 身高
  heightinput(e) {
    //console.log(age);
    heightvar = Number(e.detail.value)
    this.setData({
      height: Number(e.detail.value)
    })
  },
  // 体重
  weightinput(e) {
    //console.log(age);
    weightvar = Number(e.detail.value)
    this.setData({
      weight: Number(e.detail.value)
    })
  },


  handletap(e) {
    //console.log(e);
    const operation = e.currentTarget.dataset.operation;
    this.setData({
      age: this.data.age + Number(operation)
    })
  },
  bindPickerChangesex: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 性别选择
  pickChangesex: function (e) { //普通选择器
    var that = this
    let index = e.detail.value
    sexindex = e.detail.value
    // console.log("e", e)
    // console.log("index", index)
    // console.log("sexindex", sexindex)
    that.setData({ //点击后更新数据
      index: e.detail.value,
      'appdata.xingbie': e.detail.value //全局变量的用法
    })
    app.globalData.xingbie = e.detail.value;
    // console.log("index2", index)
    // console.log('picker发送选择改变，携带下标为' + e.detail.value)
  },
  // 人员类别
  pickChangepeople: function (e) { //普通选择器
    leibievar = e.detail.value
    var that = this
    index2 = e.detail.value
    // console.log(e)
    // console.log(index2)
    that.setData({ //点击后更新数据
      peopleindex: index2,
      'appdata.renyuanleibie': e.detail.value //全局变量的用法
    })
    app.globalData.renyuanleibie = e.detail.value; //全局变量的用法
    // console.log('picker发送选择改变，携带下标为' + e.detail.value)
  },




  //三公里
  bindsangongli: function (e) {
    console.log("shuchu", e.detail.value[0], e.detail.value[1])
    index7 = e.detail.value[0],
      index8 = e.detail.value[1],
      sangonglivar = e.detail.value[0] * 60 + e.detail.value[1],
      this.setData({
        index1: e.detail.value[0],
        index2: e.detail.value[1]
      })
    console.log("shuchu", index7, index8)
    time = (index7 * 60) + index8
    console.log(index7, index8, time)

    //男性三公里
    if (sexindex == 0) {
      if (age <= 24 && age >= 0) {
        if (time > 820) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 820 && time > 815) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 815 && time > 810) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 810 && time > 790) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 790 && time > 775) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        time = time - 12;
        if (time > 820) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 820 && time > 815) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 815 && time > 810) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 810 && time > 790) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 790 && time > 775) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        time = time - 48;
        if (time > 820) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 820 && time > 815) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 815 && time > 810) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 810 && time > 790) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 790 && time > 775) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (time > 900) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 900 && time > 895) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 895 && time > 884) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 884 && time > 874) {
          this.setData({
            sangonglichengjiz: 65
          })
        }
      }

      if (age >= 31 && age <= 33) {
        time = time - 84
        if (time <= 790 && time > 775) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (time > 940) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 940 && time > 935) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 935 && time > 930) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 930 && time > 925) {
          this.setData({
            sangonglichengjiz: 65
          })
        }
      }

      if (age >= 34 && age <= 36) {
        time = time - 120
        if (time <= 790 && time > 775) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (time > 960) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 960 && time > 955) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 955 && time > 950) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 950 && time > 945) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 945 && time > 931) {
          this.setData({
            sangonglichengjiz: 70
          })
        }
      }

      if (age >= 37 && age <= 39) {
        time = time - 156

        if (time <= 775 && time > 760) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 760 && time > 745) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 745 && time > 730) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 730 && time > 715) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 715 && time > 690) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 690) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (time > 1018) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1018 && time > 1013) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1013 && time > 1008) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1008 && time > 988) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 988 && time > 973) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 973 && time > 958) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 958 && time > 943) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 943 && time > 928) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 928 && time > 913) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 913 && time > 888) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 888) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((888 - time) / 5))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        time = time - 42
        if (time > 1018) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1018 && time > 1013) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1013 && time > 1008) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1008 && time > 988) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 988 && time > 973) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 973 && time > 958) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 958 && time > 943) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 943 && time > 928) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 928 && time > 913) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 913 && time > 888) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 888) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((888 - time) / 5))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        time = time - 84
        if (time > 1018) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1018 && time > 1013) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1013 && time > 1008) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1008 && time > 988) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 988 && time > 973) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 973 && time > 958) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 958 && time > 943) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 943 && time > 928) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 928 && time > 913) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 913 && time > 888) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 888) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((888 - time) / 5))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        if (time > 1144) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1144 && time > 1139) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1139 && time > 1134) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1134 && time > 1114) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1114 && time > 1099) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1099 && time > 1088) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1088 && time > 1069) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1069 && time > 1054) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1054 && time > 1039) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1039 && time > 1014) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1014) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1014 - time) / 5))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        time = time - 42
        if (time > 1144) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1144 && time > 1139) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1139 && time > 1134) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1134 && time > 1114) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1114 && time > 1099) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1099 && time > 1088) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1088 && time > 1069) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1069 && time > 1054) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1054 && time > 1039) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1039 && time > 1014) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1014) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1014 - time) / 5))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        time = time - 84
        if (time > 1144) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1144 && time > 1139) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1139 && time > 1134) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1134 && time > 1114) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1114 && time > 1099) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1099 && time > 1088) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1088 && time > 1069) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1069 && time > 1054) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1054 && time > 1039) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1039 && time > 1014) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1014) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1014 - time) / 5))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        time = time - 126
        if (time > 1144) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1144 && time > 1139) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1139 && time > 1134) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1134 && time > 1114) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1114 && time > 1099) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1099 && time > 1088) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1088 && time > 1069) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1069 && time > 1054) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1054 && time > 1039) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1039 && time > 1014) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1014) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1014 - time) / 5))
          })
        }
      }
    }
    //女性三公里
    if (sexindex == 1) {
      if (age <= 24 && age >= 0) {
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        if (time > 983) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 983 && time > 978) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 978 && time > 973) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 973 && time > 953) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 953 && time > 938) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 938 && time > 923) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 923 && time > 908) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 908 && time > 893) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 893 && time > 878) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 878 && time > 853) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 853) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((853 - time) / 5))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        if (time > 1022) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1022 && time > 1017) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1017 && time > 1012) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1012 && time > 992) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 992 && time > 977) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 977 && time > 962) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 962 && time > 947) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 947 && time > 932) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 932 && time > 917) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 917 && time > 892) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 892) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((892 - time) / 5))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (time > 1061) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1061 && time > 1056) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1056 && time > 1051) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1051 && time > 1031) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1031 && time > 1016) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1016 && time > 1001) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1001 && time > 986) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 986 && time > 971) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 971 && time > 956) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 956 && time > 931) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 931) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((931 - time) / 5))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (time > 1100) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1100 && time > 1095) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1095 && time > 1090) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1090 && time > 1070) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1070 && time > 1055) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1055 && time > 1040) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1040 && time > 1020) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1025 && time > 1010) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1010 && time > 995) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 995 && time > 970) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 970) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((690 - time) / 5))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (time > 1139) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1139 && time > 1134) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1134 && time > 1129) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1129 && time > 1109) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1109 && time > 1094) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1094 && time > 1079) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1079 && time > 1064) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1064 && time > 1049) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1049 && time > 1034) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1034 && time > 1009) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1009) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1009 - time) / 5))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (time > 1178) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1178 && time > 1173) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1173 && time > 1168) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1168 && time > 1148) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1148 && time > 1133) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1133 && time > 1118) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1118 && time > 1103) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1103 && time > 1088) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1088 && time > 1073) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1073 && time > 1048) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1048) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1048 - time) / 5))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        if (time > 1217) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 1217 && time > 1212) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 1212 && time > 1207) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 1207 && time > 1187) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 1187 && time > 1172) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 1172 && time > 1157) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 1157 && time > 1142) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 1142 && time > 1127) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 1127 && time > 1112) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 1112 && time > 1087) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 1087) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((1087 - time) / 5))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        time = time - 286
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        time = time - 325
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        time = time - 364
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        time = time - 403
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        time = time - 442
        if (time > 970) {
          this.setData({
            sangonglichengjiz: 0
          })
        }

        if (time <= 970 && time > 965) {
          this.setData({
            sangonglichengjiz: 55
          })
        }

        if (time <= 965 && time > 960) {
          this.setData({
            sangonglichengjiz: 60
          })
        }

        if (time <= 960 && time > 940) {
          this.setData({
            sangonglichengjiz: 65
          })
        }

        if (time <= 940 && time > 925) {
          this.setData({
            sangonglichengjiz: 70
          })
        }

        if (time <= 925 && time > 910) {
          this.setData({
            sangonglichengjiz: 75
          })
        }

        if (time <= 910 && time > 895) {
          this.setData({
            sangonglichengjiz: 80
          })
        }

        if (time <= 895 && time > 880) {
          this.setData({
            sangonglichengjiz: 85
          })
        }

        if (time <= 880 && time > 865) {
          this.setData({
            sangonglichengjiz: 90
          })
        }

        if (time <= 865 && time > 840) {
          this.setData({
            sangonglichengjiz: 95
          })
        }

        if (time <= 840) {
          this.setData({
            sangonglichengjiz: parseInt(100 + ((840 - time) / 5))
          })
        }
      }
    }
  },
  // 30米蛇形跑
  bindsanshimi: function (e) {
    console.log("shuchu", e.detail.value[0], e.detail.value[1])
    index3 = e.detail.value[0],
      index4 = e.detail.value[1],
      shexingpaovar = e.detail.value[0] + e.detail.value[1] * 0.1,
      this.setData({
        index5: e.detail.value[0],
        index6: e.detail.value[1]
      })
    console.log("shuchu", index3, index4)
    times = (index3 * 100) + (index4 * 10);
    console.log(times)

    //男性蛇形跑
    if (sexindex == 0) {
      if (age <= 24 && age >= 0) {
        if (times > 2120) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2120 && times > 2040) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2040 && times > 2010) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2010 && times > 1990) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 1990 && times > 1970) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 1970 && times > 1950) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 1950 && times > 1920) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 1920 && times > 1900) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 1900 && times > 1870) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1870 && times > 1810) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1810) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1810 - times) / 10))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        if (times > 2150) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2150 && times > 2080) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2080 && times > 2040) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2040 && times > 2020) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2020 && times > 2000) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2000 && times > 1980) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 1980 && times > 1950) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 1950 && times > 1930) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 1930 && times > 1890) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1890 && times > 1830) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1830) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1830 - times) / 10))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        if (times > 2190) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2190 && times > 2110) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2110 && times > 2070) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2070 && times > 2040) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2040 && times > 2020) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2020 && times > 2000) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2000 && times > 1970) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 1970 && times > 1950) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 1950 && times > 1910) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1910 && times > 1850) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1850) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1850 - times) / 10))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (times > 2220) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2220 && times > 2130) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2130 && times > 2110) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2110 && times > 2070) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2070 && times > 2030) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2030 && times > 2010) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2010 && times > 1990) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 1990 && times > 1970) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 1970 && times > 1930) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1930 && times > 1870) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1870) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1870 - times) / 10))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (times > 2260) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2260 && times > 2170) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2170 && times > 2130) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2130 && times > 2090) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2090 && times > 2050) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2050 && times > 2020) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2020 && times > 2010) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2010 && times > 1990) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 1990 && times > 1950) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1950 && times > 1890) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1890) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1890 - times) / 10))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (times > 2270) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2270 && times > 2180) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2180 && times > 2140) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2140 && times > 2110) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2110 && times > 2080) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2080 && times > 2050) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2050 && times > 2020) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2020 && times > 2010) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2010 && times > 1980) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 1980 && times > 1910) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1910) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1910 - times) / 10))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (times > 2290) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2290 && times > 2230) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2230 && times > 2160) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2160 && times > 2120) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2120 && times > 2100) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2100 && times > 2060) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2060 && times > 2040) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2040 && times > 2020) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2020 && times > 2000) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2000 && times > 1930) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1930) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1930 - times) / 10))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        if (times > 2330) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2330 && times > 2240) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2240 && times > 2180) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2180 && times > 2150) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2150 && times > 2130) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2130 && times > 2070) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2070 && times > 2060) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2060 && times > 2040) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2040 && times > 2020) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2020 && times > 1950) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1950) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1950 - times) / 10))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        if (times > 2390) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2390 && times > 2260) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2260 && times > 2220) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2220 && times > 2170) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2170 && times > 2150) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2150 && times > 2090) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2090 && times > 2080) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2080 && times > 2060) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2060 && times > 2040) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2040 && times > 1970) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1970) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1970 - times) / 10))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        if (times > 2400) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2400 && times > 2280) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2280 && times > 2240) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2240 && times > 2180) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2180 && times > 2170) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2170 && times > 2130) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2130 && times > 2110) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2110 && times > 2090) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2090 && times > 2070) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2070 && times > 1990) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 1990) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((1990 - times) / 10))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        if (times > 2450) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2450 && times > 2340) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2340 && times > 2280) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2280 && times > 2220) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2220 && times > 2200) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2200 && times > 2170) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2170 && times > 2140) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2140 && times > 2110) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2110 && times > 2090) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2090 && times > 2060) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2060) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2060 - times) / 10))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        if (times > 2480) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2480 && times > 2380) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2380 && times > 2350) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2350 && times > 2330) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2330 && times > 2250) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2250 && times > 2220) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2220 && times > 2200) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2200 && times > 2150) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2150 && times > 2130) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2130 && times > 2110) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2110) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2110 - times) / 10))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        if (times > 2540) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2540 && times > 2450) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2450 && times > 2400) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2400 && times > 2370) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2370 && times > 2300) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2300 && times > 2270) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2270 && times > 2230) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2230 && times > 2200) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2200 && times > 2170) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2170 && times > 2130) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2130) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2130 - times) / 10))
          })
        }
      }
    }
    //女性蛇形跑
    if (sexindex == 1) {
      if (age <= 24 && age >= 0) {
        if (times > 2260) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2260 && times > 2220) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2220 && times > 2190) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2190 && times > 2170) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2170 && times > 2160) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2160 && times > 2130) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2130 && times > 2110) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2110 && times > 2090) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2090 && times > 2040) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2040 && times > 2000) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2000) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2000 - times) / 10))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        if (times > 2290) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2290 && times > 2250) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2250 && times > 2220) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2220 && times > 2200) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2200 && times > 2190) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2190 && times > 2160) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2160 && times > 2140) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2140 && times > 2120) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2120 && times > 2070) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2070 && times > 2030) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2030) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2030 - times) / 10))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        if (times > 2320) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2320 && times > 2280) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2280 && times > 2250) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2250 && times > 2230) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2230 && times > 2220) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2220 && times > 2190) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2190 && times > 2170) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2170 && times > 2150) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2150 && times > 2100) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2100 && times > 2060) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2060) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2060 - times) / 10))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (times > 2350) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2350 && times > 2310) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2310 && times > 2280) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2280 && times > 2260) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2260 && times > 2250) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2250 && times > 2220) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2220 && times > 2200) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2200 && times > 2180) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2180 && times > 2130) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2130 && times > 2090) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2090) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2090 - times) / 10))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (times > 2380) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2380 && times > 2340) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2340 && times > 2310) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2310 && times > 2290) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2290 && times > 2280) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2280 && times > 2250) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2250 && times > 2230) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2230 && times > 2210) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2210 && times > 2160) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2160 && times > 2120) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2120) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2120 - times) / 10))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (times > 2410) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2410 && times > 2370) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2370 && times > 2340) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2340 && times > 2320) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2320 && times > 2310) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2310 && times > 2280) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2280 && times > 2260) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2260 && times > 2240) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2240 && times > 2190) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2190 && times > 2150) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2150) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2150 - times) / 10))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (times > 2240) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2440 && times > 2400) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2400 && times > 2370) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2370 && times > 2350) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2350 && times > 2340) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2340 && times > 2310) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2310 && times > 2290) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2290 && times > 2270) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2270 && times > 2220) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2220 && times > 2180) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2180) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2180 - times) / 10))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        if (times > 2470) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2470 && times > 2430) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2430 && times > 2400) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2400 && times > 2380) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2380 && times > 2370) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2370 && times > 2340) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2340 && times > 2320) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2320 && times > 2300) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2300 && times > 2250) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2250 && times > 2210) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2210) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2210 - times) / 10))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        if (times > 2500) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2500 && times > 2460) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2460 && times > 2430) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2430 && times > 2410) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2410 && times > 2400) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2400 && times > 2370) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2370 && times > 2350) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2350 && times > 2330) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2330 && times > 2280) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2280 && times > 2240) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2240) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2240 - times) / 10))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        if (times > 2530) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2530 && times > 2490) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2490 && times > 2460) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2460 && times > 2440) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2440 && times > 2430) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2430 && times > 2400) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2400 && times > 2380) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2380 && times > 2360) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2360 && times > 2310) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2310 && times > 2270) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2270) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2270 - times) / 10))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        if (times > 2560) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2560 && times > 2520) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2520 && times > 2490) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2490 && times > 2470) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2470 && times > 2460) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2460 && times > 2430) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2430 && times > 2410) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2410 && times > 2390) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2390 && times > 2340) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2340 && times > 2300) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2300) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2300 - times) / 10))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        if (times > 2590) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2590 && times > 2550) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2550 && times > 2520) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2520 && times > 2550) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2550 && times > 2490) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2490 && times > 2460) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2460 && times > 2440) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2440 && times > 2420) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2420 && times > 2370) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2370 && times > 2330) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2330) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2330 - times) / 10))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        if (times > 2620) {
          this.setData({
            sanshimichengjiz: 0
          })
        }

        if (times <= 2620 && times > 2580) {
          this.setData({
            sanshimichengjiz: 55
          })
        }

        if (times <= 2580 && times > 2550) {
          this.setData({
            sanshimichengjiz: 60
          })
        }

        if (times <= 2550 && times > 2530) {
          this.setData({
            sanshimichengjiz: 65
          })
        }

        if (times <= 2530 && times > 2520) {
          this.setData({
            sanshimichengjiz: 70
          })
        }

        if (times <= 2520 && times > 2490) {
          this.setData({
            sanshimichengjiz: 75
          })
        }

        if (times <= 2490 && times > 2470) {
          this.setData({
            sanshimichengjiz: 80
          })
        }

        if (times <= 2470 && times > 2450) {
          this.setData({
            sanshimichengjiz: 85
          })
        }

        if (times <= 2450 && times > 2400) {
          this.setData({
            sanshimichengjiz: 90
          })
        }

        if (times <= 2400 && times > 2360) {
          this.setData({
            sanshimichengjiz: 95
          })
        }

        if (times <= 2360) {
          this.setData({
            sanshimichengjiz: parseInt(100 + ((2360 - times) / 10))
          })
        }
      }
    }
  },



  //仰卧起坐
  yangwoqizuoinput(e) {
    console.log(e.detail.value);
    yangwoqizuovar = Number(e.detail.value)
    yangwoqizuo = Number(e.detail.value);
    console.log(yangwoqizuo);
    //男性仰卧起坐
    if (sexindex == 0) {
      if (age <= 24 && age >= 0) {
        if (yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 58) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 58 && yangwoqizuo < 62) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 62 && yangwoqizuo < 67) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 67 && yangwoqizuo < 72) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 72 && yangwoqizuo < 77) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 77 && yangwoqizuo < 82) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 82 && yangwoqizuo < 87) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 87) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 87) / 2))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        if (yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 55) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 55 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 63) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 63 && yangwoqizuo < 67) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 67 && yangwoqizuo < 72) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 72 && yangwoqizuo < 77) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 77 && yangwoqizuo < 82) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 82) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 82) / 2))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        if (yangwoqizuo < 41) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 41 && yangwoqizuo < 45) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 45 && yangwoqizuo < 49) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 49 && yangwoqizuo < 53) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 53 && yangwoqizuo < 57) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 57 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 61 && yangwoqizuo < 65) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 65 && yangwoqizuo < 70) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 70 && yangwoqizuo < 75) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 75 && yangwoqizuo < 80) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 80) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 80) / 2))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 55) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 55 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 63) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 63 && yangwoqizuo < 68) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 68 && yangwoqizuo < 73) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 73 && yangwoqizuo < 78) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 78) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 78) / 2))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 55) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 55 && yangwoqizuo < 60) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 60 && yangwoqizuo < 65) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 65 && yangwoqizuo < 70) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 70 && yangwoqizuo < 75) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 75) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 75) / 2))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (yangwoqizuo < 30) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 30 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 40) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 40 && yangwoqizuo < 45) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 45 && yangwoqizuo < 49) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 49 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 64) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 64 && yangwoqizuo < 69) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 69 && yangwoqizuo < 74) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 74) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 74) / 2))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (yangwoqizuo < 28) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 28 && yangwoqizuo < 33) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 33 && yangwoqizuo < 38) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 38 && yangwoqizuo < 41) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 41 && yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 61 && yangwoqizuo < 66) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 66 && yangwoqizuo < 71) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 71) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 71) / 2))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        if (yangwoqizuo < 25) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 25 && yangwoqizuo < 30) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 30 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 44) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 44 && yangwoqizuo < 49) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 49 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 64) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 64 && yangwoqizuo < 69) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 69) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 69) / 2))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        if (yangwoqizuo < 23) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 23 && yangwoqizuo < 28) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 28 && yangwoqizuo < 33) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 33 && yangwoqizuo < 37) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 37 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 61 && yangwoqizuo < 66) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 66) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 66) / 2))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        if (yangwoqizuo < 21) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 21 && yangwoqizuo < 26) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 26 && yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 44) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 44 && yangwoqizuo < 48) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 48 && yangwoqizuo < 53) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 53 && yangwoqizuo < 58) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 58 && yangwoqizuo < 63) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 63) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 63) / 2))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        if (yangwoqizuo < 19) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 19 && yangwoqizuo < 24) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 24 && yangwoqizuo < 29) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 29 && yangwoqizuo < 33) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 33 && yangwoqizuo < 37) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 37 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 61) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 61) / 2))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        if (yangwoqizuo < 17) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 17 && yangwoqizuo < 22) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 22 && yangwoqizuo < 26) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 26 && yangwoqizuo < 31) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 31 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 44) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 44 && yangwoqizuo < 49) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 49 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 59) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 59) / 2))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        if (yangwoqizuo < 15) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 15 && yangwoqizuo < 17) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 17 && yangwoqizuo < 22) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 22 && yangwoqizuo < 27) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 27 && yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 37) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 37 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 52) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 52 && yangwoqizuo < 57) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 57) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 57) / 2))
          })
        }
      }
    }
    //女性仰卧起坐
    if (sexindex == 1) {
      if (age <= 24 && age >= 0) {
        if (yangwoqizuo < 41) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 41 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 53) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 53 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 62) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 62 && yangwoqizuo < 65) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 65 && yangwoqizuo < 68) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 68 && yangwoqizuo < 71) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 71) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 71) / 2))
          })
        }
      }

      if (age >= 25 && age <= 27) {
        if (yangwoqizuo < 38) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 38 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 40) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 40 && yangwoqizuo < 48) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 48 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 57) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 57 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 61 && yangwoqizuo < 65) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 65 && yangwoqizuo < 69) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 69) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 69) / 2))
          })
        }
      }

      if (age >= 28 && age <= 30) {
        if (yangwoqizuo < 36) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 36 && yangwoqizuo < 37) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 37 && yangwoqizuo < 38) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 38 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 53) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 53 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 59 && yangwoqizuo < 63) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 63 && yangwoqizuo < 67) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 67) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 67) / 2))
          })
        }
      }

      if (age >= 31 && age <= 33) {
        if (yangwoqizuo < 34) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 34 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 36) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 36 && yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 58) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 58 && yangwoqizuo < 62) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 62 && yangwoqizuo < 66) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 66) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 66) / 2))
          })
        }
      }

      if (age >= 34 && age <= 36) {
        if (yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 33) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 33 && yangwoqizuo < 34) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 34 && yangwoqizuo < 40) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 40 && yangwoqizuo < 44) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 44 && yangwoqizuo < 48) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 48 && yangwoqizuo < 52) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 52 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 60) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 60 && yangwoqizuo < 64) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 64) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 64) / 2))
          })
        }
      }

      if (age >= 37 && age <= 39) {
        if (yangwoqizuo < 29) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 29 && yangwoqizuo < 31) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 31 && yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 38) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 38 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 54) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 54 && yangwoqizuo < 58) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 58 && yangwoqizuo < 63) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 63) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 63) / 2))
          })
        }
      }

      if (age >= 40 && age <= 42) {
        if (yangwoqizuo < 27) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 27 && yangwoqizuo < 29) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 29 && yangwoqizuo < 30) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 30 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 43) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 43 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 52) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 52 && yangwoqizuo < 57) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 57 && yangwoqizuo < 62) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 62) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 62) / 2))
          })
        }
      }

      if (age >= 43 && age <= 45) {
        if (yangwoqizuo < 24) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 24 && yangwoqizuo < 27) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 27 && yangwoqizuo < 28) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 28 && yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 36) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 36 && yangwoqizuo < 41) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 41 && yangwoqizuo < 46) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 46 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 56 && yangwoqizuo < 61) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 61) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 61) / 2))
          })
        }
      }

      if (age >= 46 && age <= 48) {
        if (yangwoqizuo < 22) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 22 && yangwoqizuo < 25) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 25 && yangwoqizuo < 26) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 26 && yangwoqizuo < 30) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 30 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 40) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 40 && yangwoqizuo < 45) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 45 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 55) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 55 && yangwoqizuo < 60) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 60) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 60) / 2))
          })
        }
      }

      if (age >= 49 && age <= 51) {
        if (yangwoqizuo < 19) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 19 && yangwoqizuo < 23) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 23 && yangwoqizuo < 24) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 24 && yangwoqizuo < 28) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 28 && yangwoqizuo < 33) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 33 && yangwoqizuo < 37) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 37 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 47) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 47 && yangwoqizuo < 53) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 53 && yangwoqizuo < 59) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 59) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 59) / 2))
          })
        }
      }

      if (age >= 52 && age <= 54) {
        if (yangwoqizuo < 17) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 17 && yangwoqizuo < 21) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 21 && yangwoqizuo < 22) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 22 && yangwoqizuo < 25) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 25 && yangwoqizuo < 29) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 29 && yangwoqizuo < 34) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 34 && yangwoqizuo < 39) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 39 && yangwoqizuo < 45) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 45 && yangwoqizuo < 51) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 51 && yangwoqizuo < 57) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 57) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 57) / 2))
          })
        }
      }

      if (age >= 55 && age <= 57) {
        if (yangwoqizuo < 15) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 15 && yangwoqizuo < 19) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 19 && yangwoqizuo < 20) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 20 && yangwoqizuo < 23) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 23 && yangwoqizuo < 26) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 26 && yangwoqizuo < 32) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 32 && yangwoqizuo < 38) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 38 && yangwoqizuo < 44) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 44 && yangwoqizuo < 50) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 50 && yangwoqizuo < 56) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 56) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 56) / 2))
          })
        }
      }

      if (age >= 58 && age <= 60) {
        if (yangwoqizuo < 13) {
          this.setData({
            yangwoqizuochengjiz: 0
          })
        }

        if (yangwoqizuo >= 13 && yangwoqizuo < 17) {
          this.setData({
            yangwoqizuochengjiz: 55
          })
        }

        if (yangwoqizuo >= 17 && yangwoqizuo < 18) {
          this.setData({
            yangwoqizuochengjiz: 60
          })
        }

        if (yangwoqizuo >= 18 && yangwoqizuo < 20) {
          this.setData({
            yangwoqizuochengjiz: 65
          })
        }

        if (yangwoqizuo >= 20 && yangwoqizuo < 23) {
          this.setData({
            yangwoqizuochengjiz: 70
          })
        }

        if (yangwoqizuo >= 23 && yangwoqizuo < 30) {
          this.setData({
            yangwoqizuochengjiz: 75
          })
        }

        if (yangwoqizuo >= 30 && yangwoqizuo < 35) {
          this.setData({
            yangwoqizuochengjiz: 80
          })
        }

        if (yangwoqizuo >= 35 && yangwoqizuo < 42) {
          this.setData({
            yangwoqizuochengjiz: 85
          })
        }

        if (yangwoqizuo >= 42 && yangwoqizuo < 48) {
          this.setData({
            yangwoqizuochengjiz: 90
          })
        }

        if (yangwoqizuo >= 48 && yangwoqizuo < 55) {
          this.setData({
            yangwoqizuochengjiz: 95
          })
        }
        if (yangwoqizuo >= 55) {
          this.setData({
            yangwoqizuochengjiz: parseInt(100 + ((yangwoqizuo - 55) / 2))
          })
        }
      }
    }
  },





  // 男的引体向上和俯卧撑
  yintiinput(e) {
    console.log("yinti", e.detail.value);
    yinti = Number(e.detail.value)
    if (age < 40) {
      yintivar = Number(e.detail.value);
      fuwochengvar = 0;
    }
    if (age >= 40) {
      yintivar = 0;
      fuwochengvar = Number(e.detail.value);
    }
    console.log(yinti)

    if (sexindex == 0) {
      //男的引体
      // 24岁引体成绩计算
      if (age <= 24) {
        if (yinti < 10) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 15 && yinti < 18) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 18 && yinti < 21) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 21 && yinti < 24) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 24 && yinti < 27) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 27 && yinti < 30) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 30) {
          this.setData({
            yintichengjiz: 100 + yinti - 30
          })
        }



      }
      // 25-27岁引体成绩计算
      if (age >= 25 && age <= 27) {
        if (yinti < 9) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 11 && yinti < 13) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 13 && yinti < 14) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 14 && yinti < 16) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 16 && yinti < 19) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 19 && yinti < 22) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 22 && yinti < 25) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 25 && yinti < 28) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 28) {
          this.setData({
            yintichengjiz: 100 + yinti - 28
          })
        }



      }
      // 28-30岁引体成绩计算
      if (age >= 28 && age <= 30) {
        if (yinti < 8) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 8 && yinti < 9) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 14 && yinti < 17) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 17 && yinti < 20) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 20 && yinti < 23) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 23 && yinti < 26) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 26) {
          this.setData({
            yintichengjiz: 100 + yinti - 26
          })
        }



      }
      // 31-33岁引体成绩计算
      if (age >= 31 && age <= 33) {
        if (yinti < 7) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 7 && yinti < 8) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 8 && yinti < 9) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 11 && yinti < 13) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 13 && yinti < 15) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 15 && yinti < 17) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 17 && yinti < 20) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 20 && yinti < 23) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 23) {
          this.setData({
            yintichengjiz: 100 + yinti - 23
          })
        }



      }
      // 34-36岁引体成绩计算
      if (age >= 34 && age <= 36) {
        if (yinti < 6) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 6 && yinti < 7) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 7 && yinti < 8) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 8 && yinti < 9) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 14 && yinti < 17) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 17 && yinti < 20) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 20) {
          this.setData({
            yintichengjiz: 100 + yinti - 20
          })
        }



      }
      // 37-39岁引体成绩计算
      if (age >= 37 && age <= 39) {
        if (yinti < 5) {
          this.setData({
            yintichengjiz: 0
          })
        }
        if (yinti >= 5 && yinti < 6) {
          this.setData({
            yintichengjiz: 55
          })
        }
        if (yinti >= 6 && yinti < 7) {
          this.setData({
            yintichengjiz: 60
          })
        }
        if (yinti >= 7 && yinti < 8) {
          this.setData({
            yintichengjiz: 65
          })
        }
        if (yinti >= 8 && yinti < 9) {
          this.setData({
            yintichengjiz: 70
          })
        }
        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 75
          })
        }
        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 80
          })
        }
        if (yinti >= 11 && yinti < 13) {
          this.setData({
            yintichengjiz: 85
          })
        }
        if (yinti >= 13 && yinti < 15) {
          this.setData({
            yintichengjiz: 90
          })
        }
        if (yinti >= 15 && yinti < 17) {
          this.setData({
            yintichengjiz: 95
          })
        }
        if (yinti >= 17) {
          this.setData({
            yintichengjiz: 100 + yinti - 17
          })
        }



      }

      //40岁以上男的俯卧撑
      if (age >= 40 && age <= 42) {
        if (yinti < 27) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 27) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 28) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 29 && yinti <= 33) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 34 && yinti <= 38) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 39 && yinti <= 44) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 45 && yinti <= 50) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 51 && yinti <= 56) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 57 && yinti <= 64) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 65 && yinti <= 72) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 73) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 73) / 2))
          })
        }

      }

      if (age >= 43 && age <= 45) {
        if (yinti < 26) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 26) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 27) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 28 && yinti <= 30) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 31 && yinti <= 36) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 37 && yinti <= 42) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 43 && yinti <= 48) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 49 && yinti <= 54) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 55 && yinti <= 61) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 62 && yinti <= 68) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 69) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 69) / 2))
          })
        }

      }

      if (age >= 46 && age <= 48) {
        if (yinti < 23) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 23) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 24) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 25 && yinti < 30) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 30 && yinti < 36) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 36 && yinti < 42) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 42 && yinti < 48) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 48 && yinti < 54) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 54 && yinti < 61) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 61 && yinti < 68) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 68) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 68) / 2))
          })
        }

      }

      if (age >= 49 && age <= 51) {
        if (yinti < 21) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 21) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 22) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 23 && yinti < 28) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 28 && yinti < 34) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 34 && yinti < 40) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 40 && yinti < 46) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 46 && yinti < 52) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 52 && yinti < 59) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 59 && yinti < 66) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 66) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 66) / 2))
          })
        }

      }

      if (age >= 52 && age <= 54) {
        if (yinti < 18) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 18) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 19) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 20 && yinti < 26) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 26 && yinti < 32) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 32 && yinti < 38) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 38 && yinti < 44) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 44 && yinti < 51) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 51 && yinti < 58) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 58 && yinti < 65) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 65) {
          this.setData({
            yintichengjiz: (100 + parseInt(((yinti - 65) / 2)))
          })
        }

      }

      if (age >= 55 && age <= 57) {
        if (yinti < 16) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 16) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 17) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 18 && yinti < 24) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 24 && yinti < 30) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 30 && yinti < 36) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 36 && yinti < 42) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 42 && yinti < 48) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 48 && yinti < 55) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 55 && yinti < 62) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 62) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 62) / 2))
          })
        }

      }

      if (age >= 58 && age <= 60) {
        if (yinti < 10) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 10) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 11) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 12 && yinti < 15) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 15 && yinti < 20) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 20 && yinti < 25) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 25 && yinti < 29) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 29 && yinti < 34) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 34 && yinti < 39) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 39 && yinti < 44) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 44) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 44) / 2))
          })
        }


      }
    }
    //性别是女的时候
    if (sexindex == 1) {
      //女的引体40以下不引体

      //40岁以上女的俯卧撑
      if (age >= 40 && age <= 42) {
        if (yinti < 13) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 13) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 14) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 17 && yinti < 19) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 19 && yinti < 21) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 21 && yinti < 24) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 24 && yinti < 27) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 27 && yinti < 30) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 30) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 30) / 2))
          })
        }

      }

      if (age >= 43 && age <= 45) {
        if (yinti < 11) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 11) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 12) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 13 && yinti < 15) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 17 && yinti < 19) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 19 && yinti < 21) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 21 && yinti < 24) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 24 && yinti < 27) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 27) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 27) / 2))
          })
        }

      }

      if (age >= 46 && age <= 48) {
        if (yinti < 11) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 11) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 12) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 13 && yinti < 14) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 17 && yinti < 19) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 19 && yinti < 21) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 21 && yinti < 24) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 24) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 24) / 2))
          })
        }

      }

      if (age >= 49 && age <= 51) {
        if (yinti < 9) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 9) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 10) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 17 && yinti < 19) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 19 && yinti < 21) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 21) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 21) / 2))
          })
        }

      }

      if (age >= 52 && age <= 54) {
        if (yinti < 8) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 8) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 9) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 17 && yinti < 19) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 19) {
          this.setData({
            yintichengjiz: (100 + parseInt(((yinti - 19) / 2)))
          })
        }

      }

      if (age >= 55 && age <= 57) {
        if (yinti < 7) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 7) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 8) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 9 && yinti < 10) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 16 && yinti < 17) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 17) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 17) / 2))
          })
        }

      }

      if (age >= 58 && age <= 60) {
        if (yinti < 3) {
          this.setData({
            yintichengjiz: 0
          })
        }

        if (yinti == 3) {
          this.setData({
            yintichengjiz: 55
          })
        }

        if (yinti == 4) {
          this.setData({
            yintichengjiz: 60
          })
        }

        if (yinti >= 5 && yinti < 7) {
          this.setData({
            yintichengjiz: 65
          })
        }

        if (yinti >= 7 && yinti < 10) {
          this.setData({
            yintichengjiz: 70
          })
        }

        if (yinti >= 10 && yinti < 11) {
          this.setData({
            yintichengjiz: 75
          })
        }

        if (yinti >= 11 && yinti < 12) {
          this.setData({
            yintichengjiz: 80
          })
        }

        if (yinti >= 12 && yinti < 14) {
          this.setData({
            yintichengjiz: 85
          })
        }

        if (yinti >= 14 && yinti < 15) {
          this.setData({
            yintichengjiz: 90
          })
        }

        if (yinti >= 15 && yinti < 16) {
          this.setData({
            yintichengjiz: 95
          })
        }

        if (yinti >= 16) {
          this.setData({
            yintichengjiz: parseInt(100 + ((yinti - 16) / 2))
          })
        }


      }
    }


  },

  //女的曲臂悬垂
  pickqubi(e) {
    console.log("e", e.detail.value);
    qubivar = Number(e.detail.value);
    qubiindex = Number(e.detail.value);
    console.log("qibiindex", qubiindex);
    qubishu = qubiindex
    console.log("qubishu", qubishu);
    this.setData({
      qubishu: qubishu
    })
    if (sexindex == 1) {
      // 24岁曲臂成绩计算
      if (age <= 24) {
        if (qubiindex < 30) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 30 && qubiindex < 36) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 36 && qubiindex < 42) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 42 && qubiindex < 46) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 46 && qubiindex < 50) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 50 && qubiindex < 54) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 54 && qubiindex < 58) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 58 && qubiindex < 62) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 62 && qubiindex < 66) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 66 && qubiindex < 70) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 70) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 70) / 5)
          })
        }
      }
      // 25-27岁曲臂成绩计算
      if (age >= 25 && age <= 27) {
        if (qubiindex < 29) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 29 && qubiindex < 35) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 35 && qubiindex < 39) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 39 && qubiindex < 43) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 43 && qubiindex < 47) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 47 && qubiindex < 51) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 51 && qubiindex < 55) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 55 && qubiindex < 59) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 59 && qubiindex < 62) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 62 && qubiindex < 65) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 65) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 65) / 5)
          })
        }
      }
      // 28-30岁曲臂成绩计算
      if (age >= 28 && age <= 30) {
        if (qubiindex < 27) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 27 && qubiindex < 33) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 33 && qubiindex < 37) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 37 && qubiindex < 41) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 41 && qubiindex < 45) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 45 && qubiindex < 49) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 49 && qubiindex < 53) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 53 && qubiindex < 57) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 57 && qubiindex < 60) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 60 && qubiindex < 63) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 63) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 63) / 5)
          })
        }
      }
      // 31-33岁曲臂成绩计算
      if (age >= 31 && age <= 33) {
        if (qubiindex < 24) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 24 && qubiindex < 30) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 30 && qubiindex < 34) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 34 && qubiindex < 38) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 38 && qubiindex < 42) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 42 && qubiindex < 46) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 46 && qubiindex < 50) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 50 && qubiindex < 54) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 54 && qubiindex < 57) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 57 && qubiindex < 60) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 60) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 60) / 5)
          })
        }
      }
      // 34-36岁曲臂成绩计算
      if (age >= 34 && age <= 36) {
        if (qubiindex < 21) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 21 && qubiindex < 27) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 27 && qubiindex < 31) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 31 && qubiindex < 35) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 35 && qubiindex < 39) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 39 && qubiindex < 43) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 43 && qubiindex < 47) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 47 && qubiindex < 51) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 51 && qubiindex < 54) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 54 && qubiindex < 57) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 57) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 57) / 5)
          })
        }
      } // 37-39岁曲臂成绩计算
      if (age >= 37 && age <= 39) {
        if (qubiindex < 18) {
          this.setData({
            qubichengjiz: 0
          })
        }
        if (qubiindex >= 18 && qubiindex < 24) {
          this.setData({
            qubichengjiz: 55
          })
        }
        if (qubiindex >= 24 && qubiindex < 28) {
          this.setData({
            qubichengjiz: 60
          })
        }
        if (qubiindex >= 28 && qubiindex < 32) {
          this.setData({
            qubichengjiz: 65
          })
        }
        if (qubiindex >= 32 && qubiindex < 36) {
          this.setData({
            qubichengjiz: 70
          })
        }
        if (qubiindex >= 36 && qubiindex < 40) {
          this.setData({
            qubichengjiz: 75
          })
        }
        if (qubiindex >= 40 && qubiindex < 44) {
          this.setData({
            qubichengjiz: 80
          })
        }
        if (qubiindex >= 44 && qubiindex < 48) {
          this.setData({
            qubichengjiz: 85
          })
        }
        if (qubiindex >= 48 && qubiindex < 51) {
          this.setData({
            qubichengjiz: 90
          })
        }
        if (qubiindex >= 54 && qubiindex < 54) {
          this.setData({
            qubichengjiz: 95
          })
        }
        if (qubiindex >= 54) {
          this.setData({
            qubichengjiz: parseInt(100 + (qubiindex - 54) / 5)
          })
        }
      }

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