// watch.ts

import {Event, EventHandler} from "./event";

// Watch
export class Watch {

  // promises:
  private promises = new Array<Promise<any>>();
  // added:
  private added = new Event<Promise<any>>();
  // oneSettled:
  private oneSettled = new Event<Promise<any>>();
  // allSettled:
  // TODO: Event<void>
  private allSettled = new Event<any>();

  // pendings:
  public get pendings(): Array<Promise<any>> {
    return this.promises;
  }

  // onAdded()
  public onAdded(h: EventHandler<Promise<any>>): void {
    this.added.subscribe(h);
  }

  // onOneSettled()
  public onOneSettled(h: EventHandler<Promise<any>>): void {
    this.oneSettled.subscribe(h);
  }

  // onAllSettled()
  public onAllSettled(h: EventHandler<any>): void {
    this.allSettled.subscribe(h);
  }

  // run()
  public run(promise: Promise<any>): Promise<any> {
    promise.then(() => this.settle(promise));
    promise.catch(() => this.settle(promise));
    this.add(promise);
    return promise;
  }

  ///

  // add()
  private add(promise: Promise<any>): void {
    this.promises.push(promise);
    this.added.emit(promise);
  }
  // settle()
  private settle(promise: Promise<any>): void {
    this.promises = this.promises.filter((p) => p !== promise);
    this.oneSettled.emit(promise);
    if (this.promises.length === 0) {
      this.allSettled.emit(null);
    }
  }
}
