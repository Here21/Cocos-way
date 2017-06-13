cc.Class({
    extends: cc.Component,

    properties: {
      anim: cc.Animation
    },

    // use this for initialization
    onLoad: function () {
    },

    playJump: function () {
        this.anim.play('sheep_jump');
    },

    playRun: function() {
        this.anim.play('sheep_run');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
