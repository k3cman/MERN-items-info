const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conn = require('./config/connection');

//Routes
const ItemRoutes = require('./api/routes/ItemRoutes')

conn.connect(err => {
    if(!err) {console.log('DB connection succeded')}else{
        console.log('Db connection failed, Error:'+JSON.stringify(err , undefined, 2))
    }
})

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Authorization')

    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methoids', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})

app.use('/items/', ItemRoutes)

const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log('App is running on port ' + port );
})