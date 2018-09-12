// build_watch.js
const {buildSrc} = require('./lib/build.js');
const {lintOnBuild} = require('./config.js');
const watch = true;

(async () => {
  try {
    await buildSrc(watch, lintOnBuild);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
