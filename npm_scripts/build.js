// build.js
const { build } = require('./lib/build.js');
build().catch((code) => {
  process.exit(code);
});
