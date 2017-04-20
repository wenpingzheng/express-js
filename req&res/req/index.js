var express = require('express');
var app = express();


// req.query
// 访问http://localhost:1234/?time=10:1&date=10/1&id=123456
app.get('/',function(request,response,next){
	// {"time":"10:1","date":"10/1","id":"123456"}
	console.log(JSON.stringify(request.query));
	// 123456
	console.log(request.query.id);
});


// req.body

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
// json
// urlencoded
app.post('/test',function(request,response,next){
	console.log(request.body);
})



// req.cookie

var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/test',function(request,response,next){
	console.log(request.cookies);
})



app.listen(1234,'localhost');
