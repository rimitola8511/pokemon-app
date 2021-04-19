import PokemonService from '@/service/PokemonService';

const actions = {
  async getPokemonList ({ commit }) {
    commit('SET_LOADING', true);
    setTimeout( async () => {
      try {
        const { data: { results } } = await PokemonService.pokemonList();
        commit('SET_POKEMON_LIST', results);
      } catch (error) {
        console.log(error);
      } finally {
        commit('SET_LOADING', false);
      }
    }, 1000);
  },

  async getPokemon ({ commit }, pokemonName) {
    try {
      commit('SET_LOADING', true);
      const { data } = await PokemonService.pokemon(pokemonName);
      commit('SET_POKEMON', data);
      commit('SET_SHOW_MODAL', true);
    } catch (error) {
      console.log(error);
    } finally {
      commit('SET_LOADING', false);
    }
  },

  saveVotedPokemon ({ state, commit }, pokemon) {
    const votedPokemonFound = state.votedPokemon.find(poke => poke.name.toLowerCase() === pokemon.toLowerCase());
    !votedPokemonFound ? commit('ADD_VOTED_POKEMON', pokemon) : commit('DELETE_VOTED_POKEMON', pokemon);
  },

  closePokemonModal({ commit }) {
    commit('SET_SHOW_MODAL', false);
  }
}

export default actions;
