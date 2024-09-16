import Phaser from "phaser";
import TextureKeys from "../consts/TextureKeys"
import AnimationKeys from "../consts/AnimationKeys"



export default class RocketMouse extends Phaser.GameObjects.Container {
    
    enableJetpack(enabled : boolean) {
        this.flames.setVisible (enabled)
    }

    preUpdate(){
        const body =this.body as Phaser.Physics.Arcade.Body        
    if (this.cursors.space?.isDown) {

        body.setAccelerationY(-600)
        this.enableJetpack(true)
        
    } else {
        body.setAccelerationY(0)
        this.enableJetpack(false)
    }
    }

    private cursors:Phaser.Types.Input.Keyboard.CursorKeys
    private flames:Phaser.GameObjects.Sprite
    constructor(scene: Phaser.Scene, x: number, y: number) {
       

        
        super(scene, x, y);

        // create the Rocket Mouse sprite
        const mouse = scene.add.sprite(0, 0, TextureKeys.RocketMouse)
            .setOrigin(0.5, 1)
            .play(AnimationKeys.RocketMouseRun)

        //create the flame
        this.flames = scene.add.sprite(-63,-15, TextureKeys.RocketMouse)
        .play(AnimationKeys.RocketFlamesOn)


        
        this.enableJetpack(false)

        this.cursors = scene.input.keyboard.createCursorKeys()

        // add as child of Container
        this.add(this.flames)
        this.add(mouse)
        
        scene.physics.add.existing(this)

    }
}