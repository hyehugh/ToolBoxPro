import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 忽略构建产物与依赖
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "*.tsbuildinfo",
      "next-env.d.ts",
      "scripts/**",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
  ...tseslint.configs.recommended,
  {
    rules: {
      // 这些场景刻意使用 <img>：预览图均为用户上传的 blob:/data: 本地 URL，
      // 不经过 next/image 的优化管线，无需 next/image。降为 warn 以保持可见但不阻断构建。
      "@next/next/no-img-element": "warn",
      // no-explicit-any 降为 warn：剩余的 any（gtag 类型声明等）有合理理由，
      // 修完工具组件后仍不应阻断 CI。
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];

export default eslintConfig;
