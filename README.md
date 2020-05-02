# Homework #11 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a) 
``` AdminActivity.js
addActivity() {
	  let that = this;
	  let dateArr = (date.value).split(",")
      fetch('/activities', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name:eventname.value,
                dates: dateArr
            }),
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
            if (response.status == 200) {
        		return response.json();}
        }).then(function(data) {
                console.log(data);
                that.setState({activityList:data})
        });
	}
```
### (b)
Screenshot of "addActivity" page before adding activity 
![ScreenShot](images/ScreenShot76.png) 

Screenshot of "addActivity" page after adding activity 
![ScreenShot](images/ScreenShot77.png)


## Question 2 

### (a)
``` AdminActivity.js
deleteActivity(i) {
	
	  let that = this;
	  let id = this.state.activityList[i]._id;
	  console.log(id);

      fetch('/activities/'+id, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json"
            }
        }).then(function(response) {
            console.log('Request status code: ', response.statusText, response.status, response.type);
            if (response.status == 200) {
        		return response.json();
        	}
        }).then(function(data) {
                console.log(data);
                that.setState({activityList:data})
        });
    }

```
### (b)
Screenshot of "deleteActivity" page before deleting activity 
![ScreenShot](images/ScreenShot78.png) 

Screenshot of "deleteActivity" page after deleting activity 
![ScreenShot](images/ScreenShot79.png)

## Question 3

### (a) 
To sign up 
* First name 
* Last name
* email
* password
* choose Activity
* choose a level
* Questions and comments


### (b)
``` memberSchema.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "id": "http://grotto-networking.com/schemas/MusicClubMembers",
  "title": "List of Union city music club members",
  "descriptions": "A schema for Club Members list. By Dhanashree",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "firstName": {
        "type": "string",
        "maxLength": 12
      },
      "lastName": {
        "type": "string",
        "maxLength": 12
      },
      "email": {
        "type": "string",
        "format": "email",
        "minimum": 0
      },
      "password": {
        "type": "string",
        "pattern": "^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$",
        "minLength": 6,
        "maxLength": 10
      },
      "chooseActivity": {
        "type": "string"
      },
      "chooseALevel": {
        "type": "number",
        "multipleOf": 1.0
      },
      "questionsAndComments": {
        "type": "string",
        "maximum": 100
      }
    }
  },
}
```
### (b)
one of valid JSON data test
```GoodMemberTest1.json
[
  {
    "firstName":"Aksh",
    "lastName":"Rai",
    "email":"rai@gmail.com",
    "password":"1234Aza12",
    "chooseActivity":"OnlineClass",
    "chooseALevel":2,
    "questionsAndComments":"hello have some question"
  }
]
```
one of the invalid JSON data test 
```BadMemberTest1.json
[
    {
    "firstName":"Shaan",
    "lastName":"Jane",
    "email":"janegmail.com",
    "password":"678ADF",
    "chooseActivity":"Instrument Class",
    "chooseALevel":1,
    "questionsAndComments":"hello have some question"
    }

]
```
Screen shot of checking valid and invalid data json using AJV
![ScreenShot](images/ScreenShot80.png)

## Question 4

### (a)
```clubServer.js
app.post('/applicants', express.json(), function(req, res) {
  // console.log(req.body);
  let data = req.body;
  const ajv = new Ajv();
  var valid = ajv.validate(schema, data);
  console.log(valid);
  if (!valid) 
    res.status(400).json({"error": true, "message":"Invalid Json Data"});
 else
   res.json({"message":"Application Received"});
});
```
### (b)
```applicantTest.js
const rp = require('request-promise-native');

let goodApplicant1 = {
    url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
          {
            "firstName":"Aksh",
            "lastName":"Rai",
            "email":"rai@gmail.com",
            "password":"1234Aza12",
            "chooseActivity":"OnlineClass",
            "chooseALevel":2,
            "questionsAndComments":"hello have some question"
          }
        ]
};
let goodApplicant2 = {
    url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
        {
        "firstName":"Shaan",
        "lastName":"Jane",
        "email":"jane@gmail.com",
        "password":"678ADF",
        "chooseActivity":"Instrument Class",
        "chooseALevel":1,
        "questionsAndComments":"hello have some question"
        }

    ]

};
let badApplicant1 = {
    url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
        {
        "firstName":"Shaan",
        "lastName":"Jane",
        "email":"janegmail.com",
        "password":"678ADF",
        "chooseActivity":"Instrument Class",
        "chooseALevel":1,
        "questionsAndComments":"hello have some question"
        }

     ]

};
let badApplicant2 = {
    url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
        {
        "firstName":"Shaan",
        "lastName":"Jane",
        "email":"jane@gmail.com",
        "password":"678ADF",
        "chooseActivity":"Instrument Class",
        "chooseALevel":1.5,
        "questionsAndComments":"hello have some question"
    }
   ]

};

async function tests()
{
    //Test 1 check 1)call activities 2) call post good login (correct email, password), 3) logout.........
    try {
         console.log("Applicant test1: Good #1");
         let res1 = await rp(goodApplicant1);
         console.log("Application Result:",res1);
         console.log("Applicant test2: Good #2");
         let res2 = await rp(goodApplicant2);
         console.log("Application Result:",res2);
         console.log("Applicant test1: Bad #1");
         let res3 = await rp(badApplicant1);
         
     }
      catch (e) {
        console.log("Application Result :",e.message);
    }
    try {
        console.log("Applicant test1: Bad #2");
        let res4 = await rp(badApplicant2);
    }
    catch (e) {
         console.log("Application Result :",e.message);
    }
}
tests();
```
Applicant data testing 
![ScreenShot](images/ScreenShot81.png)

## Question 5

### (a)

### (b)



