import iconsData from './data';
import './resources/styles/main.scss';

const makeFilePath = function (pack, name) {
  return `${config.PATH_PREFIX}${pack}/src/${name}/${config.PATH_SUFFIX}`;
};

/**
 * Define global utils
 */
const input = document.querySelector("#searchBar");
const iconsContainer = document.querySelector(".iconList");
const packagesListSelector = document.querySelector(".listPackages ul");
const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('myParam');

/**
 * Add initial content
 */
let packagesList = '';
Object.keys(iconsData).forEach(packName => {
  packagesList += `<li>${packName}</li>`;
});
packagesListSelector.innerHTML = packagesList;


/**
 * Search mechanism
 */
input.addEventListener('input', search);
function search(evt){
  let searchValue = evt.target.value;
  let iconsToShow = searchValue.length ? icons.filter(icon => icon.name.includes(searchValue)) : icons;
  iconContainer.innerHTML = "";
  iconsToShow.forEach(icon => iconContainer.appendChild(icon.el));
}
