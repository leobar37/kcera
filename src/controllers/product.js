import { api } from "../lib/api.js";

const fetchProducts = async (arr) => {
  const data = await api();

  return data[arr];
};

export { fetchProducts };
