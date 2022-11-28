const fs = require('fs');
const path = require('path');

const walk = (dir, regExcludes, done) => {
  let results = [];

  fs.readdir(dir, (err, list) => {
    if (err) return done(err);

    let pending = list.length;
    if (!pending) return done(null, results);

    list.forEach(file => {
      // eslint-disable-next-line no-param-reassign
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

/* eslint-disable indent */
const asyncForEach = async (array, callback) => {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < array.length; index++) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
};

const substringBetween = (s, a, b) => {
  const p = s.indexOf(a) + a.length;
  return s.substr(p, s.indexOf(b) - p);
}

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

const camelCase = d => {
  let name = '';
  if(d.indexOf('-') > -1) {
    name = d.split('-').map(a => a.replace(/^./, (match) => match.toUpperCase()).replace(/(\_\w)/g, k => k[1].toUpperCase())).join('');
  } else {
    name = d.replace(/^./, (match) => match.toUpperCase()).replace(/(\_\w)/g, k => k[1].toUpperCase());
  }

  return name;
};


module.exports = {
  walk,
  move,
  asyncForEach,
  substringBetween,
  camelCase
}
