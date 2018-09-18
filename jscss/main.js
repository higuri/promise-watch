// main.js

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
  // loader: loading icon
  const loader = document.querySelector("#loader");
  // textarea: status lines
  const textarea = document.querySelector("#textarea");
  // button: start a task
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
    // run an asynchronous task through watch.run()
    await watch.run(start3SecTask());
    log(textarea, "Task finished !!");
  });
}

window.onload = main;
