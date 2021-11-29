import KeyListener from './KeyListener.js';

export default class Player {
  private playerImage: HTMLImageElement;

  private playerPositionX: number;

  // KeyListener so the user can give input
  private keyListener: KeyListener;

  constructor() {
    this.keyListener = new KeyListener();
    // Set the player at the center
    this.playerImage = Game.loadNewImage('./assets/img/players/character_robot_walk0.png');
    this.playerPositionX = this.canvas.width / 2;
  }

  public movePlayer() {
    // Move player
    if (this.keyListener.isKeyDown(KeyListener.KEY_LEFT)
      && this.playerPositionX !== this.leftLane) {
      this.playerPositionX = this.leftLane;
    }
    if (this.keyListener.isKeyDown(KeyListener.KEY_UP)
      && this.playerPositionX !== this.middleLane) {
      this.playerPositionX = this.middleLane;
    }
    if (
      this.keyListener.isKeyDown(KeyListener.KEY_RIGHT)
      && this.playerPositionX !== this.rightLane) {
      this.playerPositionX = this.rightLane;
    }
  }
}
