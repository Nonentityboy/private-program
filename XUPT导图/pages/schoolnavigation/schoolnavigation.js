var app = getApp()
var destination = getApp().globalData.destination;
var long = getApp().globalData.long;
var lati = getApp().globalData.lati;
Page({
  data: {
    long: "",
    lati: "",
    openBottomPicker: false,
    markers: [],
    controls: [{
        id: 1,
        iconPath: "/imgs/news.png",
        position: {
          left: 10,
          top: 55 - 50,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: "/imgs/warn.png",
        position: {
          left: 10,
          top: 100 - 50,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 3,
        iconPath: "/imgs/school.png",
        position: {
          left: 320,
          top: 50 - 50,
          width: 50,
          height: 50
        },
        clickable: false
      },
      {
        id: 4,
        iconPath: "/imgs/EPI.png",
        position: {
          left: 320,
          top: 100 - 50,
          width: 50,
          height: 50
        },
        clickable: false
      },
    ],
    tab: [{
      id: 1,
      title: "地图"
    }, {
      id: 2,
      title: "餐饮"
    }, {
      id: 3,
      title: "住宿"
    }, {
      id: 4,
      title: "出行"
    }, {
      id: 5,
      title: "学习"
    }, {
      id: 6,
      title: "校园服务"
    }]
  },

  onLoad: function() {
    var _this = this;
    wx.getSystemInfo({
      success: function(res) {
        var _innerWidth = res.windowWidth
        _this.data.controls.forEach(function(item) {
          item.position.left = (item.position.left / 375) * _innerWidth
          item.position.top = (item.position.top / 375) * _innerWidth
          item.position.width = (item.position.width / 375) * _innerWidth
          item.position.height = (item.position.height / 375) * _innerWidth
        })
        _this.setData({
          controls: _this.data.controls
        })
      }
    })
    // this.mapCtx = wx.createMapContext('map')

    var t = {
      currentTarget: {
        dataset: {
          id: 1
        }
      }
    };
    //console.log(t);
    this.Showmarker(t);
  },
  Showmarker: function(t) {
    var innerMap = [{
      id: 100,
      latitude: 34.153650,
      longitude: 108.902299,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "西安邮电大学",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#0066ff",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    }]
    var eat = [{
        id: 201,
        latitude: 34.151480,
        longitude: 108.898534,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "美食广场",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 202,
        latitude: 34.150192,
        longitude: 108.900293,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "旭日苑",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 203,
        latitude: 34.152905,
        longitude: 108.905765,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "东升苑",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 204,
        latitude: 34.149970,
        longitude: 108.899783,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "蜜雪冰城",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
    ]
    var house = [{
        id: 301,
        latitude: 34.149957,
        longitude: 108.898823,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "长治公寓",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 302,
        latitude: 34.149912,
        longitude: 108.901591,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "长思公寓",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 303,
        latitude: 34.154920,
        longitude: 108.906747,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "安美公寓",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 304,
        latitude: 34.153690,
        longitude: 108.906747,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "安悦公寓",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 305,
        latitude: 34.151657,
        longitude: 108.905336,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "家属区",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
    ]
    var car = [{
        id: 401,
        latitude: 34.157575,
        longitude: 108.902106,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "166",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 402,
        latitude: 34.157675,
        longitude: 108.903106,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "268",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 403,
        latitude: 34.157535,
        longitude: 108.902936,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "321",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }

      },
      {
        id: 404,
        latitude: 34.157705,
        longitude: 108.902276,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "4-07",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 405,
        latitude: 34.157905,
        longitude: 108.902076,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "4-08",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 406,
        latitude: 34.157505,
        longitude: 108.902576,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "600/K600",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 407,
        latitude: 34.157305,
        longitude: 108.902876,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "616/K616",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 408,
        latitude: 34.1535779,
        longitude: 108.903801,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "游9路",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      }
    ]
    var learn = [{
        id: 501,
        latitude: 34.156030,
        longitude: 108.9000009,
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "A楼",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 502,
        latitude: 34.155772,
        longitude: 108.899639,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "B楼",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 503,
        latitude: 34.153686,
        longitude: 108.899735,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "三号实验楼（通院）",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 504,
        latitude: 34.154210,
        longitude: 108.9000089,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "二号实验楼（电院）",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 505,
        latitude: 34.154813,
        longitude: 108.900422,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "一号实验楼（自动化院）",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 506,
        latitude: 34.153677,
        longitude: 108.900744,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "图书馆",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 507,
        latitude: 34.155728,
        longitude: 108.905727,
        iconPath: "/imgs/ic_position.png",
        callout: {
          content: "教学实验楼",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },


    ]
    var campus = [{
        id: 601,
        latitude: "34.153677",
        longitude: "108.900744",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "一站式校园服务",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 602,
        latitude: "34.149442",
        longitude: "108.899735",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "开水房",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 603,
        latitude: "34.149655",
        longitude: "108.899757",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "菜鸟驿站",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 604,
        latitude: "34.151258",
        longitude: "108.902568",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "百世快递",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 605,
        latitude: "34.151000",
        longitude: "108.902428",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "圆通快递",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 606,
        latitude: "34.152541",
        longitude: "108.898437",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "西邮卫生所",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      },
      {
        id: 607,
        latitude: "34.152802",
        longitude: "108.898458",
        iconPath: "/imgs/ic_position.png",
        title: "#",
        callout: {
          content: "洗浴中心",
          color: "#ffffff",
          fontSize: 14,
          bgColor: "#0066ff",
          borderRadius: 10,
          padding: 5,
          display: "ALWAYS"
        }
      }
    ]
    var flags = [innerMap, eat, house, car, learn, campus];

    var e = t.currentTarget.dataset.id //e = id
    this.setData({
      lati: innerMap[0].latitude,
      long: innerMap[0].longitude,
      markers: flags[e - 1],
    });
    console.log("id:" + this.data.markers[0].id);
    console.log(this.data.lati + ":" + this.data.long);
    this.setData({
      now_tab: e
    });

  },
  onPickBottomClick: function() {
    this.setData({
      openBottomPicker: !this.data.openBottomPicker,

    })
    console.log(this.data.openBottomPicker)
  },
  controltap: function(t) {
    console.log(t)
    if (1 === t.controlId) {
      wx.navigateTo({
        url: "news"
      })
    } else if (2 === t.controlId) {
      wx.navigateTo({
        url: "report"
      });
    }
  },
  markertap: function(t) {
    if (100 === t.markerId) {
      app.globalData.destination = "108.902299,34.153650";
      app.globalData.long = "108.902299",
      app.globalData.lati = "34.153650",
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (201 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.898534,34.151480";
      console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (202 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.900293,34.150192",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (203 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.905765,34.152905",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (204 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.899783,34.149970",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (301 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.898823,34.149957",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (302 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.901591,34.149912",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (303 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.906747,34.154920",

        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (304 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.906747,34.153690",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (305 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.905336,34.151657",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (401 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902106,34.157575",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (402 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.903106,34.157675",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (403 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902936,34.157535",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (404 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902276,34.157705",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (405 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902076,34.157905",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (406 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902576,34.157505",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (407 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902876,34.157305",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (408 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.903801,34.1535779",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (501 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.9000009,34.156030",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }

    if (502 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.899639,34.155772",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (503 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.899735,34.153686",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (504 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.9000089,34.154210",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (505 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.900422,34.154813",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (506 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.900744,34.153677",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (507 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.905727,34.155728",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (601 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.900744,34.153677",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (602 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.899735,34.149442",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (603 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.899757,34.149655",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (604 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902568,34.151258",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (605 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.902428,34.151000",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (606 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.898437,34.152541",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
    if (607 === t.markerId) {
      console.log(app.globalData);
      app.globalData.destination = "108.898458,34.152802",
        console.log(app.globalData);
      wx.navigateTo({
        url: "../Navigation/navigation_walk/navigation",
      })
    }
  },
  // wx.openLocation({
  //   latitude: 34.153650,
  //   longitude: 108.902299,
  //   scale: 18,
  //   name: '西安邮电大学',
  //   address: '西安市长安区郭杜镇',
  // }) 
  xuriyuan:function(){
    console.log(app.globalData);
    app.globalData.destination = "108.900293,34.150192",
    console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  dongshengyuan:function(){
    console.log(app.globalData);
    app.globalData.destination = "108.905765,34.152905",
      console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  meiguang:function(){
    console.log(app.globalData);
    app.globalData.destination = "108.898534,34.151480";
    console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  },
  mixuebingcheng:function(){
    console.log(app.globalData);
    app.globalData.destination = "108.899783,34.149970",
      console.log(app.globalData);
    wx.navigateTo({
      url: "../Navigation/navigation_walk/navigation",
    })
  }
})