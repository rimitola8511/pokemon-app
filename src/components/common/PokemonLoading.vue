<template>
  <div id="overlay" v-if="loading">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    loading: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  created () {
    console.log(this.loading)
  }
}
</script>

<style lang="scss" scoped>
#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--background-color);
  z-index: 1000;
  cursor: pointer;

  .loader {
    position: absolute;
    top: 40%;
    left: 35%;
    background-image: url("../../assets/loader.png");
    background-repeat: no-repeat;
    width: 106px;
    height: 106px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
@media (min-width: 768px) {
  #overlay {
    .loader {
      left: 46%;
    }
  }
}
</style>