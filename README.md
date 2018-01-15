# generator-edu-front-common-component [![Build Status][travis-image]][travis-url]

## Structure

```
.
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── bower.json
├── gulpfile.js
├── package.json
├── res
│   └── component-{{args.module}}
├── src
│   └── {{args.name}}
│       ├── component.js
│       ├── setting.js
│       ├── wap
│       │   ├── component.html
│       │   ├── component.scss
│       │   └── ui.js
│       └── web
│           ├── component.html
│           ├── component.scss
│           └── ui.js
├── test
│   ├── coverage.html
│   ├── hook.js
│   ├── test.html
│   ├── test.js
│   ├── util.js
│   └── {{args.name}}
│       ├── cases.js
│       ├── test.js
│       ├── test_wap.js
│       └── test_web.js
└── tutorials
    └── {{args.name}}
        └── demo.html
```

## Installation

First, install [Yeoman](http://yeoman.io) and generator-edu-front-common-component using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-edu-front-common-component
```

Then generate your new project:

```bash
yo edu-front-common-component
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [dong.wang]()


[npm-image]: https://badge.fury.io/js/generator-edu-front-common-component.svg
[npm-url]: https://npmjs.org/package/generator-edu-front-common-component
[travis-image]: https://travis-ci.org/techbirds/generator-edu-front-common-component.svg?branch=master
[travis-url]: https://travis-ci.org/techbirds/generator-edu-front-common-component
[daviddm-image]: https://david-dm.org/techbirds/generator-edu-front-common-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/techbirds/generator-edu-front-common-component
[coveralls-image]: https://coveralls.io/repos/techbirds/generator-edu-front-common-component/badge.svg
[coveralls-url]: https://coveralls.io/r/techbirds/generator-edu-front-common-component
