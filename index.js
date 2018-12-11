module.exports = {
  extends: [
    'tslint-eslint-rules',
    'tslint-consistent-codestyle',
  ].concat([
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    // './rules/imports',
  ].map(require.resolve)),
  "rules": {
    "indent": [2, "tab"],
    "no-tabs": 0,
  },
};
