const rp = require('request-promise-native');
let cookiejar = rp.jar();

let getMemberData = {
    url: 'http://127.0.0.1:3738/member-data',
    method: 'GET',
    resolveWithFullResponse: false,
    json:true,
    jar:cookiejar
};

let getFoilerData = {
    url: 'http://127.0.0.1:3738/foiler-data',
    method: 'GET',
    resolveWithFullResponse: false,
    json:true,
    jar:cookiejar
};

let memberLogin = {
    url: 'http://127.0.0.1:3738/login',
    method: 'POST',
    json: true,
    body: {
    	email: "canamo1829@gmail.com",
    	password: "CS1nM212i"
    },
    jar: cookiejar
};

let foilerLogin = {
    url: 'http://127.0.0.1:3738/login',
    method: 'POST',
    json: true,
    body: {
    	email: "coquet1826@outlook.com",
    	password: "8E4pyd7"
    },
    jar: cookiejar
};

async function test()
{
	let res;
	try{
        console.log("Try getting member data w/o logging in")
		res = await rp(getMemberData);
		
	}
	catch(err)
	{
		console.log("Error:" + err);
	}
	try {
		console.log("Login as member, then get member only");
		res = await rp(memberLogin)
		console.log("login result"+ JSON.stringify(res));
		res = await rp(getMemberData);
		console.log("Get member only:" + res.length + " items");
		console.log("Try getting Foiler only as member");
		res = await rp(getFoilerData);
	} catch(err) {
		console.log("Error: " + err)
		console.log("Login as Foiler")
		res = await rp(foilerLogin)
		console.log("Login results: "+ JSON.stringify(res));
		res = await rp(getFoilerData);
		console.log("foiler only result: "+res.length+" items");
	}

}

test();