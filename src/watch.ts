// watch.ts

import {Event, EventHandler} from "./event";

// Watch
export class Watch {

  // promises:
  private promises = new Array<Promise<any>>();
  // added:
  private added = new Event<Promise<any>>();
  // removed:
  private removed = new Event<Promise<any>>();

  // waitings:
  public get waitings(): Array<Promise<any>> {
    return this.promises;
  }

  // run()
  public run(promise: Promise<any>): Promise<any> {
    promise.then(() => this.remove(promise));
    promise.catch(() => this.remove(promise));
    this.add(promise);
    return promise;
  }

  // onAdded()
  public onAdded(h: EventHandler<Promise<any>>): void {
    this.added.subscribe(h);
  }

  // onRemoved()
  public onRemoved(h: EventHandler<Promise<any>>): void {
    this.removed.subscribe(h);
  }

  // add()
  private add(promise: Promise<any>): void {
    this.promises.push(promise);
    this.added.emit(promise);
  }
  // remove()
  private remove(promise: Promise<any>): void {
    this.promises = this.promises.filter((p) => p !== promise);
    this.removed.emit(promise);
  }
}
