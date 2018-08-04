// pages/schoolnavigation/news.js
var postsus = require("../../data/posts-data.js")
Page({
  data: {
  },
  onLoad: function (options) {
    this.setData({
      posts_key: postsus.postus
    })
  }
})