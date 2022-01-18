module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  globals: {
    cy: true
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier', '@vue/eslint-config-typescript', 'plugin:cypress/recommended'],
  plugins: [],
  rules: {}
}
