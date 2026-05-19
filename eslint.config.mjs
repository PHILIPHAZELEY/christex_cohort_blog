import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Allow Record<string, any> for Supabase data shapes
      "@typescript-eslint/no-explicit-any": "warn",
      // Data fetching in useEffect is standard for client components in App Router
      "react-hooks/set-state-in-effect": "off",
      // img tags are acceptable for external/Supabase images
      "@next/next/no-img-element": "warn",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
