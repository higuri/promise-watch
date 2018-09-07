// build_watch.js
const { build } = require('./lib/build.js');
build(true).catch((code) => {
  process.exit(code);
});
