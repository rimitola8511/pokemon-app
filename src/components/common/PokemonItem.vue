<template>
  <div class="pokemon-item">
    <p class="pokemon-item__name" @click="$emit('openModal', pokemonName)">{{ pokemonName }}</p>
    <star :activePokemon="isPokemonVoted" @selectedPokemon="selectedPokemon" />
  </div>
</template>

<script>
import Star from './Star';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PokemonItem',

  components: {
    Star
  },

  props: {
    pokemonName: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapGetters(['votedPokemon']),
    isPokemonVoted () {
      const currentPokemon = this.votedPokemon.find(
        pokemon => pokemon.name.toLowerCase() === this.pokemonName.toLowerCase()
      )
      return !!currentPokemon;
    },
  },

  methods: {
    ...mapActions(['saveVotedPokemon']),
    selectedPokemon () {
      this.saveVotedPokemon(this.pokemonName);
    }
  }

}
</script>

<style lang="scss" scoped>
.pokemon-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  background-color: #fff;
  padding: 5px 10px 5px 20px;
  border-radius: 5px;
  margin-top: 10px;

  .pokemon-item__name {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    cursor: pointer;
  }
}
</style>