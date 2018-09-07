// build_watch.js
const {lintOnBuild} = require('./config.js');
const {buildSrc} = require('./lib/build.js');
const {lintSrc} = require('./lib/lint.js');
const watch = true;
buildSrc(watch, lintOnBuild).catch((code) => {
  process.exit(code);
});
