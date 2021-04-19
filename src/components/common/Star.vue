<template>
  <span class="pokemon-star__icon" :class="{ 'active': activePokemon }" @click="selectFavorite">
    <font-awesome-icon class="star fa-1x" :icon="['fas', 'star']" />
  </span>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);

export default {
  name: 'Star',

  components: {
    FontAwesomeIcon
  },

  props: {
    activePokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  methods: {
    selectFavorite () {
      this.$emit('selectedPokemon');
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-star__icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #bfbfbf;
    cursor: pointer;
  }

  .active {
    color: #f3d23e;
  }
</style>