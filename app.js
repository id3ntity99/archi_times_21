const express = require("express");
const app = express();
const { data } = require("./backend/test");
const PORT = 5000;

//Static
app.use(express.static("./frontend/public"));
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/news", (req, res) => {
  // const newArticle = data.map((article) => {
  //   const { title, id } = article;
  //   return { title, id };
  // });
  // res.json(newArticle);
  console.log(req.query);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
