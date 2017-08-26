# React Webpack Typescript Starter
Minimal starter kit with hot module replacement for fast development.

**Main features**
* [React](https://facebook.github.io/react/) (15.x)
* [Webpack](https://webpack.js.org/) (3.x)
* [Typescript](https://www.typescriptlang.org/) (2.x)
* [Hot Module Replacement (HMR)](https://webpack.js.org/guides/hmr-react/) using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* [Babel](http://babeljs.io/) (6.x)
* [SASS](http://sass-lang.com/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
* Production build script

**Additional features**
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (3.x)
* Code quality (linting)
  * Typescript - [TSLint](https://palantir.github.io/tslint/) (5.x)
  * SASS/CSS - [stylelint](http://stylelint.io/) (rules: [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard))
  
## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm start`

* Compiles the app
* Starts a web server and serve the app @ `http://localhost:8080`
* Watches for changes and injects them using hot module replacement (HMR) - without reloading the browser.

**Production**
* `npm run build` - Build app to `/dist/bundle.min.js` 
* `npm run start-prod` - Build _and_ serve app @ `http://localhost:3000`

**Other commands**
* `npm run test` - Run tests
* `npm run lint` - Run Typescript and SASS linter
* `npm run lint:ts` - Run Typescript linter
* `npm run lint:sass` - Run SASS linter
