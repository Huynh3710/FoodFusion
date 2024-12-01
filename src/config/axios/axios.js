import axios from "axios";

const REACT_APP_BE_API_URL = "http://localhost:8080";

export default axios.create({
  baseURL: REACT_APP_BE_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
