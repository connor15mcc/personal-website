import yaml from '@rollup/plugin-yaml';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import vitePrerender from 'vite-plugin-prerender';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: routes is within the regex of transpiled files;
import routes from './src/routes';

export default () => {
  return {
    plugins: [
      react(),
      yaml(),
      vitePrerender({
        staticDir: path.join(__dirname, 'dist'),
        routes: routes.map(elt => elt.path),
      })
    ]
  }
}
