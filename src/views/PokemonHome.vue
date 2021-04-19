<template>
  <div class="pokemon-home">
    <header class="pokemon-home__header">
      <img src="../assets/pikachu.png" alt="Pikachu">
    </header>
    <main class="pokemon-home__main">
      <h1>Welcome to Pokédex</h1>
      <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
      <pokemon-button :isActive="true" path="/pokemon-list">Get started</pokemon-button>
    </main>
  </div>
</template>

<script>
import PokemonButton from '@/components/common/PokemonButton';

export default {
  name: 'Home',
  components: {
    PokemonButton
  }
}
</script>

<style lang="scss" scoped>
.pokemon-home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2.225rem auto 0 auto;

  .pokemon-home__header {
    position: relative;

    img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      background-image: url("../assets/fondoPikachu.png");
      background-repeat: no-repeat;
      background-position: 46px 67px;
    }
  }

  .pokemon-home__main {
    text-align: center;
    padding: 30px;

    h1 {
      font-weight: 700;
      font-size: 1.625rem;
    }

    p {
      margin-bottom: 40px;
    }
  }
}
</style>
