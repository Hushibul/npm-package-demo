import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'dynamic-ui',
  },
  external: ['react', 'react-dom'],
  plugins: [typescript({ tsconfig: 'tsconfig.json' })],
});
