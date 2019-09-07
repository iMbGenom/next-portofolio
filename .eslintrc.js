module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "indent": ["error", 2],
    "space-infix-ops": "off",
    "prefer-promise-reject-errors": "off",
    "space-after-function-name": "off",
    "space-before-function-paren": "off",
    "eol-last": "off",
    "no-sequences": "off",
    "no-unused-expressions": "off",
    "semi": ["error", "never"],
    "quotes": "off",
    "quote-props": "off",
    "mocha/no-mocha-arrows": "off",
    "mocha/no-setup-in-describe": "off"
  }
}
