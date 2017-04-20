var express = require('express');
// 引入模板引擎
// var hbs = require('express-handlebars');
var session = require('express-session');

var app = express();

// 告诉app引入的hbs是一个模板引擎
// app.engine('hbs',hbs());
// app.set('view engine','hbs');

app.use(session({secret:'maizidu'}));


app.get('/', function(request,response,next){
	console.log(request.session);
	/*
		Session {
		  cookie: 
		    { path: '/',
		     _expires: null,
		     originalMaxAge: null,
		     httpOnly: true 
		    },
		    userId: 'favicon.ico' 
		}
	*/
	var id = request.session.userId;
	// user id is 222222
	response.send('user id is '+ id);
});


app.get('/list/:id', function(request,response,next){
	var id = request.params.id;
	request.session.userId = id;
	console.log(request.session);
	response.send('hello world\n');
});

app.listen(1234,'localhost');


// http://localhost:1234/list/1233
// http://localhost:1234/ 输出1233
