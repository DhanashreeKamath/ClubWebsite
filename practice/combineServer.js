const express = require('express');
const app = express();

app.get('/date', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
    	let datetime = new Date();

    res.send(`Name: ${name}, 
        Date and Time :${datetime}`);
});

app.get('/netID', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
   let netID = "hs4947";

    res.send(`Name: ${name}, 
        NetID :${netID}`);
});

host = '127.73.73.11';
port = '1711';
app.listen(port, host, function () {
console.log(`Example app listening on IPv4: ${host}:${port}`);
});