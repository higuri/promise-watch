// lint_watch.js
const fs = require('fs');
const path = require('path');
const { build } = require('./lib/build.js');
const { lint } = require('./lib/lint.js');

const builddir = path.join('build', 'src');
let changed = false;
fs.watch(builddir, () => {
  changed = true;
});
setInterval(() => {
  if (changed) {
    lint().catch((err) => {
      console.log(err);
    });
    changed = false;
  }
}, 1000);

build(true).catch((err) => {
  console.log(err);
  process.exit(code);
});
