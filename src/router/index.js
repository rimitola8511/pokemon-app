import { createRouter, createWebHistory } from 'vue-router';
import PokemonHome from '../views/PokemonHome.vue';
//import PokemonList from '../views/PokemonList.vue';

const routes = [
  {
    path: '/',
    name: 'PokemonHome',
    component: PokemonHome
  },
  {
    path: '/pokemon-list',
    name: 'PokemonList',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonList.vue')
  },
  {
    path: '/pokemon-favorites',
    name: 'PokemonFavorites',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonFavorites.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
