var http = require('http');
var express = require('express');
var app = express();


app.set('view engine','jade');
app.set('views', './views');

app.use(express.static('./public'));

app.get('/ople', function(req, res){
  res.send('<h1>aeindex</h1>');
});

app.get('/jason', function(req, res){
  res.json({message: 'welcome'});
});



app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function(req, res){
  res.render('index');
});

app.get('/country/:country/state/:state', function(req, res) {
 res.send(req.params.country + ', ' + req.params.state);
});


// routes
/*
var routes = require('./routes')
app.get('/', routes.index)
app.get('/student', routes.student)
*/


http.createServer(app).listen(8080, function(){
	console.log('express is there!');
});

/*
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Worlda");
  //response.end();
}

http.createServer(onRequest).listen(8888);


var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send("This would be some HTML");
});

app.get('/oi', function(request, response) {
	response.send("Ola");
});

app.post('/oi', function(request, response) {
	response.send("Ola");
});
*/