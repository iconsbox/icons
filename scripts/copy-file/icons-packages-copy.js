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
    module: './index.js',
  };
  const newSpritePackageData = {
    ...packageDataOther,
    private: false,
    main: './index.js',
    module: '../sprite/index.js',
  };

  console.log('Writing package:' , buildPath);
  await fse.ensureDirSync(`${buildPath}/sprite`);

  const targetPath = path.join(buildPath, './package.json');
  const targetPathSprite = path.join(buildPath, './sprite/package.json');

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
