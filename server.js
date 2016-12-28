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
app.get('/ui/dbse.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'dbse.html'));
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
    
  if(req.method==="POST" && req.url === "/ui/article-one.html"){
var reqBody = "";
req.on('data',function(data){
reqBody += data;
    if(reqBody.length > 1e7)
{
res.write(413,"memory full",{"Content-Type":"text/html"});
res.write("<html><head><title>413</title></head><body>you exceeded memory limit</body></html>");
res.end();
}
});
}
    var nme = req.body.name;
     var emil = req.body.email;
 console.log(req.body.name);
       console.log(req.body.email);
    pool.query('INSERT INTO bag(username,email) VALUES(nme,emil)');
   
  res.end();
   
 });
 
 /* code for database of worst teacher */
 
 app.post('/ui/dbse.html', function(req, res){
    
  if(req.method==="POST" && req.url === "/ui/dbse.html"){
var reqBody = "";
req.on('data',function(data){
reqBody += data;
    if(reqBody.length > 1e7)
{
res.write(413,"memory full",{"Content-Type":"text/html"});
res.write("<html><head><title>413</title></head><body>you exceeded memory limit</body></html>");
res.end();
}
});
}
    var stunme = req.body.stuname;
     var stucty = req.body.stucity;
      var stucollage = req.body.stucollage;
       var namewt = req.body.namewt;
       var ctywt = req.body.citywt;
        var collagewt = req.body.collagewt;
 console.log(req.body.stuname);
 console.log(req.body.stucity);
     console.log(req.body.namewt);
     console.log(req.body.stucollage);
     console.log(req.body.collagewt);
     console.log(req.body.citywt);
    pool.query('INSERT INTO STU_TEACHER(id,studentname,studentcity,studentcolge_name,wrstteacher_name,wrstteacher_city,wrstteacher_colge_name) VALUES(DEFAULT,$1,$2,$3,$4,$5,$6)',[req.body.stuname, req.body.stucity, req.body.stucollage, req.body.namewt ,req.body.citywt, req.body.collagewt]);
    
    req.on('end',function(stunme,stucollage,stucity,namewt){
        res.write(200,{"Content-Type":"text/html"});
        res.write("<html>"+"<head>"+"<body>"+"hi"+stunme+"from"+stucollage+" "+stucity+"<br/>"+"your worst teacher name is"+namewt);
    });
   
  res.end();
   
 });
 

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
