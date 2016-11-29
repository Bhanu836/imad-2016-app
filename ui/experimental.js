console.log('loaded');
console.log('Loaded!');
var pool =require('pg').Pool;

var config = {
    user: 'bhanu836',
    database: 'bhanu836',
    host: 'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    };
var pool = new pool(config);
app.get('/corct1.php', function (req, res) {
  res.sendFile(path.join(__dirname, 'corct1.php'));
});

app.get('/article-db', function(req, res){
    pool.query('SELECT * FROM user',function(err,result){
        if(err){
            res.status(500).send(err.toString());
         }
         else{
             res.send(JSON.stringify(result));
             
         }
        
    });
});
