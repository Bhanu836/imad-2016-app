var express = require('express');
var morgan = require('morgan');
var path = require('path');
var qs = require("querystring");
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


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new pool(config);

app.get('/article-db', function(req, res){
    
    // postgredatabase query all below codes
     pool.query('SELECT * FROM user',function(err,result){
        if(err){
            res.status(500).send(err.toString());
         }
         else{
             res.send(JSON.stringify(result));
             
         }
        
    });
});




app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two.html', function (req, res) {
  res.sendFile(path.join(__dirname,  'article-two.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
  app.use(bodyParser.json());


app.post('/ui/article-one.html', function(req, res){
    
      console.log(req.body.user.name)
       console.log(req.body.user.email)
  
   
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
