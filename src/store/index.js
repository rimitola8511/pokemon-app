import { createStore } from 'vuex';
import PokemonModule from './modules/pokemon';

export default createStore({
  modules: {
    PokemonModule
  }
})
