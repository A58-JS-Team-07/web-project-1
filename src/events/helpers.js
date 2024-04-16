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
 * @param {boolean} command - The command to control the visibility of the loader.
 * @returns {void}
 */
export const setLoader = (command) => {
  const loaderDiv = q('overlay-loading');
  console.log(loaderDiv);

  // if (command === 'start') {


  // } else if (command === 'stop') {

  // } else {
  //     throw new Error('Invalid loader command');
  // }
};
