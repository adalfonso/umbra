import { Ui } from "../Ui/Ui";
import { Vector } from "../Math/Vector";

/** Used for entites that can collides */
export interface Collidable {
  size: Vector;
  position: Vector;
}

/** Can be drawn on the canvas */
export interface Drawable {
  draw(ui: Ui): void;
}

/** Has underlying data the can be updated according to elapsed time */
export interface Updatable {
  update(dt: number): Record<string, number>;
}
