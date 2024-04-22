import axios from "axios";
import moment from "moment";

const apiKey = "f5pnwalTjhj0waE4JPacvOdlAHTxodExaA4BM7fT";
const today = moment().format("YYYY-MM-DD");

const blogFetch = axios.create({
  baseURL: `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=${apiKey}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { blogFetch, apiKey, today };
