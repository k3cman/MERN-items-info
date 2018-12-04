const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const _ = require("lodash");

const conn = require("../../config/connection");
// TEST ROUTE
router.get("/testall", (req, res) => {
  conn.query(
    `SELECT * FROM enmon.article_collections`,
    (err, result, fields) => {
      const data = result;
      let tempObj = {};

      data.forEach(item => {
        if (typeof tempObj[item.brand] === "undefined")
          tempObj[item.brand] = [];

        tempObj[item.brand].push({
          id: item.id,
          title: item.title
        });
      });

      let newItems = [];

      for (let brand in tempObj) {
        newItems.push({
          brand: brand,
          items: []
        });
        var lastItem = newItems.length - 1;
        tempObj[brand].forEach(item => {
          newItems[lastItem].items.push(item);
        });
      }

      console.log(newItems);
      res.json(newItems);
    }
  );
});

router.get("/all", (req, res) => {
  conn.query(
    `SELECT * FROM enmon.article_collections`,
    (err, result, fields) => {
      let output = _.mapValues(_.groupBy(result, "brand"), list =>
        list.map(article => _.omit(article, "brand"))
      );
      console.log(output);
      if (!err) {
        res.status(200).json(output);
      } else {
        res.status(404).json({ error: err });
      }
    }
  );
});

router.get("/category/:cat", (req, res) => {
  conn.query(
    `SELECT id,title,brand,image FROM enmon.article_collections WHERE category in ('${
      req.params.cat
    }');`,
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

router.get("/brand/:brand", (req, res) => {
  conn.query(
    `SELECT id,title,image WHERE brand=?`,
    [req.params.brand],
    (err, result, fields) => {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(400).json({ error: err });
      }
    }
  );
});

module.exports = router;
