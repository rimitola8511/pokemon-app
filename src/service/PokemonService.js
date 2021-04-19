import apiClient from '../plugins/Axios';

const pokemonList = function () {
  return apiClient.get('/api/v2/pokemon/');
}

const pokemon = function (pokemonName) {
  return apiClient.get(`/api/v2/pokemon/${pokemonName}`);
}

export default {
  pokemonList,
  pokemon
}