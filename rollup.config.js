// rollup.config.js
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import eslint from '@rollup/plugin-eslint';

export default {
  input: 'src/index.js',
  output: [{
    name: 'EleTable',
    file: 'lib/ele-table.js',
    format: 'umd',
    sourcemap: false,
    plugins: [terser()]
  }, {
    file: 'docs/modules/ele-table.js',
    format: 'es',
    sourcemap: true,
  }],
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    alias({
      entries: [
        { find: '@', replacement: './src' }
      ]
    }),
    nodeResolve(),
    commonjs(),
    eslint()
  ]
};