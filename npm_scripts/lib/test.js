// lib/test.js
const path = require('path');
const { spawn } = require('child_process');

// test()
function test() {
  const args = [path.join('build', 'test')];
  console.log(['mocha'].concat(args).join(' ') + ' ...');
  return new Promise((resolve, reject) => {
    spawn(
      'mocha', args,
      { stdio: 'inherit' })
    .on('exit', () => {
      resolve();
    })
    .on('error', (err) => {
      reject(err);
    });
  });
}

// clean()
function clean() {
}

module.exports = { test, clean };
