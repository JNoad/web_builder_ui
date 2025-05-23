import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
import path from 'path'

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // adjust the path to wherever your mixins/_globals live:
                additionalData: `@use "sass:color"; @use "@/assets/scss/global.scss" as *;`
            }
        },
    }
})