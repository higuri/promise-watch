(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// script.js

const {PromiseWatch} = require("promise-watch");

// start3SecTask()
function start3SecTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(3000), 3000);
  });
}

// log()
function log(textarea, msg) {
  textarea.value += msg + "\n";
}

// main()
function main() {
  // loader
  const loader = document.querySelector("#loader");
  // textarea
  const textarea = document.querySelector("#textarea");
  // button
  const button = document.querySelector("#button");

  ///

  // create a watch object
  const watch = new PromiseWatch();
  // subscribe 'added' event
  watch.onAdded(() => {
    if (loader.classList.contains("hidden")) {
      loader.classList.remove("hidden");
    }
  });
  // subscribe 'allSettled' event
  watch.onAllSettled(() => {
    loader.classList.add("hidden");
  });

  button.addEventListener("click", async() => {
    log(textarea, "Start a task...");
    // run an asynchronous task through watch object
    await watch.run(start3SecTask());
    log(textarea, "Task finished !!");
  });
}

window.onload = main;

},{"promise-watch":3}],2:[function(require,module,exports){
"use strict";
// event.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Event
class Event {
    // Event()
    constructor() {
        this.handlers = [];
    }
    // emit()
    emit(data) {
        for (const h of this.handlers) {
            h(data);
        }
    }
    // subscribe()
    subscribe(handler) {
        this.handlers.push(handler);
    }
}
exports.Event = Event;

},{}],3:[function(require,module,exports){
"use strict";
// main.ts
Object.defineProperty(exports, "__esModule", { value: true });
const watch_1 = require("./watch");
exports.PromiseWatch = watch_1.PromiseWatch;

},{"./watch":4}],4:[function(require,module,exports){
"use strict";
// watch.ts
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("./event");
// PromiseWatch
class PromiseWatch {
    constructor() {
        // promises:
        this.promises = new Array();
        // added:
        this.added = new event_1.Event();
        // oneSettled:
        this.oneSettled = new event_1.Event();
        // allSettled:
        // TODO: Event<void>
        this.allSettled = new event_1.Event();
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
exports.PromiseWatch = PromiseWatch;

},{"./event":2}]},{},[1]);
