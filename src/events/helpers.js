import { SECONDS_DELAY } from "../common/constants.js";
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


export const setLoader = (command) => {
  const loaderDiv = q('.overlay-loading');
  console.log('setLoader');
  console.log(loaderDiv);

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
    return message.textContent = '';
  }, SECONDS_DELAY);
}
