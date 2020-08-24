// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        text: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on('mouseenter', (event)=>{
            if(this.node.getComponent(cc.Button).interactable) {
                this.text.setScale(1.1);
            }
        });
        this.node.on('mouseleave', (event)=>{
            this.text.setScale(1);
        });
    },

    start () {

    },

    // update (dt) {},
});
