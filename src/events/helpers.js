import { SECONDS_DELAY } from '../common/constants.js';
/**
 * Shorthand for document.querySelector
 * @param {string} selector
 * @returns {Element}
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Shorthand for document.querySelectorAll
 * @param {string} selector
 * @returns {NodeLists<Element>}
 */
export const qs = (selector) => document.querySelectorAll(selector);

/**
 * Sets the active state for navigation links based on the current page.
 * @param {string} page - The page identifier to set as active.
 * @returns {void}
 */
export const setActiveNav = (page) => {
  const navs = qs('a.nav-link');

  Array
      .from(navs)
      .forEach((element) => element
          .getAttribute('data-page') === page ?
      element.classList.add('active') :
      element.classList.remove('active'),
      );
};


/**
 * Sets the visibility of the loader overlay.
 * @param {string} command - The command to control the visibility of the loader. Should be either 'start' or 'stop'.
 * @returns {void}
 */
export const setLoader = (command) => {
  const loaderDiv = q('.overlay-loading');

  if (command === 'start') {
    loaderDiv.classList.add('active');
  } else if (command === 'stop') {
    loaderDiv.classList.remove('active');
  } else {
    throw new Error('Invalid loader command');
  }
};

export const removeMessageAfter3Seconds = (message) => {
  setTimeout(() => {
    message.textContent = '';
  }, SECONDS_DELAY);
};
