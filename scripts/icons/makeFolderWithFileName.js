const fsExtra = require('fs-extra');
const { walk, move, camelCase } = require('../helpers');

const regExcludes = [/index\.js/, /js\/lib\.js/, /node_modules/];

walk('./src', regExcludes, (err, results) => {
  if (err) {
    throw err;
  }

  // eslint-disable-next-line array-callback-return
  results.map(async item => {
    if (item.indexOf('.svg') > -1 && item.indexOf('Snappmarket') === -1) {
      const lastSlash = item.lastIndexOf('/');
      const dirName = item.substr(lastSlash + 1).replace('.svg', '');
      const pathDir = `${item.substr(0, lastSlash)}/${camelCase(dirName)}`;
      const pathFile = `${pathDir}/index.svg`;

      fsExtra.ensureDirSync(pathDir);

      move(item, pathFile, (error) => {
        if (!error) {
          console.log('moved');
        } else {
          console.log(error);
        }
      });
    }
  });
});
