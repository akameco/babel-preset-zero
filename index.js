// @flow
'use strict'
const { hasAnyDep } = require('ptils')

const isTest = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test'

const envTargets = isTest ? { node: 'current' } : { node: '6' }

module.exports = () => ({
  presets: [
    [
      require.resolve('@babel/preset-env'),
      { targets: envTargets, loose: true, modules: false },
    ],
    hasAnyDep('flow-bin') && require.resolve('@babel/preset-flow'),
    hasAnyDep('react') && require.resolve('@babel/preset-react'),
  ].filter(Boolean),
  plugins: [
    require.resolve('babel-plugin-macros'),
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true },
    ],
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      { loose: true, useBuiltIns: true },
    ],
    require.resolve('babel-plugin-minify-dead-code-elimination'),
    require.resolve('@babel/plugin-transform-modules-commonjs'),
  ],
})
