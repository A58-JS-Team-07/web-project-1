import { loadGIFsBySearchTerm } from "../requests/request-service.js";
import { q } from "./helpers.js";
import { CONTAINER_SELECTOR } from "../common/constants.js";
import { toSearchView } from "../views/search-view.js";

export const renderSearchItems = async (searchTerm) => {
    const gifs = await loadGIFsBySearchTerm(searchTerm);

    q(CONTAINER_SELECTOR).innerHTML = toSearchView(searchTerm, gifs);
};

