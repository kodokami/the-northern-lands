/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['disable-autofix'],
  rules: {
    "disable-autofix/semi": ["error", "always"],
    "disable-autofix/semi-style": ["error", "last"],
  },
};
