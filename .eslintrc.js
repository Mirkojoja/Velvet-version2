module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["prettier", "vue"],
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
      { usePrettierrc: true },
    ],
    "vue/multi-word-component-names": 0,
  },
};
