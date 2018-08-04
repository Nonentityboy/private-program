var amapFile = require('../../../libs/amap-wx.js');
var config = require('../../../libs/config.js');
var destination = getApp().globalData.destination;
Page({
  data: {
    markers: [],
    distance: '',
    cost: '',
    polyline: []
  },
  onLoad: function() {
    var that = this;
    var origin;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res.latitude);
        origin =  longitude + ',' +  latitude ;
        console.log(origin);
        myAmapFun.getWalkingRoute({
          origin: origin,
          destination:getApp().globalData.destination,
          success: function (data) {
            var points = [];
            if (data.paths && data.paths[0] && data.paths[0].steps) {
              var steps = data.paths[0].steps;
              for (var i = 0; i < steps.length; i++) {
                var poLen = steps[i].polyline.split(';');
                for (var j = 0; j < poLen.length; j++) {
                  points.push({
                    longitude: parseFloat(poLen[j].split(',')[0]),
                    latitude: parseFloat(poLen[j].split(',')[1])
                  })
                }
              }
              console.log(destination);
            }
            that.setData({
              polyline: [{
                points: points,
                color: "#0066ff",
                width: 6
              }]
            });
            if (data.paths[0] && data.paths[0].distance) {
              that.setData({
                distance: data.paths[0].distance + '米'
              });
            }
            if (data.paths[0] && data.paths[0].duration) {
              that.setData({
                cost: parseInt(data.paths[0].duration / 60) + '分钟'
              });
            }

          },
          fail: function (info) {

          }
        })
      }
    })
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: '900cd0384cc848c45188cdbff435c817' });
    myAmapFun.getRegeo({
      success: function (data) {
        var marker = [{
          id: data[0].id,
          latitude: data[0].latitude,
          longitude: data[0].longitude,
          
        }]
        // that.setData({
        //   markers: marker
        // });
        // that.setData({
        //   latitude: data[0].latitude
        // });
        // that.setData({
        //   longitude: data[0].longitude
        // });
        // that.setData({
        //   textData: {
        //     name: data[0].name,
        //     desc: data[0].desc
        //   }
        // })
      },
      fail: function (info) {
        // wx.showModal({title:info.errMsg})
      },

    })
  },
  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_walk_detail/navigation'
    })
  },
  goToCar: function (e) {
    wx.redirectTo({
      url: '../navigation_car/navigation'
    })
  },
  goToBus: function (e) {
    wx.redirectTo({
      url: '../navigation_bus/navigation'
    })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation'
    })
  },
  goToWalk: function (e) {
    wx.redirectTo({
      url: '../navigation_walk/navigation'
    })
  }
})