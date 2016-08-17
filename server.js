//
//import express from 'express'
//const app = express()
//const port = process.env.PORT || 3000
//import http from 'http'
//http.Server(app)
//
//app.get('/*', (req, res, next)=>{
//    res.send('this is the homepage')
//})
//
//http.listen(port, ()=>{
//    console.log('server is running on port ' + port)
//})

var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


app.get('/',function(req,res,next){
    res.sendFile(__dirname + '/index.html');
})

http.listen(port, function(){
    console.log('started server on port ' + port);
})
