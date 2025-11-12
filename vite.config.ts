import { resolve } from "node:path";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    // lib: {
    //   entry: resolve(import.meta.dirname, "./src/main.ts"),
    //   name: "DamageCalculator",
    //   formats: ["iife"],
    // },
    rollupOptions: {
      input: {
        main: "src/main.ts",
      },
      output: {
        entryFileNames: "VueDamageCalculator.js",
        chunkFileNames: "VueDamageCalculator.js",
        format: "iife",
        name: "DamageCalculator",
        sourcemap: false,
        plugins: [
          getBabelOutputPlugin({
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    ie: "11",
                    chrome: "58",
                  },
                  useBuiltIns: false,
                  // corejs: 3,
                },
              ],
            ],
            allowAllFormats: true,
          }),
        ],
      },
    },
  },
});

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueDevTools(),
//     legacy({
//       targets: ["defaults", "not IE 11"],
//       additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
//     }),
//   ],
//   resolve: {
//     alias: {
//       "@": resolve(import.meta.dirname, "./src"),
//     },
//   },
//   build: {
//     rollupOptions: {
//       input: {
//         main: "src/main.ts",
//       },
//       output: {
//         entryFileNames: "VueDamageCalculator.js",
//         chunkFileNames: "VueDamageCalculator.js",
//         format: "iife",
//         name: "DamageCalculator",
//         sourcemap: false,
//       },
//       // https://zhuanlan.zhihu.com/p/16582197071
//       plugins: [
//         babel({
//           babelHelpers: "bundled",
//           extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
//         }),

//         // getBabelOutputPlugin({ presets: [
//         //   [
//         //     "@babel/preset-env",
//         //     {
//         //       targets: { chrome: "58", ie: "11" },
//         //       useBuiltIns: "usage",
//         //       corejs: 3,
//         //       include: [
//         //         "@babel/plugin-transform-template-literals",
//         //       ],
//         //     },
//         //   ],
//         // ] }),
//       ],
//     },
//   },
// });
