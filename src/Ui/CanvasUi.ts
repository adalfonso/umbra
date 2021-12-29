import { CollidableTemplate } from "../Entity/types";
import { TextRenderOptions, Ui } from "./Ui";
import { Vector } from "../Math/Vector";

/**
 * Canvas UI
 */
export class CanvasUi implements Ui, CollidableTemplate {
  /** HTML canvas element */
  private _canvas: HTMLCanvasElement;

  /**
   * @param size     - resolution of the UI
   * @param document - HTML document
   * @param target   - ID of HTML mounting point
   */
  constructor(size: Vector, document: Document, target: string) {
    this._canvas = document.createElement("canvas");
    document.getElementById(target).appendChild(this._canvas);
    this.ctx.imageSmoothingEnabled = false;
    this._canvas.width = size.x;
    this._canvas.height = size.y;
  }

  // TODO: probably don't need this to be public
  get ctx(): CanvasRenderingContext2D {
    return this._canvas.getContext("2d");
  }

  get size(): Vector {
    return new Vector(this._canvas.width, this._canvas.height);
  }

  get position(): Vector {
    return new Vector(0, 0);
  }

  set size(resolution: Vector) {
    this._canvas.height = resolution.y;
    this._canvas.width = resolution.x;
  }

  public clear() {
    this.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
  }

  /**
   * Draw a rectangle
   *
   * @param size     - size of the rectangle
   * @param position - position of the rectangle
   */
  drawRect(size: Vector, position: Vector) {
    this.ctx.strokeRect(position.x, position.y, size.x, size.y);
  }

  /**
   * Draw text
   *
   * @param text     - text string to draw
   * @param position - position to render at
   * @param options  - render options
   */
  drawText(text: string, position: Vector, options: TextRenderOptions) {
    this.ctx.font = `${options.size ?? "16px"} ${options.family ?? "Arial"}`;
    this.ctx.fillStyle = options.color ?? "#000";

    this.ctx.fillText(text, position.x, position.y);
  }
}
