/* eslint-env mocha */
const path = require('path');
const fs = require('fs');
const {
  expect
} = require('chai');

const detective = require('../');

const fullConfig = {
  loc: true,
  range: true,
  tokens: true,
  errorOnUnknownASTType: true,
  useJSXTextNode: true,
  ecmaFeatures: {
    jsx: true // can also auto-detect by supplying filePath option below
  }
};


const readSrcFile = function (srcPath) {
  const fullSrcPath = path.join(__dirname, 'fixtures', srcPath)
  return fs.readFileSync(fullSrcPath, 'utf8')
}

describe('detective-typescript', () => {
  const file = 'ex1.tsx'
  const src = readSrcFile(file)

  it('retrieves the dependencies of modules', () => {
    const expectedDeps = ['react']
    const config = {
      filePath: file
    }
    const dependencies = detective(src, config)
    expect(dependencies).to.include.members(expectedDeps)
  });

  it('full config: warns on explicit use of jsx:true option when filePath option is set', () => {
    const config = fullConfig
    config.filePath = file

    expect(() => {
      detective(src, config);
    }).not.throws();
  });
});
