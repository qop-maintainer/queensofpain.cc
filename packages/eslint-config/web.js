import eslintPluginAstro from "eslint-plugin-astro";
import markdown from "@eslint/markdown";
import { config as baseConfig } from "./base.js";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const webConfig = [
  ...baseConfig,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.md"],
    plugins: {
      markdown,
    },
    language: "markdown/commonmark",
    rules: {
      "markdown/no-html": "error",
    },
  },
  {
    ignores: [".astro/**"],
  },
];
