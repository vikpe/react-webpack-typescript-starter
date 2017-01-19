# React Webpack Typescript Starter
Minimal starter kit with hot module replacement for fast development.

**Main features**
* [React](https://facebook.github.io/react/) (15.x)
* [Webpack](https://webpack.js.org/) (2.x)
* [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/) using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* [Typescript](https://www.typescriptlang.org/) (2.x)
* [Babel](http://babeljs.io/) (6.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications

**Additional features**
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (3.x)
* Code quality (linting)
  * Typescript - [TSLint](https://palantir.github.io/tslint/) (4.x)
  * SASS/CSS - [stylelint](http://stylelint.io/) (rules: [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard))
  
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
* `npm run test` - Run tests (Jest)

## Resources
* [Create React App (by FaceBook)](https://github.com/facebookincubator/create-react-app) - Good starting point when learning React
* [Webpack & Typescript](https://webpack.js.org/guides/webpack-and-typescript)

## TODO
* [ ] Build script
  * [ ] Asset revisioning / cache bursting
* [ ] React router
