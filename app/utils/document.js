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

export const addEvent = (obj, type, fn) => {
  if (obj.attachEvent) {
    obj["e" + type + fn] = fn;
    obj[type + fn] = function() {
      obj["e" + type + fn](window.event);
    };
    obj.attachEvent("on" + type, obj[type + fn]);
  } else {
    obj.removeEventListener(type, fn, false);
    obj.addEventListener(type, fn, false);
  }
};

export const getScrollY = () => {
  let scrOfY = 0;
  if (typeof window.pageYOffset == "number") {
    //Netscape compliant
    scrOfY = window.pageYOffset;
  } else if (D.body && D.body.scrollTop) {
    //DOM compliant
    scrOfY = D.body.scrollTop;
  }
  return scrOfY;
};

export const appendHtml = (el, str) => {
  const div = document.createElement("div");
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
};
