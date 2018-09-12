// script.js
import {Watch} from "./lib/watch.js";

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

// loader
const loader = document.querySelector("#loader");
// textarea
const textarea = document.querySelector("#textarea");
// button
const button = document.querySelector("#button");

// watch
const watch = new Watch();
watch.onAdded(() => {
  if (loader.classList.contains("hidden")) {
    loader.classList.remove("hidden");
  }
});
watch.onAllSettled(() => {
  loader.classList.add("hidden");
});
button.addEventListener("click", async() => {
  log(textarea, "Task Started...");
  await watch.run(start3SecTask());
  log(textarea, "Task Done !!");
});
