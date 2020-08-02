import { _a } from "./selectors";
import { addEvent } from "./document";

/**
 * Load image skeleton
 */
export const addSkeletonRemoverEvent = () => {
  Array.from(_a("img") || []).forEach(function(element) {
    console.log("aaa");
    addEvent(element, "load", e => {
      const img = e.target;
      img.classList.remove("loading");
    });
  });
};
