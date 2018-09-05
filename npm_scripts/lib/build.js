// lib/build.js
const fs = require('fs-extra');
const { spawn } = require('child_process');

// build
function build(watch) {
  let args = ['--project', 'config'];
  if (watch) {
    args.push('--watch');
  }
  console.log(['tsc'].concat(args).join(' ') + ' ...');
  return new Promise((resolve, reject) => {
    spawn(
      'tsc', args,
      { stdio: 'inherit' })
    .on('exit', () => {
      resolve();
    })
    .on('error', (err) => {
      reject(err);
    });
  });
}

// clean
function clean() {
  fs.removeSync('build');
}

module.exports = { build, clean };
