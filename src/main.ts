// main.ts

import {Watch} from "./watch";
export {Watch};

/*
// Usage:
function wait(msec: number): Promise<number> {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(msec), msec);
  });
}
const watch = new Watch();
let isWaiting = false;
setInterval(() => {
  if (isWaiting) {
    console.log("WAITING ...");
  }
}, 1000);
watch.onAdded(() => {
  console.log(`[added] nWaitings: ${watch.waitings.length}`);
  isWaiting = true;
});
watch.onRemoved(() => {
  console.log(`[removed] nWaitings: ${watch.waitings.length}`);
  if (watch.waitings.length < 1) {
    isWaiting = false;
  }
});
watch.run(wait(5000));
watch.run(wait(500));
watch.run(wait(1000));
*/
