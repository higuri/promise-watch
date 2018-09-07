// test.js
const {lintOnBuild} = require('./config.js');
const {buildTest} = require('./lib/build.js');
const {runTest} = require('./lib/test.js');
const watch = false;
buildTest(watch, lintOnBuild).then(() => {
  return runTest(); 
}).catch((code) => {
  process.exit(code);
});
