const axios = require("axios");
//const queryString = require("query-string");

export function getAllNews() {
  //Get query string
  const parsedParams = window.location.pathname;
  // GET Request with query param.
  const response = axios.get(`http://localhost:5000${parsedParams}`);
  return response;
}
