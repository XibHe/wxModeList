// infoQuery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     goodsId:null,
     goodsName:null,
     showModalStatus1: false,

     showModalStatus2: false,

     formList: [],
     activeItemIndex: null,  //判断是否选中

    //  classifyName: null     // 标签
  },

  /**
   * 剂型选择
   */
  powerDrawer: function (e) {
    console.log(111);
    var that=this;
    var currentStatu = e.currentTarget.dataset.statu;
    that.util(currentStatu)
  },

  /**
   * 剂型选择弹窗动画
   */
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "step-end", //线性  
      delay: 0  //0则不延迟  
    });
    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;
    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();
    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })
    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })
      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus1: false
          }
        );
      }
    }.bind(this), 200)
    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus1: true
        }
      );
    }
  },

  /**
   * 功效描述
   */
  effectTap: function (e) {
    console.log(222);
    var that=this;
    var currentStatu = e.currentTarget.dataset.statu;
    that.effectUtil(currentStatu)
  },

  /**
   * 功效描述动画
   */
  effectUtil: function (currentStatu){
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "step-end", //线性  
      delay: 0  //0则不延迟  
    });
    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;
    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();
    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      effectAnimationData: animation.export()
    })
    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        effectAnimationData: animation
      })
      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus2: false
          }
        );
      }
    }.bind(this), 200)
    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus2: true
        }
      );
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     console.log("---infoQuery page onLoad---")
     console.log("id是: " + options.goodsId)
     console.log("goodsName是: " + options.goodsName)

     this.setData({goodsId: options.goodsId})
     this.setData({goodsName: options.goodsName})

     

     formList: ['注射剂', '注射剂', '注射剂', '注射剂', '注射剂', '注射剂', '注射剂', '注射剂',
       '注射剂', '注射剂', '注射剂', '注射剂', '注射剂',]

     console.log('formSelecteView onLoad!')
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
     
     console.log('formSelecteView onShow!')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('formSelecteView onHide!')
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
   * 点击剂型进行选择
   */
  formTapClick: function (data) {
     console.log(data);

     var that = this;
     that.setData({ 
       activeItemIndex: data.target.dataset.index 
     })
  },

  /**
   * 跳转分类标签
   */
  classifyTap: function (){
     wx.navigateTo({
       url: '../classifyLabel/classifyLabel',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  }
})