// build_watch.js
const fs = require('fs');
const {buildSrc} = require('./lib/build.js');
const {lintSrc} = require('./lib/lint.js');
const {lintOnBuild} = require('./config.js');

(async () => {
  const build = buildSrc(true);
  if (lintOnBuild) {
    build.on('compiled', async() => {
      try {
        await lintSrc();
        console.log('Done.');
      } catch(_) {}
    });
  }
  await build;
})();
