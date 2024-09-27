import { resolve } from 'path'
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import legacy from "@vitejs/plugin-legacy";

import pages from './pages/config';

const pagesInput = {}

pages.forEach((page => {
    pagesInput[page.name] = page.path
}));

export default defineConfig({
    build: {
        target: 'es2017',
        outDir: 'dist',
        rollupOptions: {
            input: {
                ...pagesInput
            } 
        }
    },
    plugins: [
        ViteAliases(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        })
    ],
})