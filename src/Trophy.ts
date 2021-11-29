import Game from './Game.js';

export default class Trophy {
  private trophyImage: HTMLImageElement;

  private trophyPositionX: number;

  private trophyPositionY: number;

  private trophySpeed: number;

  private canvas: HTMLCanvasElement;

  constructor() {
    this.canvas = canvas;
    // TODO create multiple objects over time
    this.trophyImage = Game.loadNewImage('assets/img/objects/gold_trophy.png');
    this.trophyPositionX = this.canvas.width / 2;
    this.trophyPositionY = 60;
    this.trophySpeed = 1;
  }

  public moveTrophy() {
    // Move objects
    // TODO adjust for multiple objects
    this.trophyPositionY += this.trophySpeed * elapsed;
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
