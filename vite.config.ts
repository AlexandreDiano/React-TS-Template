import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.VITE_PORT),
  },
  resolve: {
    alias: [
      { find: './runtimeConfig', replacement: './runtimeConfig.browser' },
      { find: '@', replacement: path.resolve(__dirname, '/src') },
    ],
  },
});
