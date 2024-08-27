import Phaser from 'phaser'
export default class Preloader extends Phaser.Scene {
    constructor(){
        super('preloader')
    }
   preload(){
    this.load.image('background','house/bg_repeat_340x640.png')
        //carregar o atlas
        this.load.atlas(
            'rocket-mouse',
            'characters/rocket-mouse.png',
            'characters/rocket-mouse.json',
        )
   }
   create(){
    this.anims.create(
        {
            key:'rocket-mouse-run',
            frames:this.anims.generateFrameNames('rocket-mouse',{
                start:1,
                end:4,
                prefix:'rocketmouse_run',
                zeroPad:2,
                suffix:'.png'
            }),
            frameRate:10,
            repeat:-1
        }
    )
    this.scene.start('game')

   } 
}