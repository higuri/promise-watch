// build.js
const {lintOnBuild} = require('./config.js');
const {buildSrc} = require('./lib/build.js');
const watch = false;
buildSrc(watch, lintOnBuild)
.catch((code) => {
  process.exit(code);
});
