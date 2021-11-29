import KeyListener from './KeyListener.js';
import Game from './Game.js';
export default class Player {
    playerImage;
    trophy;
    playerPositionX;
    keyListener;
    canvas;
    leftLane;
    middleLane;
    rightLane;
    constructor(canvas) {
        this.canvas = canvas;
        this.keyListener = new KeyListener();
        this.playerImage = Game.loadNewImage('./assets/img/players/character_robot_walk0.png');
        this.playerPositionX = this.canvas.width / 2;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
    }
    processInput() {
        if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)
            && this.playerPositionX !== this.leftLane) {
            this.playerPositionX = this.leftLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_UP)
            && this.playerPositionX !== this.middleLane) {
            this.playerPositionX = this.middleLane;
        }
        if (this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)
            && this.playerPositionX !== this.rightLane) {
            this.playerPositionX = this.rightLane;
        }
    }
    renderPlayer(ctx) {
        ctx.drawImage(this.playerImage, this.playerPositionX - this.playerImage.width / 2, this.canvas.height - 150);
    }
    playerCollidesWithTrophy(trophy) {
        if (this.playerPositionX < trophy.getTrophyPositionX() + trophy.getTrophyImageWidth()
            && this.playerPositionX + this.playerImage.width > trophy.getTrophyPositionX()
            && this.canvas.height - 150 < trophy.getTrophyPositionY() + trophy.getTrophyImageHeight()
            && this.canvas.height - 150 + this.playerImage.height > trophy.getTrophyPositionY()) {
            return true;
        }
        return false;
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=Player.js.map