import iconsData from './data';
import './resources/styles/main.scss';

const makeFilePath = function (pack, name) {
  return `${config.PATH_PREFIX}${pack}/src/${name}/${config.PATH_SUFFIX}`;
};

const input = document.querySelector("div.search-bar input");
const iconContainer = document.querySelector("div.box div.tabler-icons");
let icons = [];

document.querySelectorAll("div.tabler-icon").forEach(icon => icons.push({
  el : icon,
  name : icon.querySelector('strong').innerHTML,
}));

input.addEventListener('input', search);

function search(evt){
  let searchValue = evt.target.value;
  let iconsToShow = searchValue.length ? icons.filter(icon => icon.name.includes(searchValue)) : icons;
  iconContainer.innerHTML = "";
  iconsToShow.forEach(icon => iconContainer.appendChild(icon.el));
}
