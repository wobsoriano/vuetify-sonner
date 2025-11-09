import path from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const userConfig: UserConfig = {}

  if (mode === 'lib') {
    userConfig.build = {
      lib: {
        entry: path.resolve(__dirname, 'lib/index.ts'),
        name: 'VuetifySonner',
        fileName: 'vuetify-sonner',
      },
      outDir: 'dist',
      emptyOutDir: true,
      cssCodeSplit: false,
      sourcemap: true,
      rollupOptions: {
        external: ['vue', 'vuetify', /vuetify\/.+/, 'vue-sonner', 'vue-sonner/style.css'],
        output: [
          {
            format: 'cjs',
            entryFileNames: `vuetify-sonner.cjs`,
          },
          {
            format: 'es',
            entryFileNames: `vuetify-sonner.js`,
            preserveModules: false,
          },
        ],
      },
    }
  }

  return {
    plugins: [
      vue(),
      vuetify({
        autoImport: true,
      }),
    ],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'lib')}/`,
      },
    },
    ...userConfig,
  }
})
