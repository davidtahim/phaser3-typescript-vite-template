import Phaser from 'phaser'
import TextureKeys from './consts/TextureKeys'
import AnimationKeys from './consts/AnimationKeys'
export default class Preloader extends Phaser.Scene {
    constructor(){
        super('preloader')
    }
   preload(){
    this.load.image(TextureKeys.Background,'house/bg_repeat_340x640.png')
    this.load.image (TextureKeys.MouseHole,'house/object_mousehole.png')  
    this.load.image (TextureKeys.Window1,'house/object_window1.png')  
    this.load.image (TextureKeys.Window2,'house/object_window2.png')  
    this.load.image (TextureKeys.Bookcase1,'house/object_bookcase1.png')  
    this.load.image (TextureKeys.Bookcase2,'house/object_bookcase2.png')  

    
    //carregar o atlas
        this.load.atlas(
            TextureKeys.RocketMouse,
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

    this.anims.create({
        key:AnimationKeys.RocketFlamesOn,
        frames:this.anims.generateFrameNames(TextureKeys.RocketMouse,{ start:1,end:2, prefix:'flame',suffix:'.png'}),
     frameRate:10,
     repeat:-1
    })

    this.scene.start('game')

   } 
}