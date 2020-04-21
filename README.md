# Homework #8 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)
``` hashUsers.js
const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13;
let hashedUsers = [];
let start = new Date();// timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

//code here to process the passwords
users.map(user=> {

let salt = bcrypt.genSaltSync(nRounds);// New salt everytime!
let passHash = bcrypt.hashSync(user.password, salt);
let newDict = {"firstName":user.firstName,"lastName":user.lastName,"email":user.email,"passHash":passHash,"role":user.role};
hashedUsers.push(newDict);
});

let elapsed = new Date() - start;//timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));
```  
Few entries to of the clubUsersHash.json
``` Json
[
  {
    "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "passHash": "$2a$13$f/ihY43nzTMuSrEaGJhSuuI0wUhQDrenjvoBNN3WjlUtaoLlVn6oS",
    "role": "admin"
  },
  {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "passHash": "$2a$13$N5lekEZjJ0lFSHm5HsEgYudCFDDWmryj.zp7Ebrbsnxq17yPuhX3u",
    "role": "member"
  },
    
  


]
```

### (b)
![ScreenShot](images/ScreenShot65.png)

## Question 2 

### (a)
Addition of login interface to the server
``` javascript
app.post('/login', express.json(), function(req, res) {
 
    let email = req.body.email; 
    let password = req.body.password;

    //Find user in json by comparing email
    let user = users.find(function(user){
       return user.email === email;
    });
    
    if(!user){
       res.status(401).json ({error:true, message:"User/password error"});
       return;
    }

    //Match password using bcrypt
    let verified = bcrypt.compareSync(password, user.passHash)
     if(verified) {
       let newUserInfo = {"firstName":user.firstName,"lastName":user.lastName,"email":user.email,"role":user.role};
       console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
       res.json(newUserInfo);
     }
     else{
         res.status(401).json ({error:true, message:"User/password error"});
       return;
     } 

  });
```
### (b)
![ScreenShot](images/ScreenShot66.png)

## Question 3

### (a)   
``` javascript
//Server intialization of session
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
```

### (b)
![ScreenShot](images/ScreenShot67.png)

### (c)
Updated login code :
``` javascript
app.post('/login', express.json(), function(req, res) {
 
    let email = req.body.email; 
    let password = req.body.password;

    //Find user in json by comparing email
    let user = users.find(function(user){
       return user.email === email;
    });
    
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
```
### (d)



### (e)
Updated LoginTest code:
``` loginTest.js
const rp = require('request-promise-native');
let cookiejar = rp.jar();

let getActivities = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar:cookiejar
};

let postGoodEmailPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
    	email: "tirrivees1820@outlook.com",
    	password: "49OqspUq"
    },
    jar: cookiejar
};

let postGoodEmailIncorrectPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "chihuahua1899@gmail.com",
        password: "Ckp12311"
    },
    jar: cookiejar
};

let postBadEmailIncorrectPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "user@email.com",
        password: "Ckp12311"
    },
    jar: cookiejar
};
let logoutCall = {
    url: 'http://127.0.0.11:1711/logout',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar: cookiejar
};


async function tests()
{
    //Test 1 check 1)call activities 2) call post good login (correct email, password), 3) logout.........
    try {
        //...........call activities........
        console.log("Login Test 1: GoodLogin");
        let res1 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
        //Call to check good email and password
         //...........good login........
        let res2 = await rp(postGoodEmailPass);
        console.log("Good login test Results :",JSON.stringify(res2));
        console.log(`After Good Login ,Cookies: ${cookiejar.getCookieString(postGoodEmailPass.url)}`);
         //Logout call
        let res3 = await rp(logoutCall);
        //console.log("Good login test Results :",JSON.stringify(res));
        console.log(`After Logout ,Cookies: ${cookiejar.getCookieString(logoutCall.url)}`);
    }
    catch (e) {
        console.log(e);
    }

    //Test 2 check 1)call activities 2) call post bad login (incorrect email, password)....
    try {
        //...........call activities........
        console.log("Login Test 2: Bad Email");
        let res4 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
         //...........bad login with bad email........
        let res5 = await rp(postBadEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad email login error :",e.message);
        console.log(`After Login Test 2 ,Cookies: ${cookiejar.getCookieString(postBadEmailIncorrectPass.url)}`);
    }
    
     //Test 3 check 1) call post bad login (correct email, incorrectpassword)........
     //Call to check good email and incorrect password
     try {
        //...........call activities........
        console.log("Login Test 3: Bad Password");
        let res6 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
        let res7 = await rp(postGoodEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad password login error :",e.message);
        console.log(`After Login Test 3 ,Cookies: ${cookiejar.getCookieString(postGoodEmailIncorrectPass.url)}`);
    }
}

tests();

```

