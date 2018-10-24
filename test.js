// @flow

const cases = require('jest-in-case')
const { transform } = require('@babel/core')

jest.mock('ptils', () => ({
  hasAnyDep: jest.fn(() => false),
}))

function snapshot(name, input) {
  const { code } = transform(input, {
    presets: [require.resolve('.')],
  })
  expect(code).toMatchSnapshot(name)
}

cases(
  'plugin snapshot',
  ({ name, input }) => {
    snapshot(name, input)
  },
  [
    { name: 'object reset spread', input: 'const a = {...foo}' },
    {
      name: 'class-properties',
      input: `
        class A { a = () => 'hello' }
      `,
    },
    {
      name: 'dead code',
      input: `
        function hoge() {var x = 1;}
      `,
    },
    {
      name: 'import',
      input: `
        import React from 'react';
      `,
    },
  ]
)

// cases(
// 'presets snapshot',
// ({ name, input }) => {
// snapshot(name, input)
// },
// [
// {
// name: 'flowtype',
// input: `
// // @flow
// type A = string
// const a: A = 'hello'`,
// },
// {
// name: 'react',
// input: `
// const A = () => <div>hello</div>
// `,
// },
// ]
// )
