import { _a, _ } from "./selectors";
import { addEvent, copyText } from "./document";
import { showModal } from '../render/modalContent';
import config from "../config";

/**
 * Make a path of svg file
 * @param pack
 * @param name
 * @returns {string}
 */
export const makeFilePath = function(pack, name) {
  return `${config.PATH_PREFIX}${pack}/src/${name}${config.PATH_SUFFIX}`;
};

/**
 * Load image skeleton
 */
export const addSkeletonRemoverEvent = () => {
  Array.from(_a("img") || []).forEach(function(element) {
    addEvent(element, "load", e => {
      const img = e.target;
      img.classList.remove("loading");
    });
  });
};

/**
 * Copy svg file
 */
export const addCopySvgEvent = () => {
  Array.from(_a(".copy") || []).forEach(element => {
    addEvent(element, "click", e => {
      e.stopPropagation();
      e.preventDefault();
      const button = e.currentTarget;
      const svgAddress =
        button.parentNode.parentNode.querySelector("img").getAttribute("src") ||
        "";
      fetch(svgAddress)
        .then(res => res.text())
        .then(data => {
          copyText(data);
          _(".text-copied").classList.add("visible");
          setTimeout(() => {
            _(".text-copied").classList.remove("visible");
          }, 400);
        });
    });
  });
};

/**
 * Show icon details modal
 */
export const addShowDetailEvent = () => {
  Array.from(_a(".details") || []).forEach(element => {
    addEvent(element, "click", e => {
      const box = e.currentTarget.parentNode.parentNode;
      const packName = box.getAttribute('data-pack') || '';
      const iconName = box.getAttribute('data-icon') || '';

      showModal(packName, iconName);
    });
  });
  Array.from(_a(".box img") || []).forEach(element => {
    addEvent(element, "click", e => {
      const box = e.currentTarget.parentNode;
      const packName = box.getAttribute('data-pack') || '';
      const iconName = box.getAttribute('data-icon') || '';

      showModal(packName, iconName);
    });
  });
};
