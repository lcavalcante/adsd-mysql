var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  //host: "localhost",
  host: "10.90.90.84",
  user: 'lucas',
  password: "password",
  database: "sitepoint"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
	console.log(err);
    return;
  }
  console.log('Connection established');
});


con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});

con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});
con.query('SELECT * FROM employees',function(err,rows){
	  if(err) throw err;

	    console.log('Data received from Db:\n');
		  console.log(rows);
});

con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
