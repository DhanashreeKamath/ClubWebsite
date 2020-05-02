const rp = require('request-promise-native');

let goodApplicant1 = {
	url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
    	  {
    		"firstName":"Aksh",
    		"lastName":"Rai",
    		"email":"rai@gmail.com",
    		"password":"1234Aza12",
    		"chooseActivity":"OnlineClass",
    		"chooseALevel":2,
    		"questionsAndComments":"hello have some question"
    	  }
    	]
};
let goodApplicant2 = {
	url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
		{
		"firstName":"Shaan",
	    "lastName":"Jane",
	    "email":"jane@gmail.com",
	    "password":"678ADF",
	    "chooseActivity":"Instrument Class",
	    "chooseALevel":1,
	    "questionsAndComments":"hello have some question"
	    }

    ]

};
let badApplicant1 = {
	url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
		{
		"firstName":"Shaan",
	    "lastName":"Jane",
	    "email":"janegmail.com",
	    "password":"678ADF",
	    "chooseActivity":"Instrument Class",
	    "chooseALevel":1,
	    "questionsAndComments":"hello have some question"
	    }

     ]

};
let badApplicant2 = {
	url: 'http://127.0.0.11:1711/applicants',
    method: 'POST', // What does this do?
    resolveWithFullResponse: false,
    json:true,
    body: [
		{
		"firstName":"Shaan",
	    "lastName":"Jane",
	    "email":"jane@gmail.com",
	    "password":"678ADF",
	    "chooseActivity":"Instrument Class",
	    "chooseALevel":1.5,
	    "questionsAndComments":"hello have some question"
    }
   ]

};

async function tests()
{
    //Test 1 check 1)call activities 2) call post good login (correct email, password), 3) logout.........
    try {
    	 console.log("Applicant test1: Good #1");
    	 let res1 = await rp(goodApplicant1);
         console.log("Application Result:",res1);
         console.log("Applicant test2: Good #2");
         let res2 = await rp(goodApplicant2);
         console.log("Application Result:",res2);
         console.log("Applicant test1: Bad #1");
         let res3 = await rp(badApplicant1);
         
     }
      catch (e) {
        console.log("Application Result :",e.message);
    }
    try {
    	console.log("Applicant test1: Bad #2");
    	let res4 = await rp(badApplicant2);
    }
    catch (e) {
    	 console.log("Application Result :",e.message);
    }
}
tests();