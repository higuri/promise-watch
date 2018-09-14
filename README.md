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

## Usage example
https://higuri.github.io/promise-watch/

### Code snippet from example page
```javascript
const {PromiseWatch} = require("promise-watch");

function log(textarea, msg) { ... }
async function start3SecTask() { ... }

// loader: loading icon
const loader = document.querySelector(...);
// textarea: status lines
const textarea = document.querySelector(...);
// button: start a task
const button = document.querySelector(...);

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
[full version](https://higuri.github.io/promise-watch/jscss/main.js)

## class `PromiseWatch`
### Constructor
Example:
```javascript
const watch = new PromiseWatch();
```

### `run(_: Promise<any>): Promise<any>`
Example:
```javascript
watch.run(asyncFunctionFoo(...))
.then(() => {
  // lines to be executed after Foo() ...
});
```
```javascript
await watch.run(someAsyncFunctionFoo(...));
// lines to be executed after Foo() ...
```
```javascript
watch.run(someAsyncFunctionFoo(...));
// lines to be executed in asynchronously with Foo() ...
```

### `onAdded(_: (Promise<any>) => void): void`
Example:
```javascript
watch.onAdded(() => {
  console.log("There are one ore more pending tasks!");
});
```

### `onAllSettled(_: () => void): void`
Example:
```javascript
watch.onAllSettled(() => {
  console.log("There are no pending tasks!");
});
```

### `onOneSettled(_: (Promise<any>) => void): void`
Example:
```javascript
watch.onOneSettled(() => {
  console.log("A promise is resolved or rejected!");
});
```

### `pendings: Array<Promise<any>>`
Example:
```javascript
console.log(`Number of pending tasks: ${watch.pendings.length}`);
```
