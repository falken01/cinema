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
  },
  getShowing(id) {
    return API_CLIENT.get(`/Showing/${id}`);
  },
  getMovie(id) {
    return API_CLIENT.get(`/Movie/${id}`);
  },
  getHalls() {
    return API_CLIENT.get(`/Hall`);
  },
  addHall(data) {
    return API_CLIENT.post(`/Hall`, data);
  },
  deleteHall(id) {
    return API_CLIENT.delete(`/Hall/${id}`);
  },
  editHall(data) {
    return API_CLIENT.put(`/Hall/${data.hallId}`, data);
  },
  addMovie(data) {
    return API_CLIENT.post(`/Movie`, data);
  },
  deleteMovie(id) {
    return API_CLIENT.delete(`/Movie/${id}`);
  },
  editMovie(data) {
    return API_CLIENT.put(`/Movie/${data.movieId}`, data);
  },
  getMovies() {
    return API_CLIENT.get(`/Movie`);
  },
};
