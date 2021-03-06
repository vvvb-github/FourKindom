// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        rid: {
            default: 0,
            visible: false
        }
    },

    inRoom: ()=>{return rid > 0},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // 设置为全局节点
        cc.game.addPersistRootNode(this.node);
    },

    start () {

    },

    // update (dt) {},
});
