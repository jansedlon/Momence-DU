module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "react/jsx-props-no-spreading": "off",
    "import/extensions": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "react/function-component-definition": "off",
  },
};
