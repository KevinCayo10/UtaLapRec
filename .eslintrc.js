module.exports = {
  env: {
    browser: true,
    es2021: true, // Usa ES2021 (o al menos ES6)
  },
  parserOptions: {
    ecmaVersion: "latest", // o 2021
    sourceType: "module", // <- Esto permite usar import/export
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  rules: {
    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": "error",
    "no-unused-vars": "warn",
  },
};
