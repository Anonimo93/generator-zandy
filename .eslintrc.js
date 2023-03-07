module.exports = {
    "root": true,
    "extends": [
        "standar",
        "prettier",
        "eslint:recommended"
    ],
    "plugins": [
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es2021": true,
    "mocha": true
  },
  "rules": {
    "no-debugger": "off",
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "bracketSpacing": false,
        "trailingComma": "es5",
        "printWidth": 120,
        "endOfLine": "auto"
      }
    ]
  }
}