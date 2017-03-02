var express = require('express');
var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
	  host     : 'localhost',
	    user     : 'me',
		  password : 'secret',
		    database : 'my_db'
});

//connection.connect();

//connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//	  if (error) throw error;
//	    console.log('The solution is: ', results[0].solution);
//});


app.get('/', function (req, res) {
	  res.send('Hello World!');
});

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
});

