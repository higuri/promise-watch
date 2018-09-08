// build_watch.js
const fs = require('fs');
const {buildSrc} = require('./lib/build.js');
const {lintSrc} = require('./lib/lint.js');
const {lintOnBuild} = require('./config.js');

const watch = buildSrc(true);
if (lintOnBuild) {
  // fs.watch
  watch.on('compiled', async() => {
    try {
      await lintSrc();
      console.log('Done.');
    } catch(err) {}
  });
  watch.on('exit', (code) => {
    processs.exit(code);
  });
}
