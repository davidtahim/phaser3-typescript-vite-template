import Phaser from 'phaser'

import Preloader from './Preloader'
import Game from './Game'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 800,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			debug:true
		},
	},
	scene: [Preloader,Game],
}

export default new Phaser.Game(config)
