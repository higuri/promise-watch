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
```
npm install promise-watch
```

## Sample Usage
[Demo Page](https://higuri.github.io/promise-watch/)

### Code Snippet from Demo Page
```javascript
import {PromiseWatch} from "promise-watch";

// create a watch instance
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
  // run an asynchronous task through watch.run()
  await watch.run(start3SecTask());
  log(textarea, "Task finished !!");
});
```
[full version](https://higuri.github.io/promise-watch/script.js)

## class `PromiseWatch`
### Method
#### `run(_: Promise<any>): Promise<any>`
### Method (for subscribing events)
#### `onAdded(_: (Promise<any>) => void): void`
#### `onAllSettled(_: () => void): void`
#### `onOneSettled(_: (Promise<any>) => void): void`
### Property
#### `pendings: Array<Promise<any>>`

