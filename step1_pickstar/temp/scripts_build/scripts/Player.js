"use strict";
cc._RFpush(module, 'e3197fAjTlAw6K6og9AymKc', 'Player');
// scripts/Player.js

"use strict";

cc.Class({
    extends: cc.Component,

    // properties: {
    //     // foo: {
    //     //    default: null,      // The default value will be used only when the component attaching
    //     //                           to a node for the first time
    //     //    url: cc.Texture2D,  // optional, default is typeof default
    //     //    serializable: true, // optional, default is true
    //     //    visible: true,      // optional, default is true
    //     //    displayName: 'Foo', // optional
    //     //    readonly: false,    // optional, default is false
    //     // },
    //     // ...
    // },

    properties: {
        // 主角跳跃高度
        jumpHeight: 0,
        // 主角跳跃持续时间
        jumpDuration: 0,
        // 最大移动速度
        maxMoveSpeed: 0,
        // 加速度
        accel: 0,

        jumpAudio: {
            default: null,
            url: cc.AudioClip
        }
    },
    setJumpAction: function setJumpAction() {
        // 跳跃上升
        var jumpUp = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight)).easing(cc.easeCubicActionOut());
        // 下落
        var jumpDown = cc.moveBy(this.jumpDuration, cc.p(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());

        var callback = cc.callFunc(this.playJumpAudio, this);

        // 不断重复
        return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
    },

    playJumpAudio: function playJumpAudio() {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    },

    setInputControl: function setInputControl() {
        var self = this;
        // 添加键盘事件监听
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            // 有按键按下时，判断是否是我们指定的方向控制键，并设置向对应方向加速
            onKeyPressed: function onKeyPressed(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = true;
                        self.accRight = false;
                        break;
                    case cc.KEY.d:
                        self.accLeft = false;
                        self.accRight = true;
                        break;
                }
            },
            // 松开按键时，停止向该方向的加速
            onKeyReleased: function onKeyReleased(keyCode, event) {
                switch (keyCode) {
                    case cc.KEY.a:
                        self.accLeft = false;
                        break;
                    case cc.KEY.d:
                        self.accRight = false;
                        break;
                }
            }
        }, self.node);
    },
    // use this for initialization
    onLoad: function onLoad() {
        // Initialize the jumpAction
        this.jumpAction = this.setJumpAction();
        this.node.runAction(this.jumpAction);

        // Initialize the switch
        this.accLeft = false;
        this.accRight = false;

        this.xSpeed = 0;

        // Initialize the setInputControl
        this.setInputControl();
    },

    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        } else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        // limit maximum speed
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }

        // update Player position with current speed
        this.node.x += this.xSpeed * dt;
    }
});

cc._RFpop();