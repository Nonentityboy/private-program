var app = getApp() 
Page({
  data: {
    long: "",
    lati: "",
    markers:[
    ],
    controls:[
    ],
    // controls: [{
    //   id: 1,
    //   iconPath: "/imgs/news.png",
    //   position: {
    //     left: 10,
    //     top: 55 - 50,
    //     width: 40,
    //     height: 40
    //   },
    //   clickable: true
    // },
    //   {
    //     id: 2,
    //     iconPath: "/imgs/warn.png",
    //     position: {
    //       left: 10,
    //       top: 100 - 50,
    //       width: 40,
    //       height: 40
    //     },
    //     clickable: true
    //   },
    //   {
    //     id: 3,
    //     iconPath: "/imgs/school.png",
    //     position: {
    //       left: 325,
    //       top: 50 - 50,
    //       width: 50,
    //       height: 50
    //     },
    //     clickable:false
    //   },
    //   ],
    tab: [  
      {
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
      },{
        id: 6,
        title: "校园服务"
      }
    ]
  },
  onLoad: function () {
    var _this = this;
    wx.getSystemInfo(
      {
        success: function (res) {
          var _innerWidth = res.windowWidth
          _this.data.controls.forEach(function (item) {
            item.position.left = (item.position.left / 375) * _innerWidth
            item.position.top = (item.position.top / 375) * _innerWidth
            item.position.width = (item.position.width / 375) * _innerWidth
            item.position.height = (item.position.height / 375) * _innerWidth
          })
          _this.setData(
            {
              controls: _this.data.controls
            }
          )
        }
      }
    )
    this.mapCtx = wx.createMapContext('map')
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
  Showmarker: function (t) {
        
   var innerMap = [
     {
       id: 1,
       latitude: "34.153650",
       longitude: "108.902299",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "西安邮电大学",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var eat = [
    {
      id: 1,
      latitude: 34.151480,
      longitude: 108.898534,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "美食广场",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 2,
      latitude: 34.149912,
      longitude: 108.901591,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "旭日苑",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 3,
      latitude: 34.152905,
      longitude: 108.905765,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "东升苑",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
    {
      id: 4,
      latitude: 34.149970,
      longitude: 108.899783,
      iconPath: "/imgs/ic_position.png",
      title: "#",
      callout: {
        content: "蜜雪冰糖",
        color: "#ffffff",
        fontSize: 14,
        bgColor: "#661AFF",
        borderRadius: 10,
        padding: 5,
        display: "ALWAYS"
      }
    },
   ]    
   var house = [
     {
       id: 1,
       latitude: 34.149957,
       longitude: 108.898823,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "长治公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.149912,
       longitude: 108.901591,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "长思公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 3,
       latitude: 34.153690,
       longitude: 108.906747,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "安美公寓",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 4,
       latitude: 34.151657,
       longitude: 108.905336,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "家属区",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
   ]
   var car = [
     {
       id: 1,
       latitude: 34.157575,
       longitude: 108.902106,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "166",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.157675,
       longitude: 108.903106,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "268",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 3,
       latitude: 34.157535,
       longitude: 108.902936,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "321",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }

     },
     {
       id: 4,
       latitude: 34.157705,
       longitude: 108.902276,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-07",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 5,
       latitude: 34.157905,
       longitude: 108.902076,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "4-08",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 6,
       latitude: 34.157505,
       longitude: 108.902576,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "600/K600",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 7,
       latitude: 34.157305,
       longitude: 108.902876,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "616/K616",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 8,
       latitude: 34.1535779,
       longitude: 108.903801,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "游9路",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ]
   var learn = [
     {
       id: 1,
       latitude: 34.156030,
       longitude: 108.9000009,
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "A楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 2,
       latitude: 34.155772,
       longitude: 108.899639,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "B楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 5,
       latitude: 34.153686,
       longitude: 108.899735,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "三号实验楼（通院）",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 6,
       latitude: 34.154210,
       longitude: 108.9000089,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "二号实验楼（电院）",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 7,
       latitude: 34.154813,
       longitude: 108.900422,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "一号实验楼（自动化院）",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 8,
       latitude: 34.153677,
       longitude: 108.900744,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "图书馆",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     {
       id: 9,
       latitude: 34.155728,
       longitude: 108.905727,
       iconPath: "/imgs/ic_position.png",
       callout: {
         content: "教学实验楼",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     },
     
     
   ]
   var campus = [
     {
       id: 0,
       latitude: "34.153677",
       longitude: "108.900744",
       iconPath: "/imgs/ic_position.png",
       title: "#",
       callout: {
         content: "校园服务",
         color: "#ffffff",
         fontSize: 14,
         bgColor: "#661AFF",
         borderRadius: 10,
         padding: 5,
         display: "ALWAYS"
       }
     }
   ] 
   var flags = [innerMap, eat, house, car, learn, campus];
   
   var e = t.currentTarget.dataset.id  //e = id
    this.setData({
      lati: innerMap[0].latitude,
      long: innerMap[0].longitude, 
      markers:flags[e-1],
    });
    if (e == 2) {
        console.log("----------"+e);
      this.setData({
        controls: [
          {
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
              left: 310,
              top: 50 - 50,
              width: 50,
              height: 50
            },
            clickable: false
          },
          {
          id: 4,
          iconPath: "/imgs/result.png",
          position: {
            left: 0,
            top: 490,
            width: 375,
            height: 50
          },
          clickable: true,
        }]
      });
    }
    else{
      this.setData({
        controls: [
          {
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
              left: 310,
              top: 50 - 50,
              width: 50,
              height: 50
            },
            clickable: false
          }]
      });
    }
 

    
   

    console.log("id:"+this.data.markers[0].id);

    console.log(this.data.lati+ ":" + this.data.long);
    this.setData({
      now_tab: e
    });
    
  },
  controltap: function (t) {
    console.log(t)
    if(1 === t.controlId){
      wx.navigateTo({
        url: "news"
      })
    }
        else if (2 === t.controlId) {  
          wx.navigateTo({
            url: "report"
          });
        }
            else if(4 === t.controlId){
                wx.navigateTo({
                  url: "store"
                });
            }
  }
})