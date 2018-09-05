// build_watch.js
const { build } = require('./lib/build.js');
build(true).catch((err) => {
  console.log(err);
  process.exit(code);
});
