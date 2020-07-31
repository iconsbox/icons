import config from "./config";
import iconsData from "./data";
import "./resources/styles/main.scss";
import { _ } from "./utils/selectors";
import { paginate } from "./utils/array";
import renderIcons from "./render/iconsList";
import { ready } from "./utils/document";

ready(() => {
  /**
   * Define global utils
   */
  const input = _("#searchBar");
  const packagesListSelector = _(".listPackages ul");
  const selectElement = _(".select");

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

  const reloadIcons = function(page = 1) {
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
      const list = paginate(Object.keys(icons), config.ICONS_PER_PAGE, page);
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
   * Check infinity scroll
   */
  window.addEventListener("scroll", function (event) {
    const element = document.body;
    console.log({
      scrollHeight: element.scrollHeight,
      scrollTop: window.scrollTop,
      clientHeight: element.clientHeight
    });
    if (element.scrollHeight - window.scrollTop === element.clientHeight) {
      console.log("scrolled");
    }
  }, false);

  /**
   * Scroll and add logo to nav-bar
   */
  document.querySelector('.toolbar').addEventListener('sticky-change', e => {
    const header = e.detail.target;  // header became sticky or stopped sticking.
    const sticking = e.detail.stuck; // true when header is sticky.

    console.log(header);
    header.classList.toggle('stick', sticking); // add drop shadow when sticking.
  });
});
