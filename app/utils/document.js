const D = document;

export const ready = fn => {
  // see if DOM is already available
  if (
    D.readyState === "complete" ||
    D.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    D.addEventListener("DOMContentLoaded", fn);
  }
};

export const getDocHeight = () => {
  return Math.max(
    D.body.scrollHeight, D.documentElement.scrollHeight,
    D.body.offsetHeight, D.documentElement.offsetHeight,
    D.body.clientHeight, D.documentElement.clientHeight
  );
};
