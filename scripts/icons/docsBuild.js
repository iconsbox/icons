/**
 Walk directory,
 list tree without regex excludes
 */
const fse = require('fs-extra');
const { walk, asyncForEach, substringBetween } = require('../helpers');

const regExcludes = [/dist/, /config/, /sprite/, /component/, /index\.js/, /js\/lib\.js/, /node_modules/, /\.DS_Store/];

walk('./packages', regExcludes, async (err, results) => {
  if (err) {
    throw err;
  }

  let content = {};
  await asyncForEach(results, async  item => {
    /**
     * Check if this is package
     */
    if(item.indexOf('package.json') > -1) {
      const packageName = substringBetween(item, 'packages/', '/package.json');

      const packageContent = await fse.readFile(item);
      const packageObject = JSON.parse(packageContent.toString());
      content[packageName] = {
        package: packageObject.name,
        version: packageObject.version,
        owner: packageObject.owner,
        license: packageObject.license,
        icons: {},
      }
    } else {
      const packageName = substringBetween(item, 'packages/', '/src/');
      if (
        item.indexOf('.svg') > -1
      ) {
        const iconName = substringBetween(item, '/src/', '/index.svg');
        content[packageName].icons[iconName] = {};
      }
    }
  });

  await fse.writeFile(
    `packages/data.js`,
    `export default ${JSON.stringify(content)}`,
    'utf8',
  );
});
