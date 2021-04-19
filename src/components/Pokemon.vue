<template>
  <layout-default>
    <pokemon-search @searchPokemon="filterPokemonList" />
    <div class="pokemon-star-container" v-if="filteredData?.length">
      <pokemon-item 
        v-for="(pokemon, index) in paginate(filteredData)" 
        :key="index" 
        :pokemonName="pokemon.name"
        @openModal="showPokemonModal"
      />

      <div class="pokemon-star-container__buttons">
        <button 
          class="pokemon-star-container__button" 
          @click="toPage(currentPage - 1)"
          :disabled="currentPage === 1"
        >
          <font-awesome-icon class="fa-1x" :icon="['fas', 'chevron-left']" />
        </button>
        <button 
          class="pokemon-star-container__button" 
          @click="toPage(currentPage + 1)" 
          :disabled="currentPage === pagination.totalPages"
        >
          <font-awesome-icon class="fa-1x" :icon="['fas', 'chevron-right']" />
        </button>
      </div>
    </div>
    <pokemon-alert v-else />
  </layout-default>
  <pokemon-loading :loading="loading" />
  <pokemon-modal :pokemon="selectedPokemon" :showModal="showModal" @closeModal="closeModal" />
</template>

<script>
import LayoutDefault from '@/views/layouts/LayoutDefault';
import PokemonLoading from '@/components/common/PokemonLoading';
import PokemonSearch from '@/components/common/PokemonSearch';
import PokemonItem from '@/components/common/PokemonItem';
import PokemonModal from '@/components/common/PokemonModal';
import PokemonAlert from '@/components/common/PokemonAlert';
import { mapActions, mapGetters } from 'vuex';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);

export default {
  name: 'Pokemon',

  data () {
    return {
      searchPokemon: null,
      currentPage: 1,
      perPage: 6,
    }
  },

  components: {
    LayoutDefault,
    PokemonLoading,
    PokemonSearch,
    PokemonItem,
    PokemonModal,
    PokemonAlert,
    FontAwesomeIcon
  },

  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },
  
  computed: {
    ...mapGetters(['votedPokemon', 'pokemon', 'loading', 'showModal']),
    filteredData () {
      let search_array = this.pokemonList;
      let searchString = this.searchPokemon;

      if (!searchString) return search_array;

      searchString = searchString.trim().toLowerCase();
      search_array = search_array.filter(item => {
        if(item.name.toLowerCase().indexOf(searchString) !== -1) {
          return item;
        }
      })
      return search_array;
    },
    pagination () {
      let totalPokemon = this.filteredData.length;
      let pageFrom = (this.currentPage * this.perPage) - this.perPage;
      return  {
        totalPokemon,
        totalPages: Math.ceil(totalPokemon / this.perPage),
        range: {
          from: pageFrom,
          to: pageFrom + this.perPage
        }
      }
    },
    selectedPokemon () {
      return this.pokemon
    }
  },

  methods: {
    ...mapActions(['getPokemon', 'closePokemonModal']),

    showPokemonModal(pokemonName) {
      this.getPokemon(pokemonName)
    },

    filterPokemonList (pokemonText) {
      this.searchPokemon = pokemonText;
    },

    toPage (page) {
      this.currentPage = page
    },
    paginate (arrayPokemon) {
      let pokemonList = arrayPokemon.slice(
        this.pagination.range.from,
        this.pagination.range.to
      )
      return pokemonList
    },

    closeModal () {
      this.closePokemonModal();
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-star-container {
  margin-top: 30px;

  .pokemon-star-container__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .pokemon-star-container__button {
      padding: 10px 30px;
      border-radius: 60px;
      border: none;
      cursor: pointer;
      background-color: var(--active-button-color);
      margin: 0 5px 20px 5px;
      color: #fff;

      &[disabled] {
        cursor: not-allowed;
        background-color: var(--no-active-button-color);
      }
    }
  }
}
</style>