import { addEvent, copyText } from "../utils/document";
import { _, _a } from "../utils/selectors";
import iconsData from "../data";
import {makeFilePath} from "../utils/misc";

const modalContainer = _(".modal");
const iconHolder = _(".icon-holder");
const makeSvgPath = (pack, icon) => `import ${icon} from '${pack}/${icon}/index.svg`;
const makeComponentPath = (pack, icon) => `import { ${icon} } from '${pack}`;
const makeSpritePath = (pack, icon) => `import { ${icon} } from '${pack}/sprite`;

/**
 * Close modal
 */
addEvent(_(".modal-close"), "click", () => {
  modalContainer.classList.remove("visible");
  document.body.style.overflowY = "auto";
});

/**
 * Click to copy codes
 */
Array.from(_a("input.code") || []).forEach(element => {
  addEvent(element, "click", e => {
    const data = e.currentTarget.value;

    copyText(data);
    _(".text-copied").classList.add("visible");
    setTimeout(() => {
      _(".text-copied").classList.remove("visible");
    }, 400);
  });
});

/**
 * Colors apply to svg
 */
Array.from(_a(".color") || []).forEach(element => {
  addEvent(element, "click", e => {
    const colorName = e.currentTarget.getAttribute("data-color");

    // remove previous color
    const previousClassName =
      iconHolder.getAttribute("data-active-color") || "";
    if (previousClassName) {
      iconHolder.classList.remove(previousClassName);
    }
    iconHolder.classList.add(colorName);
    iconHolder.setAttribute("data-active-color", colorName);
  });
});

/**
 * Show modal
 */
export const showModal = (packName, iconName) => {
  const pack = iconsData[packName] || {
    icons: {},
    package: "",
    version: ""
  };
  const icon = pack.icons[iconName];
  const svgAddress = makeFilePath(packName, iconName);
  const iconKeywords = icon.k.push(iconName, iconName.replace('Icon', ''));
  const keywords =

  modalContainer.querySelector('.icon-name').innerHTML = iconName;
  modalContainer.querySelector('.package-version').innerHTML = pack.version;
  modalContainer.querySelector('.package-name1').innerHTML = pack.package;
  modalContainer.querySelector('.package-name2').innerHTML = pack.package;
  modalContainer.querySelector('.svgImport').value = makeSvgPath(pack.package, iconName);
  modalContainer.querySelector('.componentImport').value = makeComponentPath(pack.package, iconName);
  modalContainer.querySelector('.spriteImport').value = makeSpritePath(pack.package, iconName);
  modalContainer.querySelector('#download-svg').setAttribute('href', svgAddress);
  modalContainer.querySelector('#download-svg').setAttribute('download', iconName);
  modalContainer.querySelector('.icon-holder').innerHTML = '<span class="skeleton"></span>';
  modalContainer.classList.add("visible");
  document.body.style.overflowY = "hidden";

  // get svg content
  fetch(svgAddress)
    .then(res => res.text())
    .then(data => {
      modalContainer.querySelector('.icon-holder').innerHTML = data;
    });
};
