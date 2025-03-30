import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import eslintJs from "@eslint/js";

const { configs: eslintRecommended } = eslintJs;
const { configs: reactRecommended } = reactPlugin;
const { configs: prettierRecommended } = prettierPlugin;

export default [
  {
    ignores: ["node_modules/", "build/"],
    files: ["**/*.{js,jsx,ts,tsx}"], // Ensure the pattern matches your files
    linterOptions: {
      reportUnusedDisableDirectives: "error" // Correct placement for flat config
    },
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...eslintRecommended.recommended.rules,
      ...reactRecommended.recommended.rules,
      ...prettierRecommended.recommended.rules,
      "react/prop-types": "off",
      "no-unused-vars": "warn",
      "prettier/prettier": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
