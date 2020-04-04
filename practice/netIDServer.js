const express = require('express');
const app = express();

app.get('/netID', function (req, res) {
    
   let name = "Dhanashree Kamath Kasaragod";
   let netID = "hs4947";

    res.send(`Name: ${name}, 
        NetID :${netID}`);
});


host = '127.73.73.42';
port = '2112';
app.listen(port, host, function () {
console.log(`Example app listening on IPv4: ${host}:${port}`);
});