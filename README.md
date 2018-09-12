# promise-watch
[![Build Status](https://travis-ci.org/higuri/promise-watch.svg?branch=master)](https://travis-ci.org/higuri/promise-watch)

This module watches promises which have been made, and tells whether all promises have been settled or not.

### settled

> A Promise is in one of these states:  
> ・pending: initial state, neither fulfilled nor rejected.  
> ・fulfilled: meaning that the operation completed successfully.  
> ・rejected: meaning that the operation failed.  
> Note: A promise is said to be settled if it is either fulfilled or rejected, but not pending.  
> [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description)  

## Installing

## Sample Usage
[Demo Page](https://higuri.github.io/promise-watch/)

### Code Snippet from Demo Page
```javascript
import {Watch} from "promise-watch";

// creadte Watch instance
const watch = new Watch();

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
  log(textarea, "Start Waiting...");
  // run asynchronous task through watch.run()
  await watch.run(start3SecTask());
  log(textarea, "Waited for 3 sec");
});
```
[full version](https://higuri.github.io/promise-watch/script.js)

## class `Watch`
### Method
#### `run(_: Promise<any>): Promise<any>`
### Method (for subscribing events)
#### `onAdded(_: (Promise<any>) => void): void`
#### `onAllSettled(_: () => void): void`
#### `onOneSettled(_: (Promise<any>) => void): void`
### Property
#### `pendings: Array<Promise<any>>`

