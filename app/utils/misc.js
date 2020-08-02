import { _a, _ } from "./selectors";
import { addEvent, copyText } from "./document";
import { showModal } from '../render/modalContent';

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
      showModal();
    });
  });
};
