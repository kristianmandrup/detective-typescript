### detective-typescript [![Build Status](http://img.shields.io/travis/pahen/detective-typescript/master.svg?style=flat-square)](https://travis-ci.org/pahen/detective-typescript) [![npm](http://img.shields.io/npm/v/detective-typescript.svg)](https://npmjs.org/package/detective-typescript) [![npm](http://img.shields.io/npm/dm/detective-typescript.svg)](https://npmjs.org/package/detective-typescript)

> Get the dependencies of TypeScript module

`npm install detective-typescript`

### Usage

```js
var detective = require('detective-typescript');

var mySourceCode = fs.readFileSync('myfile.js', 'utf8');

// Pass in a file's content or an AST
var dependencies = detective(mySourceCode);

// parse tsx file (ie. .ts with JSX included)
const filePath = path.join(__dirname, 'myfile.tsx')
var mySourceCode = fs.readFileSync(filePath, 'utf8');

// You can also pass parser configuration options:

const config = {
  filePath: filePath, // auto-detect setting jsx option based on file extension
  loc: true,
  range: true,
  tokens: true,
  errorOnUnknownASTType: true,
  useJSXTextNode: true,
  ecmaFeatures: {
    // should not be passed when filePath option set
    // will auto detect jsx setting based on file extension
    // jsx: true
  }
};

dependencies = detective(mySourceCode, config);
```

#### License

MIT
