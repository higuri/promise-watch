// dist.js
const fs = require('fs-extra');
const path = require('path');
const {clean, buildSrc, builtSrcDir} = require('./lib/build.js');
const dist = 'dist';
const entries = ['watch', 'event'];
const exts = ['.js', '.d.ts'];

(async() => {
  try {
    clean(); 
    await buildSrc();
    fs.removeSync(dist);
    fs.mkdirSync(dist);
    for (const f of entries) {
      for (const e of exts) {
        fs.copySync(
          path.join(builtSrcDir, f + e),
          path.join(dist, f + e));
      }
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
