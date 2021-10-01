import { wraperFetch } from "../utils/fetch.js";
import { API, API_EMAIL } from "../utils/constants.js";
const api = wraperFetch({
  baseUrl: API,
});
const leobarApi = wraperFetch({ baseUrl: API_EMAIL });
export { api, leobarApi };
