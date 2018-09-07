// test_watch.js
const fs = require('fs-extra');
const path = require('path');
const { buildTest } = require('./lib/build.js');
const { runTest } = require('./lib/test.js');

let changed = false;
const builddir = path.join('build', 'src');
fs.ensureDirSync(builddir);
fs.watch(builddir, () => {
  changed = true;
});
setInterval(() => {
  if (changed) {
    runTest().then(() => {
      console.log('Done.');
    }).catch(() => {});
    changed = false;
    changed = false;
  }
}, 1000);

buildTest(true).catch((code) => {
  process.exit(code);
});
