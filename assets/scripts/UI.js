// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        buttonChildren: [cc.Node]
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onEnable () {
        var ui = cc.find('Canvas/UI');
        ui.getChildByName('newroom').getComponent(cc.Button).interactable = false;
        ui.getChildByName('joinroom').getComponent(cc.Button).interactable = false;
        ui.getChildByName('setplan').getComponent(cc.Button).interactable = false;
    },

    onDisable () {
        var ui = cc.find('Canvas/UI');
        ui.getChildByName('newroom').getComponent(cc.Button).interactable = true;
        ui.getChildByName('joinroom').getComponent(cc.Button).interactable = true;
        ui.getChildByName('setplan').getComponent(cc.Button).interactable = true;
        
        for(i in this.buttonChildren) {
            var child = this.buttonChildren[i];
            child.getComponent(cc.Button).interactable = true;
        }
    },

    start () {

    },

    // update (dt) {},
});
