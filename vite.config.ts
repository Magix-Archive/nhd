import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import postcss from "./cfg/postcss.config";
import { viteSingleFile } from "vite-plugin-singlefile";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [
        preact(),
        tsconfigPaths(),
        viteSingleFile()
    ],

    css: { postcss },
}));
