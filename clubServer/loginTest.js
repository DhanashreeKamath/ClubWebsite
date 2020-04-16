const rp = require('request-promise-native');


let postGoodEmailPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
    	email: "tirrivees1820@outlook.com",
    	password: "49OqspUq"
	}
};

let postGoodEmailIncorrectPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "chihuahua1899@gmail.com",
        password: "Ckp12311"
    }
};

let postBadEmailIncorrectPass = {
    url: 'http://127.0.0.1:1711/login',
    method: 'POST', // What does this do?
    json: true,
    body: {
        email: "user@email.com",
        password: "Ckp12311"
    }
};

async function tests()
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
        console.log("reached here");
         console.log("Bad email login error :",e.message);
    }

    //Call to check good email and incorrect password
     try {
        let res = await rp(postGoodEmailIncorrectPass);
    }
    catch (e) {
        console.log("reached here");
        console.log("Bad email login error :",e.message);
       // console.log(e);
    }

}

tests();
