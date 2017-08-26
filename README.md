# React Webpack Typescript Starter
Minimal starter kit with hot module replacement (HMR) for rapid development.

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
* Code quality (linting) for Typescript and SASS/CSS.
  
## Installation
1. Clone/download repo
2. `npm install`

## Usage
**Development**

`npm run start-dev`

* Build the app (continously) using hot module replacement
* App served @ `http://localhost:8080` 

**Production**

`npm run start-prod`

* Build app (once)
* App served @ `http://localhost:3000`

##All commands

Command | Description
--- | ---
`npm run start-dev` | Build app (continously) and serve @ `http://localhost:8080` (development, **HMR enabled**)
`npm run start-prod` | Build app (once) and serve @ `http://localhost:3000` (production, **HMR disabled**)
`npm run build` | Build app to `/dist/bundle.min.js` 
`npm run test` | Run tests
`npm run lint` | Run Typescript and SASS linter
`npm run lint:ts` | Run Typescript linter
`npm run lint:sass` | Run SASS linter
`npm run start` | (alias of `npm run start-dev`)
