var mysql=require('mysql');
//createConnection
//createPool(logical connection)

var conn=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"test"
});

conn.connect(function (test) {
	// body...
	if(err)		throw(err);
		console.log("connection created");
	})
/*var abc="create table students name varchar(255),address varchar(255)";
var abc="insert into students(name,address) values('RAM','DELHI') ";
var abc="select * from students";
conn.query(abc,function(err,result)){
	if(err)  	throw(err);
	console.log("table created");
	console.log("record added");
	console.log(result);
}
*/
 
/*
conn.connect(function(err){
	

})
*/