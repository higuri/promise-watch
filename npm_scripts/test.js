// test.js
const { build } = require('./lib/build.js');
const { test } = require('./lib/test.js');
build().then(() => {
  return test(); 
}).catch((code) => {
  process.exit(code);
});
