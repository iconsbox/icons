import config from "./config";
import iconsData from "./data";
import "./resources/styles/main.scss";
import { _ } from "./utils/selectors";
import { paginate } from "./utils/array";
import renderIcons from "./render/iconsList";
import { ready, addEvent, getScrollY } from "./utils/document";

ready(() => {
  /**
   * Define global utils
   */
  const input = _("#searchBar");
  const packagesListSelector = _(".listPackages ul");
  const body = document.body;

  /**
   * Add initial content
   */
  let packagesList = "";
  Object.keys(iconsData).forEach(packName => {
    packagesList += `<li>${packName}</li>`;
  });
  packagesListSelector.innerHTML = packagesList;

  /**
   * Search mechanism
   */
  input.addEventListener("input", evt => {
    let searchValue = evt.target.value;
    let iconsToShow = searchValue.length
      ? icons.filter(icon => icon.name.includes(searchValue))
      : icons;
    iconContainer.innerHTML = "";
    iconsToShow.forEach(icon => iconContainer.appendChild(icon.el));
  });

  const reloadIcons = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    params.size = urlParams.get("size") || 12;
    params.package = urlParams.get("package") || "All";
    params.icon = urlParams.get("icon") || "";

    /**
     * Add initial content
     */
    if (iconsData[params.package]) {
      const { icons, package: npmPackage, version } = iconsData[params.package];
      const list = paginate(
        Object.keys(icons),
        config.ICONS_PER_PAGE,
        config.ACTIVE_PAGE
      );
      renderIcons(
        {
          pack: params.package,
          package: npmPackage,
          version
        },
        list
      );
    } else {
      let icons = [];
      Object.keys(iconsData).forEach(pack => {});
    }
  };
  window.onpopstate = reloadIcons;
  reloadIcons();

  /**
   * Check infinity scroll and stick logo
   */
  addEvent(window, "scroll", function(event) {
    const toolbar = document.querySelector(".toolbar");
    const y = getScrollY();

    if (y >= 603) {
      toolbar.classList.add("stick");
    } else {
      toolbar.classList.remove("stick");
    }

    if (body.scrollHeight - y < 1000) {
      config.ACTIVE_PAGE = config.ACTIVE_PAGE + 1;
      reloadIcons();
    }
  });
});
