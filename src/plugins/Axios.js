import axios from 'axios';

// const URL = 'https://pokeapi.co/api/v2';

const apiClient = axios.create({
  //baseURL: URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

export default apiClient;