# promise-watch #gh-pages
Source for https://higuri.github.io/promise-watch

## Launch locally
```
yarn install
yarn start
```
and go to http://127.0.0.1:8080/

## About files
### `index.html`
Published as https://higuri.github.io/promise-watch/index.html
### `jscss/style.css`
Included from `index.html`.
### `jscss/bundle.js`
Included from `index.html`.
Generated with `yarn build` (= browserify).
### `jscss/main.js`
Source file of `bundle.js`.
You have to run `yarn build` when you update this file.
