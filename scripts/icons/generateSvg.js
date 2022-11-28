const fse = require("fs-extra");
const glob = require("glob");
const parser = require("node-html-parser");
const shell = require("shelljs");
const componentTemplate = require("./component.temp.js");
const spriteComponentTemplate = require("./spriteComponent.temp.js");
const { asyncForEach } = require('../helpers');

// Glob index.svg files inb packages
const svgIcons = glob.sync(`${process.cwd()}/src/**/index.svg`);

(async () => {
  await asyncForEach(svgIcons, async icon => {
    try {
      const fullPath = icon
        .substr(0, icon.lastIndexOf("/"))
        .replace("/sprite", "");
      const fullPathSplit = fullPath.split("/");
      const folderName = fullPathSplit.pop();
      const packageName = fullPathSplit.slice(-2).shift();
      const svgFileContent = await fse.readFile(icon, "utf-8");

      /**
       * Check directory existence
       */
      await fse.ensureDirSync(`${fullPath}/component`);
      await fse.ensureDirSync(`${fullPath}/sprite`);

      /**
       * Parse svg to update id and use veiwBox
       * @type {(TextNode & {valid: boolean}) | (HTMLElement & {valid: boolean})}
       */
      const root = parser.parse(svgFileContent);
      const svgElement = root.querySelector("svg");
      const viewBox = svgElement.getAttribute("viewBox");
      const fill = svgElement.getAttribute("fill") || 'currentColor';
      svgElement.setAttribute("id", folderName);
      svgElement.removeAttribute("fill");

      /**
       * Make sprite svg
       */
      const splittableFileContent = spriteComponentTemplate
        .replace(/{COMP_NAME}/g, folderName)
        .replace(/{VIEW_BOX}/g, viewBox)
        .replace(/{FILL_VALUE}/g, fill)
        .replace(/{PACKAGE_NAME}/g, packageName);

      /**
       * Make svg component
       */
      const normalFileContent = componentTemplate
        .replace(/COMP_NAME/g, folderName)
        .replace(/VIEW_BOX/g, viewBox)
        .replace(/FILL_VALUE/g, fill)
        .replace(/SVG_BODY/g, svgElement.innerHTML
          .replace(/xmlns:xlink/g, "xmlnsXlink")
          .replace(/xlink:href/g, "xlinkHref")
          .replace(/<g><\/g>/g, "")
          .replace(/fill-rule/g, "fillRule")
          .replace(/fill-rule/g, "fillRule")
          .replace(/clip-rule/g, "clipRule")
          .replace(/clip-path/g, "clipPath")
          .replace(/stroke-width/g, "strokeWidth")
          .replace(/stroke-linecap/g, "strokeLinecap")
          .replace(/stroke-linejoin/g, "strokeLinejoin")
          .replace(/fill-opacity/g, "fillOpacity")
          .replace(/stroke-miterlimit/g, "strokeMiterlimit")
          .replace(/class=/g, "className=")
        );

      await Promise.all([
        /**
         * Update svg file
         */
        fse.writeFile(
          `${fullPath}/sprite/${packageName}${folderName}.svg`,
          root
            .toString()
            .replace(/<g><\/g>/g, "")
            .replace(/xmlns xlink/g, "xmlns:xlink"),
          "utf8",
          f => f
        ),
        /**
         * Update index js file
         */
        await fse.writeFile(
          `${fullPath}/component/index.tsx`,
          normalFileContent,
          "utf8",
          f => f
        ),
        /**
         * Update sprite js file
         */
        await fse.writeFile(
          `${fullPath}/sprite/index.tsx`,
          splittableFileContent,
          "utf8",
          f => f
        )
      ]);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  });

  if (shell.exec(`prettier --write "src/**/*.{ts,tsx}"`).code !== 0) {
    shell.echo(`run lint failed`);
  }
})();

/* eslint-disable indent */
