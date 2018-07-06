const express = require('express');
const mysql = require('mysql');
const Web3 = require('web3');
const cors = require('cors');


var app = express();
var web3 = new Web3();
app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_name'
});


connection.connect(function (err) {
    if (!err) {
        console.log('Connected');
    } else {
        console.log('Not Connected');
    }
});


app.get('/createeth', function (req, res) {
    
    var account = web3.eth.accounts.create();
    connection.query('INSERT INTO table_name SET ?', [account], (error, results, fields) => {
    	if (error) {
    		throw error;
    	} else {
    		res.json(account);
    	}
    });
});


app.listen(3000, function(err, res) {
    if(err) throw err;
    console.log('Server is listening.');
});