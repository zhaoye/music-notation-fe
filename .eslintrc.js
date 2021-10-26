module.exports = {
  extends: [
    "plugin:vue/vue3-essential",
    // "eslint:recommended"
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    indent: ["warn", 2],
    quotes: [1, "single"],
    semi: [1, "never"],
    "no-var": "warn",
    "arrow-spacing": "warn",
    "no-multi-spaces": "warn",
    "space-before-function-paren": "warn",
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "object-property-newline": "warn",
    "key-spacing": [
      "warn",
      {
        beforeColon: false,
      },
    ],
  },
};
