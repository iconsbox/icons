/**
 Walk directory,
 list tree without regex excludes
 */
const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');

const move = (oldPath, newPath, callback) => {
  fs.rename(oldPath, newPath, err => {
    if (err) {
      if (err.code === 'EXDEV') {
        copy();
      } else {
        callback(err);
      }
      return;
    }
    callback();
  });

  function copy() {
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);

    readStream.on('error', callback);
    writeStream.on('error', callback);

    readStream.on('close', () => {
      fs.unlink(oldPath, callback);
    });

    readStream.pipe(writeStream);
  }
};

const walk = (dir, regExcludes, done) => {
  let results = [];

  // eslint-disable-next-line consistent-return
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(file => {
      file = path.join(dir, file);

      let excluded = false;
      const len = regExcludes.length;
      let i = 0;

      for (; i < len; i++) {
        if (file.match(regExcludes[i])) {
          excluded = true;
        }
      }

      // Add if not in regExcludes
      if (excluded === false) {
        results.push(file);

        // Check if its a folder
        // eslint-disable-next-line no-shadow
        fs.stat(file, (err, stat) => {
          if (stat && stat.isDirectory()) {
            // If it is, walk again
            walk(file, regExcludes, (err, res) => {
              results = results.concat(res);

              if (!--pending) {
                done(null, results);
              }
            });
          } else if (!--pending) {
            done(null, results);
          }
        });
      } else if (!--pending) {
        done(null, results);
      }
    });
  });
};

const regExcludes = [/index\.js/, /js\/lib\.js/, /node_modules/];

const camelCase = d => {
  let name = '';
  if(d.indexOf('-') > -1) {
    name = d.split('-').map(a => a.replace(/^./, (match) => match.toUpperCase()).replace(/(\_\w)/g, k => k[1].toUpperCase())).join('');
  } else {
    name = d.replace(/^./, (match) => match.toUpperCase()).replace(/(\_\w)/g, k => k[1].toUpperCase());
  }

  return name;
};

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
