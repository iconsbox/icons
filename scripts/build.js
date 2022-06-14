#!/usr/bin/env node
const esbuild = require('esbuild');
const { dtsPlugin } = require("esbuild-plugin-d.ts");
const glob = require('glob');

Promise
  .all([
    esbuild.build({
      entryPoints: glob.sync('src/**/*.{tsx,js}'),
      outdir: "dist",
      minify: false,
      platform: 'browser',
      sourcemap: false,
      sourcesContent: false,
      // plugins: [dtsPlugin()]
    }),
  ])
  .then(() => console.log("⚡ Javascript build complete! ⚡"))
  .catch(error => {
    console.error(error)
    process.exit(1)
  });
