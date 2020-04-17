const rp = require('request-promise-native');
let cookiejar = rp.jar();

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

let getNumberOfUsers = {
	url: 'http://127.0.0.11:1711/users',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar: cookiejar,
    json:true
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

async function tests()
{
	 try {
	 	console.log("Get Users Test 1: Admin Login")
        let res1 = await rp(loginAsAdmin);
        console.log(`Admin Login,Cookie: ${cookiejar.getCookieString(loginAsAdmin.url)}`);
        let res2 = await rp(getNumberOfUsers);
        console.log(`Number Of Users: ${res2.length}`);
        let res3 = await rp(logoutCall);
        console.log(`After logout,Cookie: ${cookiejar.getCookieString(logoutCall.url)}`);
    } catch (e) {
        console.log(`Error: ${e}\n`);
    }
    try {
	 	console.log("Get Users Test 2: Member Login")
        let res1 = await rp(loginAsMember);
        console.log(`Member Login,Cookie: ${cookiejar.getCookieString(loginAsMember.url)}`);
        let res2 = await rp(getNumberOfUsers);
        console.log(`Number Of Users: ${res2.length}`);
        
    } catch (e) {
        console.log(`Error: ${e}\n`);
        let res3 = await rp(logoutCall);
        console.log(`After logout,Cookie: ${cookiejar.getCookieString(logoutCall.url)}`);
    }
     try {
	 	console.log("Get Users Test 3: Guest")
        let res2 = await rp(getNumberOfUsers);
        
    } catch (e) {
        console.log(`Error: ${e}\n`);
        console.log(`Guest user ,Cookie: ${cookiejar.getCookieString(getNumberOfUsers.url)}`);
        let res3 = await rp(logoutCall);
        console.log(`After logout,Cookie: ${cookiejar.getCookieString(logoutCall.url)}`);
    }
}
tests();