import { Collidable, CollidableTemplate } from "./types";
import { Vector } from "../Math/Vector";

export const collidable = (template: CollidableTemplate): Collidable => {
  let { size, position } = template;

  return {
    size: () => size.copy(),
    position: () => position.copy(),
    move: (delta: Vector) => (position = position.plus(delta)),
  };
};
