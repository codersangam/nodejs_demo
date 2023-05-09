const http = require('http');
var mysql = require('mysql2');
const express = require('express');

var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'acforiginals',
    database: 'watwallet_web'
});

connection.connect();

connection.query("select * from users", function (error, result) {
    // if (error) throw error;
    // console.warn("The results are ==>", result);
    // http.createServer(function (req, res) {
    //     res.write(JSON.stringify(result))
    //     res.end();
    // }).listen(5001);

    app.get("/users", function (req, res) {
        res.send(JSON.stringify(result));
    }).listen(5001);
});



connection.end();