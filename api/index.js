'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;

mongoose.connect(process.env.DataBase,{useNewUrlParser: true},(error, response) => {
    if(error){
        throw error;
    }else{
        app.listen(port, ()=>{
            console.log("local server is running");
        })
    }
});

