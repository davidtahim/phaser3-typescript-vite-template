import Phaser from "phaser"
import TextureKeys from "./consts/TextureKeys"
import AnimationKeys from "./consts/AnimationKeys"

export default class Game extends Phaser.Scene {
    private background!: Phaser.GameObjects.TileSprite 
    constructor() {
        super("game")
    }
    preload (){
        
    }
    create(){
        
        //definir altura e largura
        const width = this.scale.width
        const height = this.scale.height
        //passando os valores
        this.background = this.add.tileSprite(
            0,0,
            width,height,
            TextureKeys.Background)
        .setOrigin(0,0)
        .setScrollFactor(0,0)
        this.add.image(
            Phaser.Math.Between(900,1500),
            501,
            TextureKeys.MouseHole
        )
        const mouse = this.physics.add.sprite (
            width * 0.5,
            height - 30,
            TextureKeys.RocketMouse,
            'rocketmouse_fly01.png')
        .play(AnimationKeys.RocketMouseRun)
        const body = mouse.body as Phaser.Physics.Arcade.Body
        body.setCollideWorldBounds(true)
        body.setVelocityX(200)
        this.cameras.main.startFollow(mouse)
        this.cameras.main.setBounds(0,0,Number.MAX_SAFE_INTEGER,height)
        this.physics.world.setBounds(
            0,0,
            Number.MAX_SAFE_INTEGER, height -30
        )
        
    }
    update(t:number, dt:number) {
        this.background.setTilePosition(this.cameras.main.scrollX)
    }     
}