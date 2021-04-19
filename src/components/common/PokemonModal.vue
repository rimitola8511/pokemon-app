<template>
  <div class="pokemon-modal" v-if="showModal">
    <div class="pokemon-modal__content">
      <div class="pokemon-modal__header">
        <span class="close" @click="$emit('closeModal')">&times;</span>
        <img :src="pokemon.sprites.front_default" alt="pokemon.name">
      </div>
      <div class="pokemon-modal__body">
        <p><strong>Name:</strong> {{ pokemon.name }}</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }}</p>
        <p><strong>Height:</strong> {{ pokemon.height }}</p>
        <p><strong>Types:</strong> {{ getTypes }}</p>
      </div>
      <div class="pokemon-modal__footer">
        <button class="pokemon-modal__button" @click="saveToClipboard">Share to my friends</button>
        <star @selectedPokemon="selectedPokemon" :activePokemon="isPokemonSelected" />
      </div>
    </div>
    <div class="clipboard">Copy to clipboard</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Star from './Star.vue';
import useClipboard from 'vue-clipboard3';

export default {
  setup() {
    const { toClipboard } = useClipboard();

    const copy = async (text) => {
      try {
        await toClipboard(text);
      } catch (e) {
        console.error(e);
      }
    }

    return { copy }
  },
  name: "PokemonModal",
  components: { Star },
  props: {
    showModal: {
      type: Boolean,
      required: true,
      default: false
    },

    pokemon: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    ...mapGetters(['votedPokemon']),
    isPokemonSelected () {
      const currentPokemon = this.votedPokemon.find(
        pokemon => pokemon.name.toLowerCase() === this.pokemon.name.toLowerCase()
      );

      return !!currentPokemon;
    },
    getTypes () {
      const types = this.pokemon.types.map(({ type }) => type.name);
      return types.join(', ');
    },
    getPokemonFeatures () {
      const { name, weight, height } = this.pokemon;
      return `${name}, ${weight}, ${height }, ${this.getTypes}`;
    }
  },

  methods: {
    ...mapActions(['saveVotedPokemon']),
    selectedPokemon () {
      this.saveVotedPokemon(this.pokemon.name);
    },
    saveToClipboard () {
      this.copy(this.getPokemonFeatures);
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemon-modal {
  display: block;
  position: fixed;
  z-index: 5;
  padding-top: 80px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

/* Modal Content */
.pokemon-modal__content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.pokemon-modal__header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 16px;
  background-image: url("../../assets/fondo-modal.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;

  img {
    width: 120px;
    height: 120px;
  }
}

.pokemon-modal__body {
  padding: 2px 16px;

  p {
    border-bottom: 1px solid #e8e8e8;
    padding-bottom: 5px;
  }
}

.pokemon-modal__footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 16px 15px 16px;
}

.pokemon-modal__button {
  padding: 11px 20px;
  background-color: var(--active-button-color);
  border-radius: 60px;
  color: #ffffff;
  border: none;
  font-weight: 700;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}

@media (min-width: 768px) {
  .pokemon-modal__content {
    width: 22%;
  }
}
</style>