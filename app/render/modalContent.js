import {addEvent, copyText,} from "../utils/document";
import {_, _a} from '../utils/selectors';

const modalContainer = _('.modal');

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
    e.stopPropagation();
    e.preventDefault();
    const data = e.currentTarget.value;

    copyText(data);
    _(".text-copied").classList.add("visible");
    setTimeout(() => {
      _(".text-copied").classList.remove("visible");
    }, 400);
  });
});

addEvent(_('.modal-close'), 'click', () => {
  modalContainer.classList.remove('visible');
});

export const showModal = () => {
  modalContainer.classList.add('visible');
};
