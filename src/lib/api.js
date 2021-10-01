import { wraperFetch } from "../utils/fetch.js";
import { API, API_EMAIL } from "../utils/constants.js";
import Axios from "axios";
const api = wraperFetch({
  baseUrl: API,
});
const leobarApi = Axios.create({
  baseURL: API_EMAIL,
});

export { api };
export default leobarApi;
