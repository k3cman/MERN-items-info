const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const conn = require('../../config/connection');

router.get('/',(req,res)=>{
    conn.query(`SELECT * FROM enmon._nl_items ORDER BY id desc`,(err,rows,fields)=> {
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

router.get('/cat/:category',(req,res)=> {
    const categories = req.params.category.split(',').join("','")
    console.log(categories);
    conn.query(`SELECT * FROM enmon._nl_items WHERE Kategorija in ('${categories}') ORDER BY id desc`, (err,rows,fields) => {
        if(!err){
            res.status(200).json(rows);
        }else{
            console.log(err)
        }
    })
})

router.get('/brand/:brand',(req,res) => {
    const brands = req.params.brand.split(',').join("','")
    conn.query(`SELECT * FROM enmon._nl_items WHERE Brand in ('${brands}') ORDER BY id desc`, (err,rows,fields) => {
        if(!err){
            res.status(200).json(rows)
        }else{
            console.log(err)
        }
    })
})

router.get('/search/:keyword',(req,res) => {
    conn.query(`SELECT * FROM enmon._nl_items WHERE Naziv LIKE '%${req.params.keyword}%' OR Brand LIKE '%${req.params.keyword}%'`, (err,rows,fields) => {
        if(!err){
            res.status(200).json(rows)
        }else{
            console.log(err)
        }
    })
})

module.exports = router;