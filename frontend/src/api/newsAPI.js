import axios from "axios";

export function getAllNews() {
  axios.get("http://localhost:5000/news");
}
