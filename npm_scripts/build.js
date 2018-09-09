// build.js
const {buildSrc} = require('./lib/build.js');
const {lintSrc} = require('./lib/lint.js');
const {lintOnBuild} = require('./config.js');

(async() => {
  try {
    await buildSrc();
    if (lintOnBuild) {
      await lintSrc();
    }
  } catch (_) {
    process.exit(1);
  }
})();
