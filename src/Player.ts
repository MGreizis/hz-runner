import KeyListener from './KeyListener.js';
import Game from './Game.js';
import GoldTrophy from './GoldTrophy.js';

export default class Player {
  private playerImage: HTMLImageElement;

  private trophy: GoldTrophy;

  private playerPositionX: number;

  // KeyListener so the user can give input
  private keyListener: KeyListener;

  private canvas: HTMLCanvasElement;

  private leftLane: number;

  private middleLane: number;

  private rightLane: number;

  /**
   * Constructor init
   *
   * @param canvas
   * canvas parameter
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.keyListener = new KeyListener();
    // Set the player at the center
    this.playerImage = Game.loadNewImage('./assets/img/players/character_robot_walk0.png');
    this.playerPositionX = this.canvas.width / 2;

    // x positions of the lanes in the canvas
    this.leftLane = this.canvas.width / 4;
    this.middleLane = this.canvas.width / 2;
    this.rightLane = (this.canvas.width / 4) * 3;
  }

  /**
   * Input processing
   */
  public processInput(): void {
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

  /**
   * Render the player
   *
   * @param ctx
   * ctx parameter
   */
  public renderPlayer(ctx: CanvasRenderingContext2D): void {
    // Render the player
    // Center the image in the lane with the x coordinates
    ctx.drawImage(
      this.playerImage,
      this.playerPositionX - this.playerImage.width / 2,
      this.canvas.height - 150,
    );
  }

  /**
   * Has the player collided with the trophy
   *
   * @param trophy
   * trophy parameter
   * @returns boolean
   */
  public playerCollidesWithTrophy(trophy: GoldTrophy): boolean {
    if (this.playerPositionX < trophy.getTrophyPositionX() + trophy.getTrophyImageWidth()
      && this.playerPositionX + this.playerImage.width > trophy.getTrophyPositionX()
      && this.canvas.height - 150 < trophy.getTrophyPositionY() + trophy.getTrophyImageHeight()
      && this.canvas.height - 150 + this.playerImage.height > trophy.getTrophyPositionY()) {
      return true;
    }
    return false;
  }

  /**
   * Loads an image in such a way that the screen doesn't constantly flicker
   *
   *
   * NOTE: this is a 'static' method. This means that this method must be called like
   * `Game.loadNewImage()` instead of `this.loadNewImage()`.
   *
   * @param source The address or URL of the a media resource that is to be loaded
   * @returns an HTMLImageElement with the source as its src attribute
   */
  private static loadNewImage(source: string): HTMLImageElement {
    const img = new Image();
    img.src = source;
    return img;
  }
}
