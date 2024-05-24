module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': 'error',
    // 'no-unused-vars': 'error',
  },
};
