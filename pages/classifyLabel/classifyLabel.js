// classifyLabel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList: ['驱虫', '止痛', '去湿', '养颜', '补水', '开窍药', '安神补脑颗粒促进睡眠补充蛋白质可陈述事实事实上','安神补脑颗粒','祛风止痒','消化药','解表药','止咳化痰药','其他'],

    activeItemIndex: '',
    selecteItem: '',  // 选中的值
    a:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var _this = this;
    //获取屏幕高度
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 单选事件
   */
  selectedTap: function (data) {
    console.log(data);
    var that = this;
    that.setData({
      activeItemIndex: data.target.dataset.index,
      a: that.data.classifyList[data.currentTarget.dataset.index]
      
    })
   
    console.log(that.data.classifyList[data.currentTarget.dataset.index]);
    console.log(data.target.dataset.index);
    console.log(that.data.a);
  },

  /**
   * 点击确定按钮
   */
  sureBtnClick: function () {
    var that=this;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
    prevPage.setData({
      mydata: that.data.a,
    })

    wx.navigateBack({

    })
  }

})