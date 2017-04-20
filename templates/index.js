var express = require('express');
// 引入模板引擎
var hbs = require('express-handlebars');

var app = express();

// 告诉app引入的hbs是一个模板引擎（注册）
app.engine('hbs',hbs());
app.set('view engine','hbs');

// 指定模板文件目录
app.set("views",'template');

app.get('/test', function(request,response,next){
	response.render('render');
})

// 如果没有指定 express 会默认到当前目录下views目录下找index文件名
app.get('/jade',function(request,response,next){
	response.render('index.jade');
})

app.listen(1234,'localhost');
