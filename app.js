const express = require("express");
const app = express();
const { data } = require("./backend/test");
const {
  getArticles,
  getDetail,
} = require("./backend/controllers/news.controller");
const PORT = 5000;

//Static
app.use(express.static("./frontend/public"));

app.get("/", (req, res) => {
  res.send("Hello");
});

// Use imported midlleWares
app.use(getArticles, getDetail);
app.get("/news", (req, res) => {
  // const newArticles = data.map((article) => {
  //   const { title, desc } = article;
  //   return { title, desc };
  // });
  // res.json(newArticles);
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
