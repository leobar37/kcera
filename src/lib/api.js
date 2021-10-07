import { wraperFetch } from "../utils/fetch.js";
import { API, API_EMAIL, API_EMAIL_TWO } from "../utils/constants.js";
import Axios from "axios";
const api = wraperFetch({
  baseUrl: API,
});
const apiBase = Axios.create({
  baseURL: API_EMAIL_TWO,
});
const leobarApi = Axios.create({
  baseURL: API_EMAIL,
});

export { api, apiBase };
export default leobarApi;
