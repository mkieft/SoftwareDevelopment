
/***********************
 
  Load Components!

  Express      - A Node.js Framework
  Body-Parser  - A tool to help use parse the data in a post request
  Pug          - A view engine for dynamically rendering HTML pages
  Pg-Promise   - A database tool to help use connect to our PostgreSQL database

***********************/

const express = require('express'); // Add the express framework has been added
let app = express();

const bodyParser = require('body-parser'); // Add the body-parser tool has been added
app.use(bodyParser.json());              // Add support for JSON encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Add support for URL encoded bodies

const pug = require('pug'); // Add the 'pug' view engine

//Create Database Connection
const pgp = require('pg-promise')();



/**********************
  
  Database Connection information

  host: This defines the ip address of the server hosting our database.  We'll be using localhost and run our database on our local machine (i.e. can't be access via the Internet)
  port: This defines what port we can expect to communicate to our database.  We'll use 5432 to talk with PostgreSQL
  database: This is the name of our specific database.  From our previous lab, we created the football_db database, which holds our football data tables
  user: This should be left as postgres, the default user account created when PostgreSQL was installed
  password: This the password for accessing the database.  You'll need to set a password USING THE PSQL TERMINAL THIS IS NOT A PASSWORD FOR POSTGRES USER ACCOUNT IN LINUX!

**********************/
// REMEMBER to chage the password

const dbConfig = {
	host: 'localhost',
	port: 5432,
	database: 'site_directory',
	user: 'postgres',
	password: 'admin1234'
};

let db = pgp(dbConfig);

// set the view engine to ejs
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/')); // This line is necessary for us to use relative paths and access our resources directory

app.get('/', (req,res)=>{
	return res.redirect('/home');
});
app.get('/home', function(req, res) {
	res.render('pages/home',{
		my_title:"Home Page"
	});
});



app.get('/login', function(req, res) {
	res.render('pages/login',{
		local_css:"login.css", 
		my_title:"Login Page"
	});
});

app.get('/signup', function(req, res) {
	res.render('pages/signup',{
		local_css:"signup.css", 
		my_title:"Signup Page"
	});
});

app.post('/signup', function(req,res){
	console.log('req.body');
	console.log(req.body);
	res.render('pages/login');
	

	db.query("INSERT INTO user_info(firstName,lastName,email,password) VALUES('"+req.body.firstName+"','"+req.body.lastName+"','"+req.body.email+"','"+req.body.password+"')", function(err,res){
		if(err) throw err;
	});

});






app.listen(3000, function(err){

	if(err) throw err;

	console.log('3000 is the magic port');
});

