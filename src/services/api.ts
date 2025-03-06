import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // URL da sua API  
});