![ScreenShot](images/ScreenShot68.png)

## Question 4

### (a)
``` clubServer.js
// User this middleware to restrict paths only to admins
const checkAdminMiddleware = function (req, res, next) {
    if (req.session.user.role !== "admin") {
        res.status(401).json({error: "Not permitted"});
    } else {
        next();
    }
};


app.post('/activities',checkAdminMiddleware,express.json({ limit: "44b"}), function(req, res) {
  if(Array.isArray(req.body)) {
    req.body.map(x => activityJson.push(x));
  } else {
   activityJson.push(req.body);
 }
 console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
 res.json(activityJson);

});

```

### (b)
//Updated addActivity.js file  

``` addActivityTest.js
const rp = require('request-promise-native');
const verbose = false;
let cookiejar = rp.jar();

let getCall = {
  url: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar: cookiejar,
    json:true
};


let postCall = {
  url: 'http://127.0.0.11:1711/activities',
    method: 'POST', // What does this do?
    json: true,
    body: {
      name: "Jam sesion",
      dates: "August 15th"
    },
    jar: cookiejar
};

let postFailureCall = {
  url: 'http://127.0.0.11:1711/activities',
    method: 'POST', // What does this do?
    json: true,
    body: [{
      name: "Jam sesion",
      dates: "August 20th"
    }, {
      name: "Vocal Concert",
      dates: "December 15th"
    }, {
      name: "Desi Fusion",
      dates: "October 30th"
    }]
}

let loginAsAdmin = {
  url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
      email: "tirrivees1820@outlook.com",
      password: "49OqspUq"
    },
    jar: cookiejar
};
let loginAsMember = {
  url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
      email: "chihuahua1899@gmail.com",
      password: "'E`Gj3iJ"
    },
    jar: cookiejar
};


let logoutCall = {
    url: 'http://127.0.0.11:1711/logout',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar: cookiejar
};

//Test 1 : Admin login, add activity
rp(loginAsAdmin).then(res => {
  //Call to login with "admin" role
  console.log("Add Activity Test1: Admin Login");
  console.log(`Adimin Login, Cookies: ${cookiejar.getCookieString(loginAsAdmin.url)}`);
  return rp(getCall)
}).then(res => {
  //Call to get number of activities
  console.log(`Number of activities:  ${res.length}`);
  return rp(postCall)
}).then(res => {
  //Add activity and get the updated number of activities
  console.log(`After add number of activities:  ${res.length}`);
  return rp(logoutCall)
}).then(res=> {
  //Logout 
  console.log(`After Logout ,Cookies: ${cookiejar.getCookieString(logoutCall.url)}`);
  return rp(loginAsMember)
}).then(res=> {
   //Test 2 : Member login, Try to add activity
  //Login as "member"
  console.log("Add Activity Test2: Member Login");
  console.log(`Member login ,Cookies: ${cookiejar.getCookieString(loginAsMember.url)}`);
  return rp(getCall)
}).then(res => {
  //Call to get number of activities
  console.log(`Number of activities:  ${res.length}`);
  return rp(postCall)
}).catch(function(err){
  //Error occurs due to un authorized access
  console.log("Member activity error:"+err);
  console.log(`Member login ,Cookies: ${cookiejar.getCookieString(postCall.url)}`);
  return rp(getCall)
}).then(res => {
  //Call to get number of activities
  console.log(`Number of activities:  ${res.length}`);
  return rp(logoutCall)
}).then(res=> {
  //Logout 
  console.log(`After Logout ,Cookies: ${cookiejar.getCookieString(logoutCall.url)}`);
  return rp(getCall);
}).then(res => {
  //Test 3 : Guest user, Try to add activity
  //Call to get number of activities
  console.log("Add Activity Test3: Guest");
  console.log(`Number of activities:  ${res.length}`);
  return rp(postCall)
}).catch(function(err){
  //Error occurs due to un authorized access
  console.log("Bad password login error:"+err);
  console.log(`After add activity test 3 ,Cookies: ${cookiejar.getCookieString(postCall.url)}`);
  return rp(logoutCall)
}).then(res=> {
  //Logout 
  console.log(`After Logout ,Cookies: ${cookiejar.getCookieString(logoutCall.url)}`);
});
``` 
![ScreenShot](images/ScreenShot69.png)

## Question 5

### (a)
``` clubServer.js
app.get('/users',checkAdminMiddleware, function (req, res) {
    //res.send(`${JSON.stringify(activityJson)}`);
    let allUsers = JSON.parse(JSON.stringify(users));
    allUsers.map(user => {
    delete user.passHash});
    res.json(allUsers);
    //res.json(users)
  });
```
### (b)
![ScreenShot](images/ScreenShot70.png)



