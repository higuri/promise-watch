// Sample_tests.ts

import { assert } from "chai";
import { expect } from "chai";
import { Sample } from "../src/Sample";

// assert style
describe("Sample", () => {
    it("should have name which we passed", () => {
      const obj = new Sample("Foo");
      // assert style
      assert.equal(obj.name, "Foo");
      // expect style
      expect(obj.name).to.equal("Foo");
    });
});
