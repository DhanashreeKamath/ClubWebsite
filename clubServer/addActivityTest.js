const rp = require('request-promise-native');

let getCall = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false
};


let postCall = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'POST', // What does this do?
    json: true,
    body: {
    	name: "Jam sesion",
    	dates: "August 15th"
	}
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
	