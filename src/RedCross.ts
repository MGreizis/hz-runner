import ScoringObject from './ScoringObject.js';

export default class RedCross extends ScoringObject {
  /**
   * Construct a new instance of this class
   *
   * @param canvas the canvas on which the player should exist
   */
  public constructor(canvas: HTMLCanvasElement) {
    super(canvas, -5, 'assets/img/objects/tilted_cross.png');
  }
}
