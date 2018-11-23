const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = require('../../config/connection');

router.get('/',(req,res)=>{
    conn.query(`SELECT * FROM enmon._nl_items`,(err,rows,fields)=> {
        if(!err){
            res.status(200).json(rows);
        }else{
            console.log(err)
        }
    })
})

router.get('/data',(req,res) => {
    conn.query(`SELECT DISTINCT Kategorija from enmon._nl_items`,(err,rows,fields) => {
        if(!err){
            const kategorije = rows.map(row => row.Kategorija)
            let obj = []
            conn.query(`SELECT DISTINCT Brand from enmon._nl_items`,(err,rows,fields) => {
                const brands = rows.map(row => row.Brand);
                obj = [[...kategorije], [...brands]]
                res.status(200).json(obj)
            })
        }else{
            console.log(err)
        }
    })
})

module.exports = router;