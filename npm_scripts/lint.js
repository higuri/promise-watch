// lint.js
const { lint } = require('./lib/lint.js');
lint().catch((err) => {
  console.log(err);
  process.exit(code);
});
