const express = require("express");
const router = express.Router();

const { getPages, getDetail } = require("../controllers/news.controller");

router.get("/:id", getPages);
router.get("/:id", getDetail);

module.exports = router;
