<template>
  <form @submit.prevent="onSubmit" class="pokemon-search">
    <div class="pokemon-search__container">
      <input v-model="pokemon" type="text" @keyup="onSubmit" class="pokemon-search__input" placeholder="search">
      <font-awesome-icon class="pokemon-search__icon" :icon="['fas', 'search']" />
    </div>
  </form>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);

export default {
  name: 'PokemonSearch',

  components: {
    FontAwesomeIcon
  },

  data () {
    return {
      pokemon: ''
    }
  },

  methods: {
    onSubmit () {
      this.$emit('searchPokemon', this.pokemon)
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-search {
  position: relative;
  width: 100%;

  .pokemon-search__container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .pokemon-search__input {
      width: 100%;
      height: 50px;
      border-radius: 5px;
      background: #FFFFFF;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
      border: none;
      padding: 0 43px;
      font-size: 1rem;
    }

    .pokemon-search__icon {
      position: absolute;
      left: 15px;
      color: #BFBFBF;
    }
  }
}

</style>