const express = require("express");
const cors = require("cors");
const app = express();
const { data } = require("./test");
const pageRouter = require("./routes/news.route");
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

// Use router and cors
app.use(cors(corsOptions));
app.use("/news/page/", pageRouter);

// Run server
app.listen(PORT, () => {
  console.log(`Connected to port ${PORT}`);
});
