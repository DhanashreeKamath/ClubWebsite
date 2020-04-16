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
  ... .... 
  ... ... 
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



## Question 4

### (a)


### (b)





### (d)


## Question 5

### (a)



### (b)




