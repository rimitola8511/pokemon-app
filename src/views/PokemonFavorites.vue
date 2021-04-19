<template>
  <pokemon :pokemonList="votedPokemon" /> 
</template>

<script>
import Pokemon from '@/components/Pokemon';
import { mapGetters } from 'vuex';

export default {
  name: 'PokemonList',
  components: { Pokemon },
  computed: {
    ...mapGetters(['votedPokemon'])
  }
}
</script>