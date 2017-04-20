var express = require('express');
// 引入模板引擎
var hbs = require('express-handlebars');
var app = express();

// 告诉app引入的hbs是一个模板引擎
app.engine('hbs',hbs());
app.set('view engine','hbs');



app.get('/test', function(request,response,next){
	response.locals = {
		name:'maizi'
	};
	next();
},function(request,response,next){
	response.set('Content-type','text/html');
	response.render('render'); // 在模板里面就可以使用{{name}}
})


app.get('/send',function(request,response,next){
	response.send(200,'Found')
})

app.get('/json',function(request,response,next){
	response.status(200).send({
		name: 'maizi',
		domin:'maizi.edu',
		username:'changeran',
		password:'xxxx'
	})
})

app.get('/redirect',function(request,response,next){
	//response.redirect('/json');
	response.redirect('https://www.google.com');
})
app.listen(1234,'localhost');
