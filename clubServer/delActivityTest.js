const rp = require('request-promise-native');
let deleteId = [];

let getCall = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'GET',
    json:true, // What does this do?
    resolveWithFullResponse: false
};

rp(getCall).then(res => {
    res.map(b => deleteId.push(b._id));
    console.log(deleteId)
}).then(res=> {
let deleteCall = {
    url: 'http://127.0.0.11:1711/activities/'+deleteId[0],
    method: 'DELETE',
    json:true, // What does this do?
    resolveWithFullResponse: false,
    //json:true
    
};
let badDeleteCall = {
    url: 'http://127.0.0.11:1711/activities/'+deleteId[1],
    method: 'DELETE',
    json:true, // What does this do?
    resolveWithFullResponse: false,
    //json:true
};

let anotherDeleteCall = {
    url: 'http://127.0.0.11:1711/activities/0',
    method: 'DELETE',
    json:true, // What does this do?
    resolveWithFullResponse: false
};

rp(getCall).then(res => {
	console.log("Initial Get of activities");
	//let parsedJsonactivity = JSON.parse(res);
	console.log("Currently "+res.length+" activities");
    //console.log(deleteCall.url)
	return rp(deleteCall);
}).then(res => {
console.log("After first Good activity deletetion");
//let parsedJsonactivity = JSON.parse(res);
console.log("Currently "+res.length+" activities");
 return rp(badDeleteCall)
}).catch(function(err){
	console.log("After first bad activity Delete");
	console.log("Error occurred:"+err);
	return rp(anotherDeleteCall)
}).then(res =>{
	console.log("After Another Good activity Delete")
	//let parsedJsonactivity = JSON.parse(res);
	console.log("Currently "+res.length+" activities");
})
})