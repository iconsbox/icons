import config from "./config";
import iconsData from "./data";
import "./resources/styles/main.scss";
import { _ } from "./utils/selectors";
import { paginate } from "./utils/array";
import renderIcons from "./render/iconsList";
import { ready, addEvent, getScrollY } from "./utils/document";
import { getNextProp } from "./utils/object";
import { getSynonyms } from "./utils/synonyms";
import {
  addSkeletonRemoverEvent,
  addCopySvgEvent,
  addShowDetailEvent
} from "./utils/misc";

ready(() => {
  /**
   * Define global utils
   */
  const searchBar = _("#searchBar");
  const backToTop = _(".backToTop");
  const selectPackType = _(".selectPackType");
  const packagesListSelector = _(".listPackages ul");
  const packagesListItemSelector = _(".listPackages ul");
  const body = document.body;
  let searchResultData = {};

  /**
   * Add initial select packages
   */
  let packagesList = "<li>All</li>";
  Object.keys(iconsData).forEach(packName => {
    packagesList += `<li class="${packName}-item">${packName}</li>`;
  });
  packagesListSelector.innerHTML = packagesList;

  /**
   * Search mechanism
   */
  addEvent(searchBar, "input", evt => {
    let searchValue = evt.target.value.toLowerCase().trim();

    if (searchValue.length > 1) {
      config.ACTIVE_PACKAGE = "";
      config.ACTIVE_PAGE = 1;
      config.SEARCH_MODE = true;
      searchResultData = {};
      const keywordSynonyms = getSynonyms(searchValue);

      Object.keys(iconsData).forEach(pack => {
        let { icons, package: npmPackage, version: npmVersion } = iconsData[
          pack
        ];
        Object.keys(icons).forEach(icon => {
          const currentIcon = icons[icon];
          const iconSplit = icon
            .replace(/([a-z](?=[A-Z]))/g, "$1 ")
            .toLowerCase()
            .split(" ");

          /**
           * Check if icons name or keywords looks like search term
           */
          if (
            icon.toLowerCase() === searchValue ||
            iconSplit.some(r => r.startsWith(searchValue)) ||
            iconSplit.some(r => keywordSynonyms.includes(r))
          ) {
            /**
             * Check if we add this package or it is new
             */
            if (searchResultData[pack]) {
              searchResultData[pack].icons[icon] = currentIcon;
            } else {
              searchResultData[pack] = {
                package: npmPackage,
                version: npmVersion,
                icons: {
                  [icon]: currentIcon
                }
              };
            }
          }
        });
      });

      // render result
      reloadIcons({ state: true });
    } else {
      searchResultData = {};
      config.SEARCH_MODE = false;

      reloadIcons({ state: true });
    }

    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth"
    });
  });

  /**
   * Show panel
   */
  addEvent(selectPackType, "click", evt => {
    const li = evt.currentTarget;
    li.querySelector(".select-panel").classList.toggle("visible");
  });

  /**
   * Choose package type
   */
  addEvent(packagesListItemSelector, "click", evt => {
    const li = evt.target;
    const packageName = li.innerText.trim();
    selectPackType.querySelector(".select-value").innerHTML = packageName;

    config.ACTIVE_PAGE = 1;
    config.ACTIVE_PACKAGE = packageName !== "All" ? packageName : "";
    history.pushState({}, "", "/?package=" + config.ACTIVE_PACKAGE);

    const popStateEvent = new PopStateEvent("popstate", { state: packageName });
    dispatchEvent(popStateEvent);

    if (config.SEARCH_MODE) {
      searchBar.dispatchEvent(new Event("input", { bubbles: true }));
    }

    window.scrollTo({
      top: 640,
      left: 0,
      behavior: "smooth"
    });
  });

  /**
   * Check infinity scroll and stick logo
   */
  addEvent(window, "scroll", function(event) {
    const toolbar = document.querySelector(".toolbar");
    const y = getScrollY();

    if (y >= 580) {
      toolbar.classList.add("stick");
      backToTop.classList.add("visible");
    } else {
      toolbar.classList.remove("stick");
      backToTop.classList.remove("visible");
    }

    if (body.scrollHeight - y < 1000) {
      config.ACTIVE_PAGE = config.ACTIVE_PAGE + 1;
      reloadIcons();
    }
  });

  /**
   * Scroll to top
   */
  addEvent(backToTop, "click", function() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });

  /**
   * Show icons list in page
   */
  const reloadIcons = function(event = {}) {
    const usedIcons = config.SEARCH_MODE ? searchResultData : iconsData;
    const IconDataKey = Object.keys(usedIcons);
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    params.package = urlParams.get("package") || "";

    if (!Object.keys(usedIcons).length) {
      renderIcons({}, [], true);
      _(".nothing-found").classList.add("visible");
      return false;
    } else {
      _(".nothing-found").classList.remove("visible");
    }

    /**
     * Add initial content
     */
    if (event.state && event.state.length) {
      const { icons, package: npmPackage, version } = usedIcons[
        event.state
      ] || { icons: {}, package: "", version: "" };

      const list = paginate(
        Object.keys(icons),
        config.ICONS_PER_PAGE,
        config.ACTIVE_PAGE
      );
      console.log("SSS", list);

      renderIcons(
        {
          pack: event.state,
          package: npmPackage,
          version
        },
        list,
        true
      );
    } else {
      const startPackage = config.ACTIVE_PACKAGE || IconDataKey[0];
      let { icons, package: npmPackage, version } = usedIcons[startPackage];
      const list = paginate(
        Object.keys(icons),
        config.ICONS_PER_PAGE,
        config.ACTIVE_PAGE
      );
      const listSize = list.length;
      const nextNextPackage = getNextProp(usedIcons, startPackage);
      renderIcons(
        {
          pack: startPackage,
          package: npmPackage,
          version
        },
        list,
        event.state
      );

      /**
       * If we have more icons and this pack is finished
       */
      if (
        listSize < config.ICONS_PER_PAGE &&
        nextNextPackage &&
        !params.package
      ) {
        config.ACTIVE_PAGE = 1;
        config.ACTIVE_PACKAGE = nextNextPackage;

        reloadIcons();
      }
    }

    addSkeletonRemoverEvent();
    addCopySvgEvent();
    addShowDetailEvent();
  };
  addEvent(window, "popstate", reloadIcons);

  /**
   * Add initial packages
   */
  const urlParams = new URLSearchParams(window.location.search);
  const paramPackage = urlParams.get("package") || "";
  if (paramPackage) {
    _(`.${paramPackage}-item`).click();
    setTimeout(() => _(`.${paramPackage}-item`).click(), 0);
  }

  reloadIcons();
});
