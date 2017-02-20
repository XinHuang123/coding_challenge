"use strict";
//this server is used for coding challenge 
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/coding_challenge'));//host the static content in public directory

app.listen(3000);