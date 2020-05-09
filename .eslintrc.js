module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["standard", "prettier", "prettier/standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["warn", 2, { SwitchCase: 1 }],
    quotes: ["error", "double", { avoidEscape: true }],
    semi: ["error", "always"],
    "space-before-function-paren": 0,
    "new-cap": 0,
    "no-undef": ["warn"],
  },
};
