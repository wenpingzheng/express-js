var express = require('express');
// 引入模板引擎
var hbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// 告诉app引入的hbs是一个模板引擎
app.engine('hbs',hbs());
app.set('view engine','hbs');
app.set('views','templates');

// 数据库读出来的数据
var userArr = ['changran','maizidu','wpzheng'];


app.use(session({secret:'maizidu'}));
app.use(bodyParser.urlencoded({extended:true}));



app.get('/', function(request,response,next){
	var username = request.session.username;
	if(username){
		response.send("hello" + username);
	}else{
		response.render('form');
	}
});


app.post('/', function(request,response){
		if(userArr.indexOf(request.body.username)>=0){
			request.session.username = request.body.username;
		}else{
			request.session.destroy();
		}
		response.redirect('/');
});

app.listen(1234,'localhost');

