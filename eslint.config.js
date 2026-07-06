export default [
  {
    ignores: [
      "country-state-code-phone-data.js",
      "public/location-data.js",
      "public/location-data.min.js",
      "public/location-data.json",
      "public/assets/**"
    ]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "no-console": "off"
    }
  }
];
