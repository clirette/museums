import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/selectors';

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();
  console.log(query);
  if(query) {
    searchView.clearResults();
    searchView.renderStateName(query);
    state.search = new Search(query);
    await state.search.getMuseums();
    
    console.log(state.search.stateMuseums);
    // searchView.renderMuseums(state.search.stateMuseums);
    if (!Array.isArray(state.search.stateMuseums)) {
      await state.search.getArtworks(state.search.stateMuseums.id);
      searchView.renderMuseum(state.search.stateMuseums, state.search.artwork);
    } else {
      for (const museum of state.search.stateMuseums) {
        console.log(museum);
        await state.search.getArtworks(museum.id);
        console.log(state.search.artwork);
        searchView.renderMuseum(museum, state.search.artwork);
      }
    }
  }
}

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
})