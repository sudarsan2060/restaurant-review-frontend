import axios from "axios";

export default axios.create({
  baseURL: "https://restaurants-6tlh.onrender.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
