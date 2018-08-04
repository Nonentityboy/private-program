var amapFile = require('../../../libs/amap-wx.js');
var config = require('../../../libs/config.js');
var destination = getApp().globalData.destination;
Page({
  data: {
    markers: [],
    distance: '',
    cost: '',
    transits: [],
    polyline: []
  },
  onLoad: function() {
    var that = this;
    var origin;
    var key = config.Config.key;
    var myAmapFun = new amapFile.AMapWX({key: key});
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度

      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        origin = res.longitude + ',' + res.latitude,
        console.log(origin);
        console.log(destination);
        myAmapFun.getTransitRoute({
          origin: origin,
          destination: getApp().globalData.destination,
          city: '西安',
          success: function(data){
            if(data && data.transits){
              var transits = data.transits;
              for(var i = 0; i < transits.length; i++){
                var segments = transits[i].segments;
                transits[i].transport = [];
                for(var j = 0; j < segments.length; j++){
                  if(segments[j].bus && segments[j].bus.buslines && segments[j].bus.buslines[0] && segments[j].bus.buslines[0].name){
                    var name = segments[j].bus.buslines[0].name
                    if(j!==0){
                      name = '--' + name;
                    }
                    transits[i].transport.push(name);
                  }
                }
              }
            }
            that.setData({
              transits: transits
            });
              
          },
          fail: function(info){
          }
        })
      }
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