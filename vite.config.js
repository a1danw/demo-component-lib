import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  // specifies build settings
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      // src/index.js is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.js"),
      name: "AidanComponentLibrary",
      // the name of the output files when the build is run (should match package.json main/module/exports)
      fileName: "aidan-component-lib",
    },
    // vite uses rollup to compile the code
    rollupOptions: {
      // externalize deps that shouldn't be in the library
      external: ["vue"],
      output: {
        // provide global variables to use in the build
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
    extensions: [".vue", ".js"],
  },
});
