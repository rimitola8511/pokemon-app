const mutations = {
  SET_POKEMON_LIST (state, payload) {
    state.pokemonList = payload;
  },

  SET_POKEMON (state, payload) {
    state.pokemon = { ...payload }
  },

  ADD_VOTED_POKEMON (state, payload) {
    state.votedPokemon.push({name: payload, active: true});
  },

  DELETE_VOTED_POKEMON(state, payload) {
    state.votedPokemon = state.votedPokemon.filter(pokemon => pokemon.name.toLowerCase() !== payload.toLowerCase());
  },

  SET_LOADING(state, payload) {
    state.loading = payload;
  },

  SET_SHOW_MODAL(state, payload) {
    state.showModal = payload;
    if(!state.showModal) {
      state.pokemon = {}
    }
  }
}

export default mutations;