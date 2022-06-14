/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');

async function createPackageFile() {
  const packageData = await fse.readFile(path.resolve(packagePath, './package.json'), 'utf8');
  const {
    nyc, scripts, devDependencies, workspaces, ...packageDataOther
  } = JSON.parse(
    packageData,
  );
  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: './esm/index.js',
    unpkg: './umd/icons.production.js',
  };
  const newSpritePackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: '../esm/sprite/index.js',
    unpkg: '../umd/sprite/icons.production.js',
  };

  console.log('Writing package:' , buildPath)
  const targetPath = path.resolve(buildPath, './package.json');
  const targetPathSprite = path.resolve(buildPath, './sprite/package.json');

  await fse.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  await fse.writeFile(targetPathSprite, JSON.stringify(newSpritePackageData, null, 2), 'utf8');
}

async function run() {
  try {
    await createPackageFile();
    // await createModulePackages({ from: srcPath, to: buildPath });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
