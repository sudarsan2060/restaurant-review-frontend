import axios from "../http-common";

class RestaurantDataService {
  getAll(page = 0) {
    return axios.get(`restaurants?page=${page}`);
  }

  get(id) {
    return axios.get(`/restaurants/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return axios.get(`restaurants?${by}=${query}&page=${page}`);
  }

  createReview(data) {
    return axios.post("/restaurants/review", data);
  }

  updateReview(data) {
    return axios.put("/restaurants/review", data);
  }

  deleteReview(id, userId) {
    return axios.delete(`/restaurants/review?id=${id}`, {
      data: { user_id: userId },
    });
  }

  getCuisines(id) {
    return axios.get(`/restaurants/cuisines`);
  }
}

export default new RestaurantDataService();
