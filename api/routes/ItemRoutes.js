const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const conn = require("../config/connection");

router.get("/", (req, res) => {
  conn.query(
    `SELECT artikli_info.title,artikli_info.pdf_url,artikli_brands.brand,artikli_cats.category
    FROM artikli_info
    INNER JOIN artikli_brands ON artikli_info.brand_id = artikli_brands.id
    INNER JOIN artikli_cats ON artikli_info.category_id = artikli_cats.id
    ORDER BY artikli_info.id desc;
    `,
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

router.get("/brands", (req, res) => {
  conn.query(`SELECT * FROM artikli_brands`, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/categories", (req, res) => {
  conn.query(`SELECT * FROM artikli_cats`, (err, rows, fields) => {
    if (!err) {
      res.status(200).json(rows);
    } else {
      console.log(err);
    }
  });
});

router.get("/items/:brandId", (req, res) => {
  conn.query(
    `SELECT * FROM artikli_info WHERE brand_id=${req.params.brandId}`,
    (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
