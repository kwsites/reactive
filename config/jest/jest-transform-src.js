const babelJest = require('babel-jest');
const transformer = (babelJest.default || babelJest).createTransformer()

module.exports = Object.assign(Object.create(transformer), {
   getCacheKey (fileData, filename, transformOptions) {
      return transformer.getCacheKey.call(this, fileData, filename, patchedOptions(transformOptions));
   },
   process (content, filename, options) {
      return transformer.process.call(this, content, filename, patchedOptions(options));
   }
});

function patchedOptions (options) {
   return {...options, config: patchedConfig(options.config)};
}

function patchedConfig (config = {}) {
   return {...config, cwd: config.rootDir};
}
