import Phaser from "phaser"
import TextureKeys from "./consts/TextureKeys"
import AnimationKeys from "./consts/AnimationKeys"

export default class Game extends Phaser.Scene {
    private background!: Phaser.GameObjects.TileSprite 
    private mouseHole!: Phaser.GameObjects.Image
    
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
        this.mouseHole= this.add.image(
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
        this.wrapMouseHole()
        this.background.setTilePosition(this.cameras.main.scrollX)
        
    }
    
    private wrapMouseHole() {
        const scrollX = this.cameras.main.scrollX
        const rightEdge = scrollX+this.scale.width
    if (this.mouseHole.x + this.mouseHole.width < scrollX) {
        this.wrapMouseHole.x = Phaser.Math.Between(
            rightEdge+100,rightEdge+1000
        )
    }
    }       
}