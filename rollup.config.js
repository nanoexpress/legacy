import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies);

const plugins = [
  resolve({
    preferBuiltins: true,
    mainFields: ['module', 'main'],
    extensions: ['.mjs', '.js', '.json'],
    exclude: 'node_modules/**'
  })
];
const external = dependencies.concat([
  'fs',
  'path',
  'querystring',
  'http',
  'zlib',
  'stream',
  'util'
]);
export default {
  input: './src/nanoexpress.js',
  output: {
    format: 'cjs',
    file: './build/nanoexpress.js',
    esModule: false
  },
  external,
  plugins
};
