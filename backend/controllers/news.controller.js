const { data } = require("../test.js");
// MiddleWare

function getPages(req, res, next) {
  const contentSize = 10;
  const pgSize = Math.ceil(data.length / 10);
  const pgNumber = Number(req.params.id);
  const skipSize = (pgNumber - 1) * contentSize;
  const maxIdx = contentSize * pgNumber;
  if (!req.query.detail) {
    // Temp array for paginated result.
    let result = [];
    // Get array of articles acoording to page query.
    for (let i = skipSize; i < maxIdx; i++) {
      result.push(data[i]);
    }
    res.status(200).json(result);
  }
  next();
}

function getDetail(req, res) {
  const contentSize = 10;
  const pgNumber = Number(req.params.id);
  const skipSize = (pgNumber - 1) * contentSize;
  const maxIdx = contentSize * pgNumber;
  if (req.query.detail) {
    const detail = data.filter((article) => article.id === req.query.detail);
    const newDetail = detail.map((detail) => {
      const { title, desc, link, id } = detail;
      return { title, desc, link, id };
    });
    // 유저가 해당 페이지를 벗어난 뉴스의 디테일을 불러올 경우.
    if (req.query.detail < skipSize || req.query.detail > maxIdx) {
      return res.status(400).json({
        error: true,
        content: "detail id exceeded maximum id or inferior to minimum id.",
      });
    }
    res.status(200).json(newDetail);
  }
}

module.exports = { getPages, getDetail };
