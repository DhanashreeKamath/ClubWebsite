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
