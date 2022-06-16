#!/usr/bin/env node
const esbuild = require('esbuild');
const glob = require('glob');

Promise
  .all([
    esbuild.build({
      entryPoints: glob.sync('src/**/*.{tsx,ts}'),
      outdir: "dist",
      minify: false,
      platform: 'browser',
      sourcemap: false,
      sourcesContent: false,
    }),
  ])
  .then(() => console.log("⚡ Javascript build complete! ⚡"))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });
