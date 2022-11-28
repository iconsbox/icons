#!/usr/bin/env node
const esbuild = require('esbuild');
const glob = require('glob');

!(async function () {
  try {
    const entryPoints = glob.sync('src/**/*.jsx');
    await esbuild.build({
      entryPoints,
      outdir: "dist",
      minify: false,
      platform: 'browser',
      sourcemap: false,
      sourcesContent: false,
    });
    console.log("⚡ Javascript build complete! ⚡");
  } catch (e) {
    console.log("Build error, ", e.message);
    console.log("E:  ", e);
  }
})();
