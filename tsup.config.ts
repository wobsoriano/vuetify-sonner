import vuePlugin from 'unplugin-vue/esbuild'
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: false,
  clean: true,
  external: [/vuetify/],
  dts: false,
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    }
  },
  esbuildPlugins: [vuePlugin()],
})
