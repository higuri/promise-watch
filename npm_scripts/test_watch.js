// test_watch.js
const {buildTest} = require('./lib/build.js');
const {runTest} = require('./lib/test.js');
const {lintOnBuild} = require('./config.js');
const watch = true;

(async () => {
  try {
    await buildTest(watch, lintOnBuild);
    await runTest();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
