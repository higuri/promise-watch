// lib/npmbin.js
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');

// binpath()
function binpath(cmd) {
  let retval = path.join('node_modules', '.bin', cmd);
  if (os.platform().startsWith('win')) {
    // '.cmd' needed on PowerShell (not on cmd.exe).
    retval += '.cmd';
  }
  return retval;
}

// run()
function run(cmd, args) {
  console.log([cmd].concat(args).join(' ') + ' ...');
  const cmdpath = binpath(cmd);
  return new Promise((resolve, reject) => {
    spawn(cmdpath, args, { stdio: 'inherit' })
    .on('exit', () => {
      resolve();
    })
    .on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = { run };
