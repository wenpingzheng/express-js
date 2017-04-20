var express = require('express');
// 引入模板引擎
var app = express();

// css 中间件引入
//var stylus = require('stylus');
//var less = require('less-middleware');
var sass = require('node-sass-middleware');


app.use(express.static(__dirname + '/public'));

// stylus 中间件的使用
// app.use(stylus.middleware(__dirname + '/public'));

// less 中间件的使用
// app.use(less(__dirname + '/public'));

// sass 中间件的使用
app.use(sass(__dirname + '/public'));

app.listen(1234,'localhost');
