import { appendHtml } from "../utils/document";
import { makeFilePath } from '../utils/misc';

const iconsContainer = document.getElementById("iconsList");


/**
 * Will render icons list on page
 * @param packageData
 * @param listIcons
 * @param replace
 */
export default (packageData, listIcons, replace = false) => {
  let packagesList = "";
  listIcons.forEach(icon => {
    packagesList += `<div class="box" data-icon="${icon}" data-pack="${
      packageData.pack
    }">
       <div class="heading">
          ${icon}
       </div>
       <img class="loading" title="${icon}" src="${makeFilePath(packageData.pack, icon)}" />
       <div class="buttons">
          <div class="button copy">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </div>
          <div class="button details">details</div>
       </div>
    </div>`;
  });

  /**
   * If filter applied we need to replace new icons
   */
  if (replace) {
    iconsContainer.innerHTML = packagesList;
  } else {
    appendHtml(iconsContainer, packagesList);
  }
};
