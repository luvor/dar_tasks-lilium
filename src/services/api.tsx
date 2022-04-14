import axios from "axios";
export const api = axios.create({
  baseURL: "https://ca-api.witharts.kz/",
  timeout: 5000,
});
