import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-import-css';
import sass from 'rollup-plugin-sass';

const packageJson = require('./package.json');
const dts = require('rollup-plugin-dts');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), css(), sass()]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/, /\.scss$/],
    plugins: [dts.default()]
  }
];
