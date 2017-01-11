const tsc       = require('typescript');
const babelJest = require('babel-jest');
const tsConfig  = require('./../../tsconfig.json');

module.exports = {
    process(src, path) {
        const isTs             = path.endsWith('.ts');
        const isTsx            = path.endsWith('.tsx');
        const isTypescriptFile = (isTs || isTsx);

        if ( isTypescriptFile ) {
            src = tsc.transpileModule(
                src,
                {
                    compilerOptions: tsConfig.compilerOptions,
                    fileName:        path
                }
            );
            src = src.outputText;

            // update the path so babel can try and process the output
            path = path.substr(0, path.lastIndexOf('.')) + (isTs ? '.js' : '.jsx') || path;
        }

        const isJsFile = (path.endsWith('.js') || path.endsWith('.jsx'));

        if ( isJsFile ) {
            return babelJest.process(src, path);
        }
        else {
            return src;
        }
    },
};
