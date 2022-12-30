import yaml from '@rollup/plugin-yaml';

export default {
  input: 'src/main.tsx',
  output: {
    dir: 'output',
    format: 'cjs',
  },
  plugins: [yaml()],
};
