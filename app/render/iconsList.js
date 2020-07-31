import config from "../config";

const iconsContainer = document.getElementById("iconsList");

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
    packagesList += `<div class="box" data-pack="${
      packageData.pack
    }" data-package="${packageData.package}" data-version="${
      packageData.version
    }">
       <img src="${makeFilePath(packageData.pack, icon)}" />
       <div class="buttons">
          <div class="button copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </div>
          <div class="button details">details</div>
       </div>
    </div>`;
  });
  iconsContainer.innerHTML = packagesList;
};
