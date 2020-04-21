const rp = require('request-promise-native');
let cookiejar = rp.jar();

let getActivities = {
    url: 'http://127.0.0.11:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar:cookiejar
};

let postGoodEmailPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
    	email: "tirrivees1820@outlook.com",
    	password: "49OqspUq"
    },
    jar: cookiejar
};

let postGoodEmailIncorrectPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "chihuahua1899@gmail.com",
        password: "Ckp12311"
    },
    jar: cookiejar
};

let postBadEmailIncorrectPass = {
    url: 'http://127.0.0.11:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "user@email.com",
        password: "Ckp12311"
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
    //Test 1 check 1)call activities 2) call post good login (correct email, password), 3) logout.........
    try {
        //...........call activities........
        console.log("Login Test 1: GoodLogin");
        let res1 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
        //Call to check good email and password
         //...........good login........
        let res2 = await rp(postGoodEmailPass);
        console.log("Good login test Results :",JSON.stringify(res2));
        console.log(`After Good Login ,Cookies: ${cookiejar.getCookieString(postGoodEmailPass.url)}`);
         //Logout call
        let res3 = await rp(logoutCall);
        //console.log("Good login test Results :",JSON.stringify(res));
        console.log(`After Logout ,Cookies: ${cookiejar.getCookieString(logoutCall.url)}`);
    }
    catch (e) {
        console.log(e);
    }

    //Test 2 check 1)call activities 2) call post bad login (incorrect email, password)....
    try {
        //...........call activities........
        console.log("Login Test 2: Bad Email");
        let res4 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
         //...........bad login with bad email........
        let res5 = await rp(postBadEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad email login error :",e.message);
        console.log(`After Login Test 2 ,Cookies: ${cookiejar.getCookieString(postBadEmailIncorrectPass.url)}`);
    }
    
     //Test 3 check 1) call post bad login (correct email, incorrectpassword)........
     //Call to check good email and incorrect password
     try {
        //...........call activities........
        console.log("Login Test 3: Bad Password");
        let res6 = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
        let res7 = await rp(postGoodEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad password login error :",e.message);
        console.log(`After Login Test 3 ,Cookies: ${cookiejar.getCookieString(postGoodEmailIncorrectPass.url)}`);
    }
}

tests();
