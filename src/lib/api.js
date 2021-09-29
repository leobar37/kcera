import { wraperFetch } from "../utils/fetch.js";
import { API } from "../utils/constants.js";
const api = wraperFetch({
  baseUrl: API,
});
export { api };
