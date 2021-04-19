<template>
  <div class="LayoutDefault">
    <main class="LayoutDefault__main">
      <slot />

      <div class="pokemon-nav">
        <pokemon-button path="/pokemon-list">
          <font-awesome-icon class="fa-1x" :icon="['fas', 'list']" /> All
        </pokemon-button>
        <pokemon-button path="/pokemon-favorites">
          <font-awesome-icon class="fa-1x" :icon="['fas', 'star']" /> Favorites
        </pokemon-button>
      </div>
    </main>
  </div>
</template>

<script>
import PokemonButton from '@/components/common/PokemonButton';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);
export default {
  name: 'LayoutDefault',
  components: {
    PokemonButton,
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
.LayoutDefault {
  width: 100%;
  padding: 30px;

  .pokemon-nav {
    position: fixed;
    z-index: 2;
    bottom: 0;
    left: 0;
    background-color: #fff;
    height: 80px;
    width: 100%;
    box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
@media (min-width: 768px) {
  .LayoutDefault {
    width: 60%;

    .pokemon-nav {
      justify-content: center;
    }
  }
}
</style>