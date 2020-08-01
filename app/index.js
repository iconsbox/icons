import config from "./config";
import iconsData from "./data";
import "./resources/styles/main.scss";
import { _, _a } from "./utils/selectors";
import { paginate } from "./utils/array";
import renderIcons from "./render/iconsList";
import { ready, addEvent, getScrollY } from "./utils/document";
import { getNextProp } from "./utils/object";

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
  const IconDataKey = Object.keys(iconsData);
  const searchResultData = {};

  /**
   * Add initial select packages
   */
  let packagesList = "<li>All</li>";
  IconDataKey.forEach(packName => {
    packagesList += `<li>${packName}</li>`;
  });
  packagesListSelector.innerHTML = packagesList;

  /**
   * Search mechanism
   */
  addEvent(searchBar, "input", evt => {
    let searchValue = evt.target.value.toLowerCase().trim();
    IconDataKey.forEach(pack => {
      let { icons, package: npmPackage, version: npmVersion } = iconsData[pack];
      Object.keys(icons).forEach(icon => {
        const currentIcon = icons[icon];
        /**
         * Check if icons name or keywords looks like search term
         */
        if (
          icon.toLowerCase() === searchValue ||
          icon.toLowerCase().indexOf(searchValue) > -1 ||
          currentIcon.k.join("-").indexOf(searchValue) > -1
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

    if (y >= 640) {
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
   * Copy svg file
   */
  Array.from(_(".copy") || []).forEach(function(element) {
    addEvent(element, "click", () => {
      const svgContent = fetch(
        "https://raw.githubusercontent.com/snappmarket/IconBox/master/packages/Medical/src/BottleIcon/index.svg"
      ).then(data => {
        console.log(data);
      });
    });
  });

  /**
   * Show icons list in page
   */
  const reloadIcons = function(event = {}) {
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};
    params.size = urlParams.get("size") || 12;
    params.package = urlParams.get("package") || "";
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
        list,
        event.state
      );
    } else {
      const startPackage = config.ACTIVE_PACKAGE || IconDataKey[0];
      let { icons, package: npmPackage, version } = iconsData[startPackage];
      const list = paginate(
        Object.keys(icons),
        config.ICONS_PER_PAGE,
        config.ACTIVE_PAGE
      );
      const listSize = list.length;
      const nextNextPackage = getNextProp(iconsData, startPackage);
      renderIcons(
        {
          pack: startPackage,
          package: npmPackage,
          version
        },
        list
      );

      /**
       * If we have more icons and this pack is finished
       */
      if (listSize < config.ICONS_PER_PAGE && nextNextPackage) {
        config.ACTIVE_PAGE = 1;
        config.ACTIVE_PACKAGE = nextNextPackage;

        let {
          icons: iconsNext,
          package: npmPackageNext,
          version: versionNext
        } = iconsData[nextNextPackage];

        renderIcons(
          {
            pack: nextNextPackage,
            package: npmPackageNext,
            version: versionNext
          },
          paginate(
            Object.keys(iconsNext),
            config.ICONS_PER_PAGE,
            config.ACTIVE_PAGE
          )
        );
      }
    }
  };
  addEvent(window, "popstate", reloadIcons);
  reloadIcons();
});
