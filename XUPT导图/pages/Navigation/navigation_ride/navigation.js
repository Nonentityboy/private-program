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
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({ key: '900cd0384cc848c45188cdbff435c817'});
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        origin = res.longitude + ',' + res.latitude,
        console.log(origin);
        myAmapFun.getRidingRoute({
          origin: origin,
          destination: getApp().globalData.destination,
          success: function(data){
            var points = [];
            if(data.paths && data.paths[0] && data.paths[0].steps){
              var steps = data.paths[0].steps;
              for(var i = 0; i < steps.length; i++){
                var poLen = steps[i].polyline.split(';');
                for(var j = 0;j < poLen.length; j++){
                  points.push({
                    longitude: parseFloat(poLen[j].split(',')[0]),
                    latitude: parseFloat(poLen[j].split(',')[1])
                  })
                } 
              }
            }
            that.setData({
              polyline: [{
                points: points,
                color: "#0066ff",
                width: 6
              }]
            });
            if(data.paths[0] && data.paths[0].distance){
              that.setData({
                distance: data.paths[0].distance + '米'
              });
            }
            if (data.paths[0] && data.paths[0].duration) {
              that.setData({
                cost: parseInt(data.paths[0].duration / 70) + '分钟'
              });
            }
              
          },
          fail: function(info){

          }
        })
      }
    })
  },
  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_ride_detail/navigation'
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