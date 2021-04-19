<template>
  <div class="pokemon-alert">
    <p class="pokemon-alert__title">Uh-oh</p>
    <p class="pokemon-alert__text">You look lost on your journey!</p>
    <pokemon-button :isActive="true" path="/">Go back home</pokemon-button>
  </div>
</template>

<script>
import PokemonButton from './PokemonButton.vue'
export default {
  name: 'PokemonAlert',
  components: { PokemonButton },
}
</script>

<style lang="scss" scoped>
.pokemon-alert {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .pokemon-alert__title {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 0;
  }

  .pokemon-alert__text {
    font-size: 20px;
  }
}
</style>