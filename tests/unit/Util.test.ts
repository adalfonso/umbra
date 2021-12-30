import { Entity } from "../../src/Entity/Entity";
import { collides, randomId } from "../../src/Util";
import { expect } from "chai";

describe("Util", function () {
  describe("collides", () => {
    type entity_spec = [number, number, number, number];

    const tests: [string, entity_spec, entity_spec, boolean][] = [
      ["detects TL collision", [0, 0, 10, 10], [-9, -9, 10, 10], true],
      ["detects TR collision", [0, 0, 10, 10], [9, -9, 10, 10], true],
      ["detects BR collision", [0, 0, 10, 10], [9, 9, 10, 10], true],
      ["detects BL collision", [0, 0, 10, 10], [-9, 9, 10, 10], true],
      ["detects inside collision", [0, 0, 10, 10], [2, 2, 4, 4], true],
      ["detects inverse TL collision", [-9, -9, 10, 10], [0, 0, 10, 10], true],
      ["detects inverse TR collision", [9, -9, 10, 10], [0, 0, 10, 10], true],
      ["detects inverse BR collision", [9, 9, 10, 10], [0, 0, 10, 10], true],
      ["detects inverse BL collision", [-9, 9, 10, 10], [0, 0, 10, 10], true],
      ["detects inverse inside collision", [2, 2, 4, 4], [0, 0, 10, 10], true],
      ["doesnt detect non-collision", [0, 0, 10, 10], [2, 20, 10, 10], false],
      ["doesnt detect non-y-collision", [0, 0, 10, 10], [0, 20, 10, 10], false],
      ["doesnt detect non-x-collision", [0, 0, 10, 10], [20, 0, 10, 10], false],
    ];

    tests.forEach(([label, a, b, expected]) => {
      it(label, () => {
        const a_entity = <Entity>{
          position: () => ({ x: a[0], y: a[1] }),
          size: () => ({ x: a[2], y: a[3] }),
        };

        const b_entity = <Entity>{
          position: () => ({ x: b[0], y: b[1] }),
          size: () => ({ x: b[2], y: b[3] }),
        };

        expect(collides(a_entity, b_entity)).to.equal(expected);
      });
    });
  });

  describe("randomId", () => {
    it("generate a random ID with no length provided", () => {
      const id = randomId();

      expect(typeof id).to.equal("string");
      expect(id.length).to.equal(16);
    });

    it("generate a random ID with a length provided", () => {
      const id = randomId(32);

      expect(typeof id).to.equal("string");
      expect(id.length).to.equal(32);
    });
  });
});
