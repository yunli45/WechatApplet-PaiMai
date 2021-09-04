// pages/DetailPage/DetailPage.js
var comm = require("../../Comm/comm.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info: "",
        id: "",
        background: [],
        list: comm.list
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.data.id = options.id;
        for (let index = 0; index < this.data.list.length; index++) {
            if (this.data.list[index].id == this.data.id) {
                this.setData({
                    info: this.data.list[index],
                    background : this.data.list[index].img
                })
            }

        }
        console.log(this.data.background)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
       /* if (this.data.info.img) {
            let curImgList = this.data.info.img; // 当前图片的数组
            let curIndex = 0; // 设置一个局部变量，当前的图片下标
            let myImg = document.getElementById("img")
            document.getElementById("bigImg");
            // 设置一个时间，进行切换
            console.log("正在循环照片1")
            setTimeout(function () {
                for (let i = 0; i < curImgList.length; i++) {
                    myImg.src = curImgList[i];
                    console.log("正在循环照片2")
                }
            }, 2000)
            console.log("正在循环照片3")
        }*/

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

    }
})