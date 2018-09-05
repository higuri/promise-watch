// build.js
const { build } = require('./lib/build.js');
build().catch((err) => {
  console.log(err);
  process.exit(code);
});
