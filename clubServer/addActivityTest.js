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



// function printActivities(jsonData)
// {
// 	console.log(`Currently ${jsonData.length} activities`);
// 	if(!verbose)
// 	{
// 		return;
// 	}
// 	let count = 1;
//     jsonData.map(activity => {
// 		console.log("activity "+count+" Name:"+activity.name+"; Dates:"+activity.dates);
// 		count++;
// 	})
// }

// rp(getCall).then(res => {
// 	console.log("Initial Get of activities");
// 	let parsedJsonactivity = JSON.parse(res)
// 	printActivities(parsedJsonactivity);
// 	return rp(postCall)
// }).then(res => {
// console.log("After first Good activity Post")
// printActivities(res);
//  return rp(postFailureCall)
// }).catch(function(err){
// 	console.log("After first bad activity post");
// 	console.log("Error occurred:"+err);
// 	return rp(postCall)
// }).then(res =>{
// 	console.log("After Another Good activity Post")
// 	printActivities(res);
// })
