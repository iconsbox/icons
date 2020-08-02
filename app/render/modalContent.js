import {addEvent, copyText,} from "../utils/document";
import {_, _a} from '../utils/selectors';

const modalContainer = _('.modal');
const iconHolder =  _(".icon-holder");

/**
 * Close modal
 */
addEvent(_('.modal-close'), 'click', () => {
  modalContainer.classList.remove('visible');
});

/**
 * Click to copy codes
 */
Array.from(_a(".code") || []).forEach(element => {
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
    const colorName = e.currentTarget.getAttribute('data-color');

    // remove previous color
    const previousClassName = iconHolder.getAttribute('data-active-color') || '';
    if(previousClassName) {
      iconHolder.classList.remove(previousClassName);
    }
    iconHolder.classList.add(colorName);
    iconHolder.setAttribute('data-active-color', colorName);
  });
});

/**
 * Show modal
 */
export const showModal = () => {
  modalContainer.classList.add('visible');
};
