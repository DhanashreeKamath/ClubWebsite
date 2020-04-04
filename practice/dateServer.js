const express = require('express');
const app = express();

app.get('/date', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
    	let datetime = new Date();

    res.send(`Name: ${name}, 
        Date and Time :${datetime}`);
});


host = '127.73.73.1';
port = '5150';
app.listen(port, host, function () {
console.log(`Example app listening on IPv4: ${host}:${port}`);
});