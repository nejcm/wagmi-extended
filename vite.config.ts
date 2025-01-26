import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { peerDependencies } from './package.json';

const perDeps = Object.keys(peerDependencies);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: '@nejcm/wagmi-extended',
      fileName: (format) => `wagmi-extended.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into the library
      external: perDeps,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
