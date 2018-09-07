// watch-tests.ts

import { assert } from "chai";
import { Watch } from "../src/watch";

// wait()
function wait(msec: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(msec), msec);
  });
}

describe("Watch", () => {
  it("should be used like this", () => {
    const watch = new Watch();
    let isWaiting = false;
    watch.onAdded(() => {
      isWaiting = true;
    });
    watch.onRemoved(() => {
      if (watch.waitings.length < 1) {
        isWaiting = false;
      }
    });
    watch.run(wait(5000));
    watch.run(wait(500));
    watch.run(wait(1000));
    let msec = 0;
    const timer = setInterval(() => {
      msec += 1000;
      if (msec < 5000) {
        assert.isTrue(isWaiting);
      } else if (msec < 8000) {
        assert.isFalse(isWaiting);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  });
});
