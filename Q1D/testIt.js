const rp = require('request-promise-native');

let getLanguages = {
    url: 'http://127.0.0.1:4051/languages',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
};

let validAdd = {
    url: 'http://127.0.0.1:4051/languages',
    method: 'POST', // What does this do?
    json: true,
    body: [ {
    	"language": "JavaScript",
    	 "rating": 9,
         "comments": "Its fun!"
     }
 ]  
};

let invalidAdd = {
    url: 'http://127.0.0.1:4051/languages',
    method: 'POST', // What does this do?
    json: true,
    body: [ {
    	"language": "C",
    	 "rating": 9,
         "comments": "Sounds scary but its not."
     }
 ]  
};

async function test()
{
	let res;
	try{
		console.log("Language Poll Test 1: Get All");
      	res  = await rp(getLanguages);
      	console.log("Language poll result: "+res);
      	console.log("Language Poll Test 2: Good Add");
      	res = await rp(validAdd);
      	console.log("Language poll result:"+JSON.stringify(res));
      	console.log("Language Poll Test 3: Bad Add")
      	res = await rp(invalidAdd);
    }
    catch(err) {
		console.log("Language poll result: "+err)
		console.log("Language Poll Test 4: Get All");
		res  = await rp(getLanguages);
      	console.log("Language poll result: "+res);
	}
}

test();