const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const _ = require("lodash");

const conn = require("../../config/connection");

router.get("/all-items", (req, res) => {
  conn.query(
    `SELECT * FROM enmon.article_collections`,
    (err, result, fields) => {
      let output = _.mapValues(_.groupBy(result, "brand"), list =>
        list.map(article => _.omit(article, "brand"))
      );
      if (!err) {
        res.status(200).json(output);
      } else {
        res.status(404).json({ error: err });
      }
    }
  );
});

module.exports = router;
