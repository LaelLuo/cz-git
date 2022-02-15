module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  env: {
    node: true,
    jasmine: true
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "error"
  },
  globals: {
    console: true,
    module: true
  }
};
