import { loadBondGIFs } from '../requests/request-service.js';
import { q } from './helpers.js';
import { CONTAINER_SELECTOR } from '../common/constants.js';
import { toJamesBondView } from '../views/james-bond-view.js';


/**
 * Renders James Bond GIF items into a container element.
 * @async
 * @returns {Promise<void>}
 */
export const renderBondItems = async () => {
  const bondGIFs = await loadBondGIFs();

  q(CONTAINER_SELECTOR).innerHTML = toJamesBondView(bondGIFs);
};
