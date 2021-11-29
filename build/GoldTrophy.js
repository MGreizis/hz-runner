import Game from './Game.js';
export default class GoldTrophy {
    trophyImage;
    trophyPositionX;
    trophyPositionY;
    trophySpeed;
    canvas;
    points;
    constructor(canvas) {
        this.canvas = canvas;
        const leftLane = this.canvas.width / 4;
        const middleLane = this.canvas.width / 2;
        const rightLane = (this.canvas.width / 4) * 3;
        this.trophyImage = GoldTrophy.loadNewImage('assets/img/objects/gold_trophy.png');
        const randomLane = Game.randomInteger(1, 3);
        if (randomLane === 1) {
            this.trophyPositionX = leftLane;
        }
        if (randomLane === 2) {
            this.trophyPositionX = middleLane;
        }
        if (randomLane === 3) {
            this.trophyPositionX = rightLane;
        }
        this.trophyPositionY = 60;
        this.trophySpeed = 1;
        this.points = 10;
    }
    getTrophyPositionX() {
        return this.trophyPositionX;
    }
    getTrophyPositionY() {
        return this.trophyPositionY;
    }
    getTrophyImageHeight() {
        return this.trophyImage.height;
    }
    getTrophyImageWidth() {
        return this.trophyImage.width;
    }
    getPoints() {
        return this.points;
    }
    moveTrophy(elapsed) {
        this.trophyPositionY += this.trophySpeed * elapsed;
    }
    renderTrophy(ctx) {
        ctx.drawImage(this.trophyImage, this.trophyPositionX - this.trophyImage.width / 2, this.trophyPositionY);
    }
    trophyCollidesWithCanvasBottom() {
        if (this.trophyPositionY + this.trophyImage.height > this.canvas.height) {
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
//# sourceMappingURL=GoldTrophy.js.map