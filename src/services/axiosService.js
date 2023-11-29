import axios from "axios";
let API_CLIENT = axios.create({
  baseURL: `https://localhost:5000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  register(userDetails) {
    API_CLIENT.withCredentials = true;
    return API_CLIENT.post("/Account/register", userDetails);
  },
  login(userDetails) {
    API_CLIENT.withCredentials = true;
    return API_CLIENT.post("/Account/login", userDetails);
  },
  getRole() {
    return API_CLIENT.get("/Account/roles");
  },
  getTable(date) {
    return API_CLIENT.get(`/Movie/date/${date}`);
  }
};


