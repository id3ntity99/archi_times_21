const { data } = require("../test.js");

// MiddleWare
function getArticles(req, res, next) {
  if (!req.query.detail) {
    return res.json(data);
  }
  next();
}

function getDetail(req, res, next) {
  if (req.query.detail) {
    const detail = data.filter((article) => article.id === req.query.detail);
    const newDetail = detail.map((detail) => {
      const { title, desc, link } = detail;
      return { title, desc, link };
    });
    return res.json(newDetail);
  }
  next();
}

module.exports = { getArticles, getDetail };
