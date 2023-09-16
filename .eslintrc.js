module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "import", "material-ui"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:material-ui/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Add your own rules here (if any)
  },
};
