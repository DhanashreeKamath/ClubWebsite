# Homework #8 Solution
**Student Name**:  Dhanashree Kamath Kasaragod

**NetID**: hs4947

## Question 1
### (a)
* Post HTTP method is used in the request

* HTTP response status code indicate whether a specific HTTP request has been successfully completed. For example: 200 OK (Successful response)

* HTTP version used HTTP/1.1

### (b)
List the request headers and their values here (copy and paste)
```
POST /events/1/232bf20b67?a=25577677&v=1167.2a4546b&to=M1NbN0oCDxFYU0JaXAoZahdKFhUReFNCWlwKGVsPWQAKAFZRRFcdE1NbAkgTEkxbXFdQWAZZWBFcTQAXTVhTXUcNVVgXUQwPTHVfUVpdJVVNClcN&rst=10976&ref=https://bb.csueastbay.edu/ HTTP/1.1
Host: bam.nr-data.net
Connection: keep-alive
Content-Length: 99
Sec-Fetch-Dest: empty
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36
content-type: text/plain
Accept: */*
Origin: https://bb.csueastbay.edu
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: cors
Referer: https://bb.csueastbay.edu/
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9
Cookie: JSESSIONID=b1687da527d0c0db
```

### (c)
List the response headers and their values here (copy and paste)
```
Access-Control-Allow-Credentials: true
Access-Control-Allow-Origin: https://bb.csueastbay.edu
Content-Length: 24
Content-Type: image/gif
```

### (d)

What server is BlackBoard based on?

Are any cookies set? If so what are they.


### (e)
protocol : https, http
domain : developer.mozilla.org, www.google.com, 
port :8282
path : static/index.html, en-US/docs/Web/JavaScript/Guide/Grammar_and_Types, search
query : ?q=gaia+mission&rlz=1CYPO_enUS751
fragment : #Comments

### (f)

## Question 2 

### (a)
![ScreenShot](images/ScreenShot57.png)

### (b)
![ScreenShot](images/ScreenShot58.png)

### (c)
![ScreenShot](images/ScreenShot59.png)
``` combineServer.js
const express = require('express');
const app = express();

app.get('/date', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
    	let datetime = new Date();

    res.send(`Name: ${name}, 
        Date and Time :${datetime}`);
});

app.get('/netID', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
   let netID = "hs4947";

    res.send(`Name: ${name}, 
        NetID :${netID}`);
});

host = '127.73.73.11';
port = '1711';
app.listen(port, host, function () {
console.log(`Example app listening on IPv4: ${host}:${port}`);
});
```

## Question 3

### (a)   
```clubServer.js
const express = require('express');
const app = express();

app.get('/activities', function (req, res) {
    
    let activityJson = require('./activities.json');

    //res.send(`${JSON.stringify(activityJson)}`);
    res.json(activityJson);
});


host = '127.0.0.11';
port = '1711';
app.listen(port, host, function () {
console.log(`Example app listening on IPv4: ${host}:${port}`);
});

```
![ScreenShot](images/ScreenShot60.png)

### (b)
![ScreenShot](images/ScreenShot61.png)
```getActivityTest.js
const rp = require('request-promise-native');
let site = {
    uri: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false
};
rp(site).then(res => {
	let a = JSON.parse(res)
	let count = 1
	a.map(b => {
		console.log("Event "+count+" Name:"+b.name+"; Dates:"+b.dates);
		count++;
	})
})
```
## Question 4

### (a)
code of newly added interface 
```clubServer.js
app.post('/activities', express.json(), function(req, res) {
   activityJson.push(req.body)
   console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
   res.json(activityJson)

});
```
### (b)
![ScreenShot](images/ScreenShot62.png)

### (c)
updated function to handle errors
```clubServer.js 
app.use(function activityErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    // set an error code and send JSON message
    res.status(413).send(errorResponse)
    console.log(JSON.stringify(err));
    return;
  })

```

### (d)
![ScreenShot](images/ScreenShot63.png)

``` addActivityTest.js
rp(getCall).then(res => {
	console.log("Initial Get of activities");
	let parsedJsonactivity = JSON.parse(res)
	console.log("Currently "+parsedJsonactivity.length+" activities");
	// let count = 1
	// parsedJsonactivity.map(activity => {
	// 	console.log("activity "+count+" Name:"+activity.name+"; Dates:"+activity.dates);
	// 	count++;
	// })
	// console.log("-----------------------------")
	return rp(postCall)
}).then(res => {
console.log("After first Good activity Post")
console.log("Currently "+res.length+" activities");
// let count = 1;
//  res.map(activity => {
// 		console.log("activity "+count+" Name:"+activity.name+"; Dates:"+activity.dates);
// 		count++;
// 	})
//  console.log("------------------")
 return rp(postFailureCall)
}).catch(function(err){
	console.log("After first bad activity post");
	console.log("Error occurred:"+err);
	return rp(postCall)
}).then(res =>{
	console.log("After Another Good activity Post")
	console.log("Currently "+res.length+" activities");
})
```
## Question 5

### (a)

code after delete interface
``` codeServer.js
app.delete('/activities/:i', function(req, res) {
 
 let id = req.params.i;
 console.log("Trying to delete activity "+ id);
 if (id >= activityJson.length) {
   console.log("Bad activity deletion index: "+ id);
  res.status(400).send(errorResponse2);
 } else {
 activityJson.splice(id, 1);
 res.json(activityJson);
}

});

```
### (b)
![ScreenShot](images/ScreenShot64.png)


