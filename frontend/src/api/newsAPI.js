const axios = require("axios");
//const queryString = require("query-string");

export function getAllNews() {
  const parsedParams = window.location.search;
  console.log(parsedParams);
  return axios.get(`http://localhost:5000/news${parsedParams}`);
}
