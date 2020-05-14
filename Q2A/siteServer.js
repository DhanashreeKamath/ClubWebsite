const express = require('express');
let app = express();
const session = require('express-session');
const bcrypt = require('bcryptjs');

// User and special data sets
const users = require('./secUsers.json');
const memberOnlyData = require('./specialData1.json');
const foilerOnlyData = require('./specialData2.json');

// CAN MODIFY
const cookieName = "hs4947"; // CAN MODIFY

// START OF CANNOT MODIFY
app.use(session({
	secret: 'website development CSUEB',
	resave: false,
	saveUninitialized: false,
	name: cookieName
}));

// This initializes session state
function setUpSessionMiddleware(req, res, next) {
	console.log(`\nsession object: ${JSON.stringify(req.session)}`);
	console.log(`session id: ${req.session.id}`);
	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};

app.use(setUpSessionMiddleware);

// Available to all visitors
app.get('/', function (req, res) {
    res.json({message: "Hi from our site!"});
});
// END OF CANNOT MODIFY

// START OF YOUR CODE HERE


/* 
    Write a JSON based interface to return memberOnlyData in
    JSON format only to: members.
    You must handle unauthorized requests properly.
*/
const checkMemberMiddleware = function (req, res, next) {
  if (req.session.user.role !== "member") {
    res.status(401).json({error: "Not permitted"});
  } else {
    next();
  }
};

app.get('/member-data', checkMemberMiddleware,function (req, res) {
    res.json(memberOnlyData);
 });


/* 
    Write a JSON based interface to return foilerOnlyData in
    JSON format only to: foilers
    You must handle unauthorized requests properly.
*/
const checkFoilerMiddleware = function (req, res, next) {
  if (req.session.user.role !== "foiler") {
    res.status(401).json({error: "Not permitted"});
  } else {
    next();
  }
};

app.get('/foiler-data', checkFoilerMiddleware,function (req, res) {
    res.json(foilerOnlyData);
 });


// END OF YOUR CODE 

// CANNOT MODIFY BELOW THIS POINT
app.post('/login', express.json(), function (req, res) {
//	console.log(req.body);
	let email = req.body.email;
	let password = req.body.password;
	// Find user
	let auser = users.find(function (user) {
		return user.email === email
	});
	if (!auser) {// Not found
		res.status(401).json({error: true, message: "User/Password error"});
		return;
	}
	let verified = bcrypt.compareSync(password, auser.passHash);
	if (verified) {
		// Upgrade in priveledge, should generate new session id
		// Save old session information if any, create a new session
		let oldInfo = req.session.user;
		req.session.regenerate(function (err) {
			if (err) {
				console.log(err);
			}
			let newUserInfo = Object.assign(oldInfo, auser);
			delete newUserInfo.passHash;
			req.session.user = newUserInfo;
			res.json(newUserInfo);
		});
	} else {
		res.status(401).json({error: true, message: "User/Password error"});
	}
});

app.get('/logout', function (req, res) {
	let options = req.session.cookie;
	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		res.clearCookie(cookieName, options); // the cookie name and options
		res.json({message: "Goodbye"});
	})
});

const host = '127.0.0.1';
const port = '3738';
app.listen(port, host, function () {
	console.log("Site JSON server listening on IPv4: " + host + ":" + port);
});

