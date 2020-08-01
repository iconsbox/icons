const D = document;

export const ready = fn => {
  // see if DOM is already available
  if (D.readyState === "complete" || D.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    D.addEventListener("DOMContentLoaded", fn);
  }
};

export const getDocHeight = () => {
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
};

export const addEvent = (obj, type, fn) => {
  if (obj.attachEvent) {
    obj["e" + type + fn] = fn;
    obj[type + fn] = function() {
      obj["e" + type + fn](window.event);
    };
    obj.attachEvent("on" + type, obj[type + fn]);
  } else {
    obj.addEventListener(type, fn, false);
  }
};

export const getScrollY = () => {
  let scrOfY = 0;
  if (typeof window.pageYOffset == "number") {
    //Netscape compliant
    scrOfY = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
  }
  return scrOfY;
};
