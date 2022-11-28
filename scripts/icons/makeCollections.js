/**
 Walk directory,
 list tree without regex excludes
 */
const fse = require('fs-extra');
const { walk, asyncForEach } = require('../helpers');
/* eslint-disable consistent-return, no-plusplus, no-shadow, no-await-in-loop, guard-for-in,no-restricted-syntax */

/**
 * TEMPLATES
 */
const HEADER_TEXT = `/**
* THIS IS AN AUTO GENERATED FILE, CHANGES COULD BE OVERWRITE
*/`;
const SVG_REACT_TYPE = `import { ReactElement, SVGProps } from "react";\ntype SvgComponent = (props: SVGProps<SVGElement>) => ReactElement;`
const makeCjsExport = (content, name) => {
  const tempContent = content || `module.exports = {}`;
  return tempContent.replace("{,", "{").replace('}', `,${name} }`)
}
const esmPkgRow = name => `\nexport { default as ${name} } from './${name}/component';`;
const cjsPkgRow = name => `\nconst ${name} = require('./${name}/component/index.cjs.js');`;
const pkgTypeRow = name => `\nexport { SvgComponent as ${name} } from './${name}/component';`;

const regExcludes = [/index\.ts/, /js\/lib\.js/, /node_modules/, /\.DS_Store/];

walk('./src', regExcludes, async (err, results) => {
  if (err) {
    throw err;
  }

  const content = {};
  const contentCJS = {};
  const contentCJSEnd = {};
  const contentType = {};
  await asyncForEach(results, item => {
    if (item.indexOf('/component') > -1) {
      const lastSlash = item.replace('/component').lastIndexOf('/');
      const iconName = item.substr(lastSlash + 1).replace('/component', '');
      const pathDir = `${item.substr(0, lastSlash)}`;

      let current = content[pathDir] || HEADER_TEXT;
      current += esmPkgRow(iconName);
      content[pathDir] = current;

      let currentCJS = contentCJS[pathDir] || HEADER_TEXT;
      currentCJS += cjsPkgRow(iconName);
      contentCJS[pathDir] = currentCJS;
      let currentCJSEnd = contentCJSEnd[pathDir] || '';
      contentCJSEnd[pathDir] = makeCjsExport(currentCJSEnd, iconName);

      let currentType =
        contentType[pathDir] ||
        `${HEADER_TEXT}\n${SVG_REACT_TYPE}\n`;
      currentType += pkgTypeRow(iconName);
      contentType[pathDir] = currentType;
    }
  });

  for (const key in content) {
    await fse.ensureDirSync(`${key}/sprite`);

    // esm
    await fse.writeFile(`${key}/index.js`, content[key], 'utf8');
    await fse.writeFile(
      `${key}/sprite/index.js`,
      content[key].replace(/from '\./g, "from '..").replace(/\/component/g, '/sprite'),
      'utf8',
    );

    // cjs
    await fse.writeFile(`${key}/index.cjs.js`, contentCJS[key] + "\n" + contentCJSEnd[key], 'utf8');
    await fse.writeFile(
      `${key}/sprite/index.cjs.js`,
      contentCJS[key].replace(/require\('\./g, "require('..").replace(/\/component/g, '/sprite') + "\n" +
      contentCJSEnd[key] ,
      'utf8',
    );

    // types
    await fse.writeFile(`${key}/index.d.ts`, contentType[key], 'utf8');
    await fse.writeFile(
      `${key}/sprite/index.d.ts`,
      contentType[key],
      'utf8',
    );
  }
});
