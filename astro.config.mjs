import { defineConfig } from "astro/config";
import copy from "rollup-plugin-copy";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      {
        ...copy({
          copyOnce: true,
          hook: "buildStart",
          targets: [
            {
              src: "node_modules/@shoelace-style/shoelace/dist/assets",
              dest: "public/shoelace-assets",
            },
          ],
        }),
        apply: "build",
      },
    ],
  },
});
