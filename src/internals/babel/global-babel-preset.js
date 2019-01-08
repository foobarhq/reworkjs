/* eslint-disable import/no-commonjs */

/*
 * Babel preset that can be run on the whole project (node_modules included)
 *
 * Only transpiles content that would be able to be run on its own, eg.
 * - stable ES features
 * - optimisations
 */

module.exports = function buildPreset(api, opts = {}) {

  const preset = {
    presets: [
      [require('@babel/preset-env').default, {
        modules: false,
        ...opts['@babel/preset-env'],
      }],
    ],

    plugins: [
      require('@babel/plugin-syntax-dynamic-import').default,
      [require('@babel/plugin-transform-runtime').default, {
        corejs: false,
        helpers: true,
        regenerator: true,

        // https://github.com/webpack/webpack/issues/4039#issuecomment-273804003
        // we can't have both `import` and `module.exports` in the same file.
        // we can't
        useESModules: false,
        ...opts['@babel/plugin-transform-runtime'],
      }],
    ],
  };

  if (process.env.BABEL_ENV === 'production') {
    preset.plugins.push(
      require('babel-plugin-lodash'),
      require('@babel/plugin-transform-react-constant-elements').default,
      [require('babel-plugin-transform-react-remove-prop-types').default, {
        mode: 'remove',
        removeImport: true,
        ...opts['babel-plugin-transform-react-remove-prop-types'],
      }],
    );
  }

  return preset;
};