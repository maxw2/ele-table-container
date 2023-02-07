// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/ele-table.js',
    format: 'es',
    sourcemap: false,
    plugins: [terser()]
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
  ]
};