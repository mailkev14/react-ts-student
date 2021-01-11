import axios from "axios";

axios.defaults.baseURL = "https://reqres.in/";

export function loginAPI(email, password) {
  return axios.post("/api/login", { email, password });
}
