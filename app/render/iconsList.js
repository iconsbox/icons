import config from "../config";

const iconsContainer = document.getElementById('iconsList');

/**
 *
 * @param pack
 * @param name
 * @returns {string}
 */
const makeFilePath = function(pack, name) {
  return `${config.PATH_PREFIX}${pack}/src/${name}${config.PATH_SUFFIX}`;
};

export default (packageData, listIcons) => {
  let packagesList = "";
  listIcons.forEach(icon => {
    packagesList += `<div class="box" data-pack="${packageData.pack}" data-package="${
      packageData.package
    }" data-version="${packageData.version}">
       <img src="${makeFilePath(packageData.pack, icon)}" />
    </div>`;
  });
  iconsContainer.innerHTML = packagesList;
};
