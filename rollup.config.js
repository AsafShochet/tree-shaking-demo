import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json"; // Import the JSON plugin

const pkg = await import("./package.json", {
  assert: { type: "json" },
});
export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.default.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.default.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(), // handle TypeScript files
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    json(),
    terser(),
  ],
};
