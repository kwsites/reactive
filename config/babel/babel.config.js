module.exports = (api) => ({
   presets: [
      [require('@babel/preset-env'), {useBuiltIns: 'usage', corejs: {version: 3}}],
      [require('@babel/preset-typescript'), {allowNamespaces: true, allowDeclareFields: true}],
      [require('@babel/preset-react'), {
         useBuiltIns: true,
         development: api.env(['development', 'test']),
         runtime: 'automatic'
      }],
   ],
   plugins: [
      [require('@babel/plugin-proposal-class-properties'), {loose: true}],
      [require('@babel/plugin-proposal-private-methods'), {loose: true}],
      [require('babel-plugin-lodash')],
   ],
   env: {
      cjs: {presets: [[require('@babel/preset-env'), {modules: 'cjs'}]]},
      esm: {presets: [[require('@babel/preset-env'), {modules: false}]]},
   }
});
