// import { api } from "../lib/api.js";
// import { API } from "../utils/constants";
const fetchProducts = async (arr) => {
  // console.log("pre data");
  // const data = await api();
  let data = await import("../data/products.json");

  return data[arr];
};

export { fetchProducts };
