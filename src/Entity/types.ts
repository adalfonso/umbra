import { Ui } from "../Ui/Ui";
import { Vector } from "../Math/Vector";

// Used to establish a collidable entity
export interface CollidableTemplate {
  size: Vector;
  position: Vector;
}

// Describes an entity that can collide
export interface Collidable {
  // Get the size
  size(): Vector;

  // Get the position
  position(): Vector;

  // Change the position
  move(delta: Vector): void;
}

// Can be drawn on the canvas
export interface Drawable {
  draw(ui: Ui): void;
}

// Has underlying data the can be updated according to elapsed time
export interface Updatable {
  update(dt: number): Record<string, number>;
}
