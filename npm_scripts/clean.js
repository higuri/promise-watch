// clean.js
const build_clean = require('./lib/build').clean;
const lint_clean = require('./lib/lint').clean;
const test_clean = require('./lib/test').clean;
build_clean();
lint_clean();
test_clean();
