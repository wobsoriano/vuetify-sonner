import { defineConfig } from 'tsup'
import vuePlugin from 'unplugin-vue/esbuild'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'VuetifySonner',
  sourcemap: true,
  splitting: false,
  clean: true,
  external: [/vuetify/],
  dts: false,
  esbuildPlugins: [vuePlugin()],
})
