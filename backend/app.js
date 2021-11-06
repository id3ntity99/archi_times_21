const express = require("express");
const cors = require("cors");
const app = express();
const { data } = require("./test");
const { getArticles, getDetail } = require("./controllers/news.controller");
const PORT = 5000;

//Static
//app.use(express.static("./frontend/public"));
const corsOptions = {
  origin: "http://localhost:3000",
  credential: true,
};

app.get("/", (req, res) => {
  res.send("Hello");
});

// Use imported middleWares
app.use(cors(corsOptions));
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
