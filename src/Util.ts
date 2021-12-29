import { Collidable } from "./Entity/types";

/**
 * Create an animation frame loop
 *
 * @param callback - callback to perform on each frame render
 */
export const startAnimation: Function = (callback: Function) => {
  let lastTime: number = 0;

  const frame: FrameRequestCallback = (time: number) => {
    let dt: number = time - lastTime;
    lastTime = time;

    callback(dt);
    requestAnimationFrame(frame);
  };

  requestAnimationFrame(frame);
};

/**
 * Determine if the two entites collide
 *
 * If one entity is completely inside the other it may not detect collision, so
 * an inversion is performed on the entities if a collision isn't initially found
 *
 * @param a       - entity a
 * @param b       - entity b
 * @param inverse - if the collision has been inverted
 *
 * @return if a collision is detected
 */
export const collides = (
  a: Collidable,
  b: Collidable,
  inverse: boolean = false
): boolean => {
  const pos_a = a.position();
  const pos_b = b.position();
  const size_a = a.size();
  const size_b = b.size();

  const collides_x =
    (pos_b.x > pos_a.x && pos_b.x < pos_a.x + size_a.x) ||
    (pos_b.x + size_b.x > pos_a.x && pos_b.x + size_b.x < pos_a.x + size_a.x);

  const collides_y =
    (pos_b.y > pos_a.y && pos_b.y < pos_a.y + size_a.y) ||
    (pos_b.y + size_b.y > pos_a.y && pos_b.y + size_b.y < pos_a.y + size_a.y);

  if (inverse) {
    return collides_x && collides_y;
  }

  return (collides_x && collides_y) || collides(b, a, true);
};

/**
 * Generate a random alpha-numeric string
 *
 * @param length - length of string
 *
 * @return id
 */
export const randomId = (length: number = 16) => {
  const chars =
    "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRTUVWXYZ01234567890123456789";

  const chars_length = chars.length;

  let id = "";

  while (id.length < length) {
    id += chars[Math.floor(Math.random() * chars_length)];
  }

  return id;
};
