// test_watch.js
const fs = require('fs');
const {buildTest} = require('./lib/build.js');
const {lintTest} = require('./lib/lint.js');
const {runTest} = require('./lib/test.js');
const {lintOnBuild} = require('./config.js');

const watch = buildTest(true);
if (lintOnBuild) {
  // fs.watch
  watch.on('compiled', async() => {
    try {
      await lintTest();
      await runTest();
    } catch(err) {}
  });
  watch.on('exit', (code) => {
    processs.exit(code);
  });
}
