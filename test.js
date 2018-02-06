// @flow

const cases = require('jest-in-case')
const { transform } = require('babel-core')

jest.mock('ptils', () => ({
  hasAnyDep: jest.fn(() => true),
}))

function snapshot(name, input) {
  const { code } = transform(input, {
    presets: [require.resolve('.')],
  })
  expect(code).toMatchSnapshot(name)
}

cases(
  'snapshot',
  ({ name, input }) => {
    snapshot(name, input)
  },
  [
    { name: 'object reset spread', input: 'const a = {...foo}' },
    {
      name: 'flowtype',
      input: `
      // @flow
      type A = string
      const a: A = 'hello'`,
    },
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
      name: 'react',
      input: `
        const A = () => <div>hello</div>
      `,
    },
  ]
)
