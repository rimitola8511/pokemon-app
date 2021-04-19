<template>
  <pokemon :pokemonList="pokemonList" /> 
</template>

<script>
import Pokemon from '@/components/Pokemon';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'PokemonList',
  components: { Pokemon },
  computed: {
    ...mapGetters(['pokemonList'])
  },
  created () {
    this.getPokemonList()
  },
  methods: {
    ...mapActions(['getPokemonList'])
  }
}
</script>
