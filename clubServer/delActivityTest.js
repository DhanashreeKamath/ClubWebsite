const rp = require('request-promise-native');

let getCall = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false
};

let deleteCall = {
    url: 'http://127.0.0.11:1711/activities/3',
    method: 'DELETE', // What does this do?
    resolveWithFullResponse: false
};
let badDeleteCall = {
    url: 'http://127.0.0.11:1711/activities/82',
    method: 'DELETE', // What does this do?
    resolveWithFullResponse: false,
    json:true
};

let anotherDeleteCall = {
    url: 'http://127.0.0.11:1711/activities/0',
    method: 'DELETE', // What does this do?
    resolveWithFullResponse: false
};

rp(getCall).then(res => {
	console.log("Initial Get of activities");
	let parsedJsonactivity = JSON.parse(res);
	console.log("Currently "+parsedJsonactivity.length+" activities");
	return rp(deleteCall);
}).then(res => {
console.log("After first Good activity deletetion");
let parsedJsonactivity = JSON.parse(res);
console.log("Currently "+parsedJsonactivity.length+" activities");
 return rp(badDeleteCall)
}).catch(function(err){
	console.log("After first bad activity Delete");
	console.log("Error occurred:"+err);
	return rp(anotherDeleteCall)
}).then(res =>{
	console.log("After Another Good activity Delete")
	let parsedJsonactivity = JSON.parse(res);
	console.log("Currently "+parsedJsonactivity.length+" activities");
})