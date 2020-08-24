// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var config = require('./Config');

cc.Class({
    extends: cc.Component,

    properties: {
        ws: {
            default: null,
            visible: false
        }
    },

    // 判断是否连接
    isConnected: ()=>{return this.ws && this.ws.readyState === 1},

    // 开启WebSocket连接
    connect: function() {
        this.ws = new WebSocket('ws://'+config.url+':'+config.port+config.path);

        this.ws.onopen = this.open;
        this.ws.onmessage = this.message;
        this.ws.onclose = this.close;
        this.ws.onerror = this.error;
    },

    // 断开连接
    disconnect: function() {
        this.ws.close();
    },

    // 向服务器发送数据信息
    send: function(data) {
        this.ws.send(JSON.stringify(data));
    },

    // 成功连接回调
    open: function() {
        console.log('Connect Success!');
    },

    // 收到消息回调
    message: function(res) {
        var data = JSON.parse(res.data);
        var socket = cc.find('App').getComponent('WebSocket');
        // console.log(data);

        switch(data.id) {
        }
    },

    // 断开连接回调
    close: function() {
        var socket = cc.find('App').getComponent('WebSocket');
    },

    // 连接错误回调
    error: function() {},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.connect();
    },

    start () {

    },

    // update (dt) {},
});
