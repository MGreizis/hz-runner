import Game from './Game.js';

export default class GoldTrophy {
  private trophyImage: HTMLImageElement;

  private trophyPositionX: number;

  private trophyPositionY: number;

  private trophySpeed: number;

  private canvas: HTMLCanvasElement;

  private points: number;

  /**
   * Constructor init
   *
   * @param canvas
   * canvas parameter
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    // x positions of the lanes in the canvas
    const leftLane = this.canvas.width / 4;
    const middleLane = this.canvas.width / 2;
    const rightLane = (this.canvas.width / 4) * 3;

    // TODO create multiple objects over time
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

  /**
   * Trophy horizontal position getter
   *
   * @returns trophyPositionX
   */
  public getTrophyPositionX(): number {
    return this.trophyPositionX;
  }

  /**
   * Trophy vertical position getter
   *
   * @returns trophyPositionY
   */
  public getTrophyPositionY(): number {
    return this.trophyPositionY;
  }

  /**
   * Trophy image height getter
   *
   * @returns trophyImage.height
   */
  public getTrophyImageHeight(): number {
    return this.trophyImage.height;
  }

  /**
   * Trophy image width getter
   *
   * @returns trophyImage.width
   */
  public getTrophyImageWidth(): number {
    return this.trophyImage.width;
  }

  /**
   * Points getter
   *
   * @returns points
   */
  public getPoints(): number {
    return this.points;
  }

  /**
   * Movement of the trophy
   *
   * @param elapsed
   * elapsed parameter
   */
  public moveTrophy(elapsed: number): void {
    // Move objects
    // TODO adjust for multiple objects
    this.trophyPositionY += this.trophySpeed * elapsed;
  }

  /**
   * Render the trophy
   *
   * @param ctx
   * cts parameter
   */
  public renderTrophy(ctx: CanvasRenderingContext2D): void {
    // Render the objects
    // Center the image in the lane with the x coordinates
    ctx.drawImage(
      this.trophyImage,
      this.trophyPositionX - this.trophyImage.width / 2,
      this.trophyPositionY,
    );
  }

  /**
   * Trophy collision with bottom of canvas
   *
   * @returns boolean
   */
  public trophyCollidesWithCanvasBottom(): boolean {
    if (this.trophyPositionY + this.trophyImage.height > this.canvas.height) {
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
