const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const _ = require("lodash");

const conn = require("../../config/connection");

//Register User

router.post("/register", (req, res) => {
  conn.query(`SELECT * FROM articles_usrs`, (err, result, fields) => {
    const table = result;
    const obj = {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name
    };
    const isRegistered = _.find(table, { email: obj.email });
    if (isRegistered === null || isRegistered === undefined) {
      res.status(200).json({ error: "User already registered" });
    } else {
      conn.query(
        `INSERT INTO article_usrs (name,email,password) VALUES('${obj.name}','${
          obj.email
        }','${obj.password}')`,
        (err, result, fields) => {
          if (!err) {
            res.status(200).json({ registration: "Success" });
          } else {
            res.json(err);
          }
        }
      );
    }
  });
});

module.exports = router;
