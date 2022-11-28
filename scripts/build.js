#!/usr/bin/env node
const esbuild = require('esbuild');
const glob = require('glob');

!(async function () {
  await esbuild.build({
    entryPoints: glob.sync('src/**/*.{tsx,ts}'),
    outdir: "dist",
    minify: false,
    platform: 'browser',
    sourcemap: false,
    sourcesContent: false,
  });

  await esbuild.build({
    entryPoints: glob.sync('src/**/*.{tsx,ts}'),
    outdir: "dist",
    outExtension: {
      ".js": ".cjs.js"
    },
    minify: false,
    platform: 'node',
    format: 'cjs',
    sourcemap: false,
    sourcesContent: false,
  });

  console.log("⚡ Javascript build complete! ⚡")
})();
