const rp = require('request-promise-native');
let cookiejar = rp.jar();

let getActivities = {
    url: 'http://127.0.0.1:1711/activities',
    method: 'GET', // What does this do?
    resolveWithFullResponse: false,
    jar:cookiejar
};

let postGoodEmailPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
    	email: "tirrivees1820@outlook.com",
    	password: "49OqspUq"
    },
    jar: cookiejar
};

let postGoodEmailIncorrectPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "chihuahua1899@gmail.com",
        password: "Ckp12311"
    },
    jar: cookiejar
};

let postBadEmailIncorrectPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "user@email.com",
        password: "Ckp12311"
    },
    jar: cookiejar
};
let logoutCall = {
    url: 'http://127.0.0.1:1711/logout',
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
        let res = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
    }
    catch (e) {
        console.log(e);
    }

    //Call to check good email and password
    try {
        //...........good login........
        let res = await rp(postGoodEmailPass);
        console.log("Good login test Results :",JSON.stringify(res));
        console.log(`After Good Login ,Cookies: ${cookiejar.getCookieString(postGoodEmailPass.url)}`);
    }
    catch (e) {
        console.log(e);
    }
    //Logout call
    try {
        //...........log out........
        let res = await rp(logoutCall);
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
        let res = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
    }
    catch (e) {
        console.log(e);
    }
    //Call to check bad email and password
    try {
        //...........bad login with bad email........
        let res = await rp(postBadEmailIncorrectPass);
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
        let res = await rp(getActivities);
        console.log(`Called Activities ,Cookies: ${cookiejar.getCookieString(getActivities.url)}`);
    }
    catch (e) {
        console.log(e);
    }
     try {
        let res = await rp(postGoodEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad password login error :",e.message);
        console.log(`After Login Test 3 ,Cookies: ${cookiejar.getCookieString(postGoodEmailIncorrectPass.url)}`);
    }
}

//...........Second Question Test.........
/*async function tests()
{
    //Call to check good email and password
    try {
        let res = await rp(postGoodEmailPass);
        console.log("Good login test Results :",JSON.stringify(res));
    }
    catch (e) {
        console.log(e);
    }
    //Call to check good email and password
     try {
        let res = await rp(postBadEmailIncorrectPass);
        //console.log("Bad login error :",JSON.stringify(res));
    }
    catch (e) {
         console.log("Bad email login error :",e.message);
    }

    //Call to check good email and incorrect password
     try {
        let res = await rp(postGoodEmailIncorrectPass);
    }
    catch (e) {
        console.log("Bad password login error :",e.message);
       // console.log(e);
    }

}*/


tests();
