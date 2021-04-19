module.exports = {
  devServer: {
    proxy: {
      '/api/v2/pokemon/': {
        target: 'https://pokeapi.co',
        changeOrigin: true
      }
    }
  }
}