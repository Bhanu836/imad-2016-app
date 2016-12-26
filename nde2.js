var http = require("http");
var qs = require("querystring");
function getHome(req,res){
res.writeHead(200,{"Content-Type": "text/html"});
res.write("<html><head><title>home</title></head><body>want to calculat <a href='/calc'> click here</a></body></html>");
res.end();
}

function get404(req,res){
res.writeHead(404,"resource not found",{"Content-Type": "text/html"});
res.write("<html><head><title>404</title></head><body>res not found</body></html>");
res.end();
}

function get405(req,res){
res.writeHead(405,"error",{"Content-Type": "text/html"});
res.write("<html><head><title>405</title></head><body>error </body></html>");
res.end();
}
function gettmlform(req,res,data){
res.writeHead(200,{"Content-Type": "text/html"});
if(data && data.textfirstnumber && data.textsecondnumber){var sum = parseInt(data.textfirstnumber)+parseInt(data.textsecondnumber);}

res.write("<html>" +"<body>"+"<form method='post'>"+"<table>"+"<tr>"+"<td>"+"firstnumber"+"</td>"+"<td>"+"<input  type='text' id='textfirstnumber'name='textfirstnumber' value=' '/>"+"</td>"+"</tr>"+"<tr>"+"<td>"+"secondnumber"+"</td>"+"<td>"+"<input  type='text' id='textsecondnumber' name='textsecondnumber' value=' '/>"+"</td>"+"</tr>"+''+"<tr>"+"<td>"+"<input type='submit' value='calculate'/>"+"</td>"+"</tr>"+''+"<tr>"+"<td>"+"</td>" + sum +"</tr>"+"</table>"
+"</form>"+"</body>"+"</html>");
res.end();
}

function getcalcform(req,res,formdata){
res.writeHead(200,{"Content-Type": "text/html"});
gettmlform(req,res,formdata);

}
var httpserver = http.createServer(function(req,res){

switch(req.method){
case "GET":
if (req.url ==='/'){
getHome(req,res);
}
else if(req.url === "/calc"){

getcalcform(req,res);
}
else{
get404(req,res);
}
break;
case "POST":
if(req.url === "/calc"){
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
req.on('end',function(data){
var formdata = qs.parse(reqBody);
getcalcform(req,res,formdata);
});
}
else{
get404(req,res);
}
break;
default:
get405(req,res);
break;
}});
httpserver.listen(8080);