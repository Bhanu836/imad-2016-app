var express = require('express');
var morgan = require('morgan');
var path = require('path');


var pool =require('pg').Pool;

var config = {
    user: 'bhanu836',
    database: 'bhanu836',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    };
    var app = express();
app.use(morgan('combined'));
var pool = new pool(config);
    app.get('/user-db', function(req, res){
    pool.query('SELECT * FROM user',function(err,result){
        if(err){
            res.status(500).send(err.toString());
         }
         else{
             res.send(JSON.stringify(result));
             
         }
        
    });
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
