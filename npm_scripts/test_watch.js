// test_watch.js
const fs = require('fs');
const {buildTest} = require('./lib/build.js');
const {lintTest} = require('./lib/lint.js');
const {runTest} = require('./lib/test.js');
const {lintOnBuild} = require('./config.js');

(async () => {
  const build = buildTest(true);
  if (lintOnBuild) {
    build.on('compiled', async() => {
      try {
        await lintTest();
        await runTest();
      } catch(_) {}
    });
  }
  await build;
})();
