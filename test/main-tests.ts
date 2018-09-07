// main-tests.ts

import { assert } from "chai";
import { expect } from "chai";
import { Main } from "../src/main";

describe("Main", () => {
  it("should have name which we passed", () => {
    const obj = new Main("Foo");
    // assert style
    assert.equal(obj.name, "Foo");
    // expect style
    expect(obj.name).to.equal("Foo");
  });
});
