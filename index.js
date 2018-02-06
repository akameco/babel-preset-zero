// @flow
'use strict'
const { hasAnyDep } = require('ptils')

const isTest = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test'

const envTargets = isTest ? { node: 'current' } : { node: '6' }

const presets = [
  [
    require.resolve('babel-preset-env'),
    { targets: envTargets, useBuiltIns: true },
  ],
  hasAnyDep('flow-bin') && require.resolve('babel-preset-flow'),
  hasAnyDep('react') && require.resolve('babel-preset-react'),
].filter(Boolean)

const plugins = [
  [
    require.resolve('babel-plugin-transform-object-rest-spread'),
    { useBuiltIns: true },
  ],
  require.resolve('babel-plugin-transform-class-properties'),
  require.resolve('babel-plugin-minify-dead-code-elimination'),
]

module.exports = () => {
  return {
    presets,
    plugins,
  }
}
