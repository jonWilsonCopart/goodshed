import axios from 'axios';

const instance = axios.create({
  // baseURL: "https://goodshed-e24e2.firebaseio.com/"
  baseURL: "http://localhost.com:3001",
  headers: {'X-myHeader-X': '*'}
});

export default instance