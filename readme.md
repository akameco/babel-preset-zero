# babel-preset-zero

[![Build Status](https://travis-ci.org/akameco/babel-preset-zero.svg?branch=master)](https://travis-ci.org/akameco/babel-preset-zero)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> babelrc for zero config

## Install

```
$ yarn add --dev babel-preset-zero
```

## Usage

```js
{
  "presets": ["zero"]
}
```

### Presets

- [babel-preset-env](https://github.com/babel/babel-preset-env)
- [babel-preset-flow](https://github.com/babel/babel/tree/master/packages/babel-preset-flow) (if flow-bin exist)
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) (if react exist)

### Plugins

- [babel-plugin-transform-object-rest-spread](https://github.com/babel/babel)
- [babel-plugin-transform-class-properties](https://github.com/babel/babel)
- [babel-plugin-minify-dead-code-elimination](https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-dead-code-elimination)
- [babel-macros](https://github.com/kentcdodds/babel-macros)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/babel-preset-zero/commits?author=akameco "Code") [📖](https://github.com/akameco/babel-preset-zero/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/babel-preset-zero/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
