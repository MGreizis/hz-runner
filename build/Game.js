import GameLoop from './GameLoop.js';
import Player from './Player.js';
import GoldTrophy from './GoldTrophy.js';
export default class Game {
    player;
    trophy;
    canvas;
    leftLane;
    middleLane;
    rightLane;
    gameloop;
    score;
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.width = window.innerWidth / 3;
        this.canvas.height = window.innerHeight;
        this.leftLane = this.canvas.width / 4;
        this.middleLane = this.canvas.width / 2;
        this.rightLane = (this.canvas.width / 4) * 3;
        this.player = new Player(this.canvas);
        this.trophy = new GoldTrophy(this.canvas);
        this.score = 0;
        console.log('Start animation');
        this.gameloop = new GameLoop(this);
        this.gameloop.start();
    }
    processInput() {
        this.player.processInput();
    }
    update(elapsed) {
        this.trophy.moveTrophy(elapsed);
        if (this.player.playerCollidesWithTrophy(this.trophy)) {
            this.trophy = new GoldTrophy(this.canvas);
            this.score += this.trophy.getPoints();
        }
        if (this.trophy.trophyCollidesWithCanvasBottom()) {
            this.trophy = new GoldTrophy(this.canvas);
            this.score -= 5;
        }
        return false;
    }
    render() {
        const ctx = this.canvas.getContext('2d');
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.writeTextToCanvas('UP arrow = middle | LEFT arrow = left | RIGHT arrow = right', this.canvas.width / 2, 40, 14);
        this.writeTextToCanvas(`Score: ${this.score}`, this.canvas.width / 2, 80, 14);
        this.trophy.renderTrophy(ctx);
        this.player.renderPlayer(ctx);
    }
    writeTextToCanvas(text, xCoordinate, yCoordinate, fontSize = 20, color = 'red', alignment = 'center') {
        const ctx = this.canvas.getContext('2d');
        ctx.font = `${fontSize}px sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static randomInteger(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
}
//# sourceMappingURL=Game.js.map