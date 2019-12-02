import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json'

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: pkg.main
  },
  external: [
    'react'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser()
  ]
};
