import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'bundlel.js',
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
  external: ['react', 'react-dom', 'd3'],
  plugins: [
    commonjs({ include: /node_modules/ }),
    nodeResolve(),
    babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react']
    }),
  ],
};