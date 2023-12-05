import axios from "axios";
let API_CLIENT = axios.create({
  baseURL: `https://localhost:5000`,
  withCredentials: true, // This is the default
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    // "Access-Control-Allow-Headers":
    //   "Origin, X-Requested-With, Content-Type, Accept",
    // "Access-Control-Allow-Credentials": "true",
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
  logout() {
    return API_CLIENT.get("/Account/logout");
  },
  reserve(seat) {
    return API_CLIENT.post("/create", seat);
  },
  confirm(reservation) {
    return API_CLIENT.post("/confirm", reservation);
  },
  removePending(reservation) {
    return API_CLIENT.delete("/remove-pending", reservation);
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
  getReservations() {
    return API_CLIENT.get("/Reservation");
  },
  getHalls() {
    return API_CLIENT.get(`/Hall`);
  },
  getHall(id) {
    return API_CLIENT.get(`/Hall/${id}`);
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
  getShowings() {
    return API_CLIENT.get(`/Showing`);
  },
  addShowing(data) {
    return API_CLIENT.post(`/Showing`, data);
  },
  getMyReservations() {
    return API_CLIENT.get(`/Reservation`);
  },
  getUserDetails() {
    return API_CLIENT.get("/Account/account-details");
  },
};
