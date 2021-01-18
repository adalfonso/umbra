import { Vector } from "../Math/Vector";

export interface TextRenderOptions {
  family?: string;
  size?: string;
  color?: string;
}

/**
 * Rendering tool interface for implementations such as HTML canvas
 */
export interface Ui {
  /** The size of the UI */
  size: Vector;

  /** Current position of the UI */
  position: Vector;

  /** Clear the UI for re-render */
  clear(): void;

  /**
   * Draw a rectangle
   *
   * @param size     - size of the rectangle
   * @param position - position of the rectangle
   */
  drawRect(size: Vector, position: Vector);

  /**
   * Draw text
   *
   * @param text     - text string to draw
   * @param position - position to render at
   * @param options  - render options
   */
  drawText(text: string, position: Vector, options: TextRenderOptions);
}
