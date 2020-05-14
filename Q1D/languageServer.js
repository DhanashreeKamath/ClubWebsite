/*

path : "http://127.0.0.1:80/languages"
methos: "GET"
sucess code: 200 Ok
error code: 400 bad request

path : "http://127.0.0.1:80/languages"
methos: "POST"
sucess code: 200 Ok
error code: 400 bad request
*/

const express = require('express');
const app = express();
const languages = require('./sampleData.json');
var Ajv = require('ajv');
var schema = require('./dataSchema.json');

app.get('/languages', function (req, res) {
    res.json(languages);
});

app.post('/languages', express.json(),function (req, res) {
    let data = req.body;
    console.log(req.body);
    const ajv = new Ajv();
    var valid = ajv.validate(schema, data);
    console.log(valid);
    if(!valid)
    {
    	res.status(400).json({"error":true, "message":"Invalid data"});
    }
    else
    {
    	languages.push(data);
    	console.log(`path /languages received: ${JSON.stringify(req.body)}`);
    	console.log("language count"+languages.length);
    	res.json({"message":"received your language"});
    }
});

host = '127.0.0.1';
port = '4051';
app.listen(port, host, function () {
	console.log(`Example app listening on IPv4: ${host}:${port}`);
});