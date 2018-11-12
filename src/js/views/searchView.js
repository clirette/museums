import { elements } from './selectors';

export const getInput = () => elements.searchInput.value;
export const clearResults = () => {
  elements.museumsList.innerHTML = '';
}

export const renderMuseums = (museums, artworks) => {
  museums.forEach(museum => renderMuseum(museum, artworks));
}

export const renderMuseum = (museum, artworks) => {
  const markup = `
  <li>
    <h4>${museum.building}</h4>
  </li>
  `;
  elements.museumsList.insertAdjacentHTML('beforeend', markup);
  renderArtworks(artworks);
}

let strList = [];
const renderArtworks = artworks => {
  let pre = '<p>Featuring works by:</p>';
  if (Array.isArray(artworks)) {
    artworks.forEach(renderArtwork);
  } else if (artworks){
    renderArtwork(artworks);
  } else {
    pre = '<h5>No artworks found for this museum</h5>';
  }
  const combined = strList.join('');
  elements.museumsList.insertAdjacentHTML('beforeend', pre+combined);
  strList = [];
}

const renderArtwork = artwork => {

  strList.push(`<h5>${artwork.artist} - ${artwork.title}</h5>`);
}

export const renderStateName = state => {
  elements.inState.innerText = ` in ${state}`;
}

