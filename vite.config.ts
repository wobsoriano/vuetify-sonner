import path from 'node:path'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const userConfig: UserConfig = {}

  if (mode === 'lib') {
    userConfig.build = {
      lib: {
        entry: path.resolve(__dirname, 'lib/index.ts'),
        name: 'vuetify-sonner',
        fileName: 'vuetify-sonner',
      },
      rollupOptions: {
        external: ['vue', 'vuetify', /vuetify\/.+/, 'vue-sonner'],
        output: {
          exports: 'named',
          globals: {
            vue: 'Vue',
          },
        },
      },
      emptyOutDir: false,
    }
  }

  return {
    plugins: [
      vue(),
      dts({
        include: './lib',
      }),
      vuetify({
        autoImport: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/lib'),
      },
    },
    ...userConfig,
  }
})
