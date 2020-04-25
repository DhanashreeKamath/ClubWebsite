# Homework #8 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)
1.
path : http://127.0.0.11:1711/activities
method: GET
sucess code: by default 200 (OK)
failure code: 404 (not found)
role: guest, member, admin

2.
path : http://127.0.0.11:1711/activities
method: POST
sucess code: by default 200 (OK)
failure code: 413(Request entity too large)
role: Only admin can add the activities

3.
path :http://127.0.0.11:1711/activities/:id
method: DELETE
sucess code: 200(OK)
failure code: 400 (BAD request response)
role:Only admin can delete the activities

4.
path : http://127.0.0.11:1711/users
method: GET
sucess code: 200(OK)
failure code: 413
role: only admin can get the number of users

### (b)
Deleting activity permission should only be given to admin. This resrtiction was not implemneted before.
Adding checkAdmin middilewear
``` clubServer.js
app.delete('/activities/:i',checkAdminMiddleware, function(req, res) {

 let id = req.params.i
 console.log("Trying to delete activity "+ id)
 if (id <0 ||id >= activityJson.length) {
   console.log("Bad activity deletion index: "+ id)
   //res.status(400).send(errorResponse2);
   next();
 } else {
  activityJson.splice(id, 1)
  res.json(activityJson)
}

});
```
### (c)
path : http://127.0.0.11:1711/activities/:activity-id
method: POST
sucess code: 200(OK)
failure code: 400 (BAD REQUEST)
role: only admin can update the activity

### (d)
path : http://127.0.0.11:1711/users
method: POST
sucess code: 200(OK)
failure code: 400 (BAD REQUEST)
role: only admin can add the users

path : http://127.0.0.11:1711/users/:user-id
method: DELETE
sucess code: 200(OK)
failure code: 400 (BAD REQUEST)
role: only admin can delete the users

### (e)

## Question 2 

### (a)
```activityDB.js
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/activityDB', autoload: true});

const activities = require('./activities.json');
// We let NeDB create _id property for us.

db.insert(activities, function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
      console.log(newDocs);
        console.log("Added " + newDocs.length + " activities");
    }
});
```

### (b)




## Question 3

### (a)   


### (b)


### (c)

### (d)



### (e)

## Question 4

### (a)


### (b)

## Question 5

### (a)

### (b)



