import { expect } from "chai";
import { Entity } from "../../../src/Entity/Entity";
import { Vector } from "../../../src/Math/Vector";

describe("entity", () => {
  describe("size", () => {
    it("gets the size", () => {
      const size = new Vector(1, 1);
      const position = new Vector(2, 2);
      const sut = new Entity(size, position);

      const value = sut.size;
      expect(size.toTuple()).to.deep.equal(value.toTuple());
      expect(size).to.not.equal(value);
    });
  });

  describe("position", () => {
    it("gets the position", () => {
      const size = new Vector(1, 1);
      const position = new Vector(2, 2);
      const sut = new Entity(size, position);

      const value = sut.position;
      expect(position.toTuple()).to.deep.equal(value.toTuple());
      expect(position).to.not.equal(value);
    });
  });

  describe("move", () => {
    it("moves the entity", () => {
      const size = new Vector(1, 1);
      const position = new Vector(2, 2);
      const move = new Vector(-1, 1);
      const expected = new Vector(1, 3);
      const sut = new Entity(size, position);

      const value = sut.move(move);
      expect(expected.toTuple()).to.deep.equal(value.toTuple());
      expect(expected).to.not.equal(value);
    });
  });
});
