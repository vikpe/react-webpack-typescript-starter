# React Webpack Typescript Starter
Minimal starter kit with React, Webpack (with Hot Module Replacement), Typescript, Babel and SASS.

**Features**
* [React](https://facebook.github.io/react/) (15.x)
* [Webpack](https://webpack.js.org/) (2.x)
  * [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/) using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* [Typescript](https://www.typescriptlang.org/) (2.x)
 * Compiled using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (3.x)
 * [TSLint](https://palantir.github.io/tslint/) (4.x) 
* [Babel](http://babeljs.io/) (6.x)
* [SASS](http://sass-lang.com/)
  * [stylelint](http://stylelint.io/) (rules: [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard))
  
**TODO**
* [ ] Build script
  * [ ] Asset revisioning / cache bursting
  * [ ] Image minification
* [ ] Tests
  * [ ] Jest
* [ ] React router

## Installation
1. Clone/download repo
2. `npm install`

## Usage
**General**

`npm start`

* Compiles the app
* Starts a web server hosting the app @ `http://localhost:8080`
* Watches for changes and injects them without reloading the browser

**Other commands**
* `npm run lint` - Run Typescript and SASS linter
* `npm run lint:ts` - Run Typescript linter
* `npm run lint:sass` - Run SASS linter

## Resources
* [Create React App (by FaceBook)](https://github.com/facebookincubator/create-react-app) - Good starting point when learning React
* [Webpack & Typescript](https://webpack.js.org/guides/webpack-and-typescript)
