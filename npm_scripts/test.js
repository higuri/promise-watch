// test.js
const {buildTest} = require('./lib/build.js');
const {lintTest} = require('./lib/lint.js');
const {runTest} = require('./lib/test.js');
const {lintOnBuild} = require('./config.js');
(async() => {
  try {
    await buildTest();
    if (lintOnBuild) {
      await lintTest();
    }
    await runTest();
  } catch (err) {
    console.log('Error: ' + err);
    process.exit(1);
  }
})();
