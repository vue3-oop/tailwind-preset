import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import checker from 'vite-plugin-checker'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vueJsxPlugin(), tsconfigPaths(), checker({ typescript: true })],
  server: {
    host: true,
  },
})
