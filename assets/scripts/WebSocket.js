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

    isConnected: ()=>{return this.ws && this.ws.readyState === 1},

    connect: function(fix = '') {
        this.ws = new WebSocket('ws://'+config.url+':'+config.port+config.path+fix);

        this.ws.onopen = this.open;
        this.ws.onmessage = this.message;
        this.ws.onclose = this.close;
        this.ws.onerror = this.error;
    },

    disconnect: function() {
        this.ws.close();
    },

    send: function(data) {
        this.ws.send(JSON.stringify(data));
    },

    open: function() {
        console.log('Connect Success!');
    },

    message: function(res) {
        var data = JSON.parse(res.data);
        var socket = cc.find('App').getComponent('WebSocket');
        // console.log(data);

        switch(data.id) {
        }
    },

    close: function() {
        var socket = cc.find('App').getComponent('WebSocket');
    },

    error: function() {},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.connect();
    },

    start () {

    },

    // update (dt) {},
});
