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


app.use(express.static(__dirname + '/public'));
// 定义一个缓存变量
var comments = {};
function html_encode(str){
	var s = '';
	if(str.length === 0) return false;
	s = str.replace(/&/g,"&gt;");
	s = s.replace(/</g,"&lt;");
	s = s.replace(/>/g,"&gt;");
	s = s.replace(/\s/g,"&nbsp;");
	s = s.replace(/\'/g,"&#39;");
	s = s.replace(/\"/g,"&quot;");
	s = s.replace(/\n/g,"<br>");
	return s;
}
app.get('/comment',function(req,res,next){
	// 数据暂存下来
	console.log(req.query.comment);
	comments.v = html_encode(req.query.comment);
	res.end("ok");
});

app.get('/getComment',function(req,res,next){
	res.json({
		comment:comments.v
	})
});




// 如果没有指定 express 会默认到当前目录下views目录下找index文件名
app.get('/jade',function(request,response,next){
	//response.set('X-XSS-Protection',0);
	response.render('index.jade',{title:'wpzheng',xss:request.query.xss});
})

app.listen(1234,'localhost');
