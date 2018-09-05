// test.js
const { build } = require('./lib/build.js');
const { test } = require('./lib/test.js');
build().then(() => {
  return test(); 
}).catch((err) => {
  console.log(err);
  process.exit(code);
});
