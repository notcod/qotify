import { defineConfig } from "vite";
import pkg from "./package.json";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
const { dependencies = {}, peerDependencies = {} } = pkg as any;
const makeRegex = (dep) => new RegExp(`^${dep}(/.*)?$`);
const excludeAll = (obj) => Object.keys(obj).map(makeRegex);

export default defineConfig(() => {
    return {
        build: {
            target: "es2020",
            lib: {
                entry: ["./src/index.tsx"],
                formats: ["es", "cjs"],
                fileName: (format) => `index.qwik.${format === "es" ? "mjs" : "cjs"}`,
            },
            rollupOptions: {
                // externalize deps that shouldn't be bundled into the library
                // external: [/^node:.*/, ...excludeAll(dependencies), ...excludeAll(peerDependencies)],
            },
        },
        esbuild: { legalComments: "none" },
        plugins: [qwikVite(), tsconfigPaths(), qwikReact()],
        optimizeDeps:{
          include: ['@builder.io/qwik-react']
        }
    };
});
