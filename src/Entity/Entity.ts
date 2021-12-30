import { Vector } from "../Math/Vector";

/**
 * Represents the data aspect of an actor
 */
export class Entity {
  /**
   * @param _size physical size of the entity
   * @param _position position of the entity relative to the main canvas
   */
  constructor(private _size: Vector, private _position: Vector) {}

  get size() {
    return this._size.copy();
  }

  get position() {
    return this._position.copy();
  }

  /**
   * Update the position via vector
   *
   * @param delta vector needed to move
   * @returns new position
   */
  move(delta: Vector) {
    this._position = this._position.plus(delta);

    return this.position;
  }
}
