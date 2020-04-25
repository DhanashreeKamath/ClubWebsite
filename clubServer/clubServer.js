const express = require('express');
const app = express();
const users = require('./clubUsersHash.json');
var session = require('express-session')
const bcrypt = require('bcryptjs');

let activityJson = require('./activities.json');

const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/activityDB', autoload: true});

let errorResponse = {"error": true, "message":"bad activity"}
let errorResponse2 = {"error": true, "message":"bad index"}

const cookieName = "hs4947Clubsid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
  secret: 'club website development',
  resave: false,
  saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
  }));
// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
  console.log(`session object: ${JSON.stringify(req.session)}`);
  console.log(`session id: ${req.session.id}`);
  if (!req.session.user) {
    req.session.user = {role: "guest"};
  }; 
  next();
};

app.use(setUpSessionMiddleware);

app.get('/activities', function (req, res) {

  db.find({}, function(err, docs) {
    if (err) {
      res.status(404).json({error: "Not found"});
    } else {
      console.log("We found " + docs.length + " documents");
      console.log(docs);
      res.json(docs);
    }
  });
});


// User this middleware to restrict paths only to admins
const checkAdminMiddleware = function (req, res, next) {
  if (req.session.user.role !== "admin") {
    res.status(401).json({error: "Not permitted"});
  } else {
    next();
  }
};


app.post('/activities',checkAdminMiddleware,express.json(), function(req, res) {
//Insert activity
  db.insert([req.body], function(err, newDocs) {
    if(err) {
      //console.log("Something went wrong when writing");
      console.log(err);
    } else {
      //console.log("Added " + newDocs.length + " docs");
      //find db
      db.find({}, function(err, docs) {
        if(err)
        {
           res.status(404).json({error: "Not found"});
        }
        else
        {//Send response
           res.json(docs)
        }
      });
    }
});
});

app.get('/users',checkAdminMiddleware, function (req, res) {
  let allUsers = JSON.parse(JSON.stringify(users));
  allUsers.map(user => {
    delete user.passHash});
  res.json(allUsers);
    //res.json(users)
  });

app.delete('/activities/:i', function(req, res) {

 let id = req.params.i
 console.log("Trying to delete activity "+ id)

//This is to delete the activity
 db.remove({_id:id}, {},
    function (err, numRemoved) {
      if (err) {
        res.status(404).json({error: "Not Found"});
      } else {
        console.log("removed " + numRemoved);
        db.find({}, function(err, docs) {
           res.json(docs)
      });
    }
});

});

app.post('/login', express.json(), function(req, res) {

  let email = req.body.email; 
  let password = req.body.password;

    //Find user in json by comparing email
    let user = users.find(function(user){
     return user.email === email;
   });

    console.log(user)
    
    if(!user){
     res.status(401).json ({error:true, message:"User/password error"});
     return;
   }

    //Match password using bcrypt
    let verified = bcrypt.compareSync(password, user.passHash)
    if(verified) {

     let oldInfo = req.session.user;
     req.session.regenerate(function (err) {
      if (err) {console.log(err);}
      let newUserInfo = Object.assign(oldInfo, user);
      delete newUserInfo.passHash;
      req.session.user = newUserInfo;
      res.json(newUserInfo);
    });
       // let newUserInfo = {"firstName":user.firstName,"lastName":user.lastName,"email":user.email,"role":user.role};
       // console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
       // res.json(newUserInfo);
     }
     else{
       res.status(401).json ({error:true, message:"User/password error"});
       return;
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

app.use(function deleteErrorHandling(err, req, res, next) {
  if(req.route.methods.delete == true){
    res.status(400).json(errorResponse2);
  } else {
    next(err)
  }

})

app.use(function activityErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    // set an error code and send JSON message
    console.log(err)
    res.status(413).send(errorResponse)
    console.log(JSON.stringify(err))
    return
  });

host = '127.0.0.11';
port = '1711';
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
