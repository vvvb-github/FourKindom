// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        socket: {
            default: null,
            visible: false
        },
        app: {
            default: null,
            visible: false
        }
    },

    // newroom button API
    newRoom: ()=>{cc.find('Canvas/UI/newroomui').active = true},
    
    cancelNewRoom: function() {
        cc.find('Canvas/UI/newroomui').active = false;
    },

    double: function() {},

    four: function() {},

    // joinroom button API
    joinRoom: ()=>{cc.find('Canvas/UI/joinroomui').active = true},

    cancelJoinRoom: function() {
        cc.find('Canvas/UI/joinroomui').active = false;
    },

    confirm: function() {},

    // setplan button API
    setPlan: ()=>{cc.find('Canvas/UI/setplanui').active = true},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.socket = cc.find('App').getComponent('WebSocket');
        this.app = cc.find('App').getComponent('App');
    },

    start () {

    },

    // update (dt) {},
});
