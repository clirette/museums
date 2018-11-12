const axios = require('axios');

export default class Search {
  constructor(query) {
    this.query = query;
    this.url = 'https://cors-anywhere.herokuapp.com/https://gsafinearts.pbs.gsa.gov/emuseum/api';
  }

  async getMuseums() {
    try {
      const response = await axios.get(`${this.url}/search/buildings?State=${this.query}`);
      this.stateMuseums = response.data.results;
    } catch(error) {
      alert(error);
    }
  }

  async getArtworks(museumId) {
    try {
      const response = await axios.get(`${this.url}/id/buildings/${museumId}`);
      this.artwork = response.data.results.Objects;
    } catch(error) {
      console.log(error);
    }
  }
}