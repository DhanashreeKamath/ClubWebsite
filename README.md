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
one of valid json test
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

### (c)


### (c)

## Question 4

### (a)


### (b)
![ScreenShot](images/ScreenShot74.png)

## Question 5

### (a)

### (b)



