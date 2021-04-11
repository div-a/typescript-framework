module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': 0,
    'object-curly-spacing': [ 'error', 'always' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'lines-between-class-members': 0,
    'no-useless-constructor': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': 0,
    'no-empty-function': [ 'error', { allow: [ 'constructors' ] } ],
  },
};
