// lib/lint.js
const path = require('path');
const { spawn } = require('child_process');

// lint()
function lint() {
  const args = [
    '--config', path.join('config', 'tslint.json'),
    '--project', path.join('config', 'tsconfig.json')
  ];
  console.log(['tslint'].concat(args).join(' ') + ' ...');
  return new Promise((resolve, reject) => {
    spawn(
      'tslint', args,
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

module.exports = { lint, clean };
