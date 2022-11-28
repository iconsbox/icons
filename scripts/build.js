#!/usr/bin/env node
const esbuild = require('esbuild');
const glob = require('glob');

!(async function () {
  try {
    const entryPoints = glob.sync('src/**/*.tsx');
    await esbuild.build({
      entryPoints,
      outdir: "dist",
      minify: false,
      platform: 'browser',
      sourcemap: false,
      sourcesContent: false,
    });
    console.log("⚡ ESM version build complete! ⚡");

    await esbuild.build({
      entryPoints,
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
    console.log("⚡ CJS version build complete! ⚡");
  } catch (e) {
    console.log("Build error, ", e.message);
    console.log("E:  ", e);
  }
})();
