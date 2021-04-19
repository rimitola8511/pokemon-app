<template>
  <div class="pokemon-button">
    <router-link :class="{ 'active': isActive }" :to="path" @click="$emit('pokemonButton')">
      <slot />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'PokemonButton',

  props: {
    path: {
      type: String,
      required: true
    },

    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-button {
  a {
    padding: 11px 20px;
    background-color: var(--no-active-button-color);
    border-radius: 60px;
    color: #ffffff;
    border: none;
    font-weight: 700;
    text-decoration: none;
    margin-right: 10px;

    &.router-link-exact-active {
      background-color: var(--active-button-color);
    }
  }

  .active {
    background-color: var(--active-button-color);
  }
}
</style>