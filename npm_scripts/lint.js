// lint.js
const { lint } = require('./lib/lint.js');
lint().catch((code) => {
  process.exit(code);
});
