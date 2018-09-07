// all.js
const fs = require('fs');
const path = require('path');
const { build } = require('./lib/build.js');
const { lint } = require('./lib/lint.js');
const { test } = require('./lib/test.js');
build().then(() => {
  return lint();
}).then(() => {
  return test();
}).catch((code) => {
  process.exit(code);
});
