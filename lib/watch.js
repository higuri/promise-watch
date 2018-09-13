// watch.ts
import { Event } from "./event.js";
// PromiseWatch
export class PromiseWatch {
    constructor() {
        // promises:
        this.promises = new Array();
        // added:
        this.added = new Event();
        // oneSettled:
        this.oneSettled = new Event();
        // allSettled:
        // TODO: Event<void>
        this.allSettled = new Event();
    }
    // pendings:
    get pendings() {
        return this.promises;
    }
    // onAdded()
    onAdded(h) {
        this.added.subscribe(h);
    }
    // onOneSettled()
    onOneSettled(h) {
        this.oneSettled.subscribe(h);
    }
    // onAllSettled()
    onAllSettled(h) {
        this.allSettled.subscribe(h);
    }
    // run()
    run(promise) {
        promise.then(() => this.settle(promise));
        promise.catch(() => this.settle(promise));
        this.add(promise);
        return promise;
    }
    ///
    // add()
    add(promise) {
        this.promises.push(promise);
        this.added.emit(promise);
    }
    // settle()
    settle(promise) {
        this.promises = this.promises.filter((p) => p !== promise);
        this.oneSettled.emit(promise);
        if (this.promises.length === 0) {
            this.allSettled.emit(null);
        }
    }
}
//# sourceMappingURL=watch.js.map
