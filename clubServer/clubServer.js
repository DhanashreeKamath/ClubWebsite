const express = require('express');
const app = express();

let activityJson = require('./activities.json');

let errorResponse = {"error": true, "message":"bad activity"}
let errorResponse2 = {"error": true, "message":"bad activity"}

app.get('/activities', function (req, res) {
    //res.send(`${JSON.stringify(activityJson)}`);
    res.json(activityJson);
  });

app.post('/activities', express.json({ limit: "44b"}), function(req, res) {
  if(Array.isArray(req.body)) {
    req.body.map(x => activityJson.push(x))
  } else {
   activityJson.push(req.body)
 }
 console.log(`path /addThing received: ${JSON.stringify(req.body)}`);
 res.json(activityJson)

});

app.delete('/activities/:i', function(req, res) {
 
 let id = req.params.i;
 console.log("Trying to delete activity "+ id);
 if (id >= activityJson.length) {
   console.log("Bad activity deletion index: "+ id);
  res.status(400).send(errorResponse2);
 } else {
 activityJson.splice(id, 1);
 res.json(activityJson);
}

});


app.use(function activityErrors(err, req, res, next) {
    // prepare and send error response here, i.e.,
    // set an error code and send JSON message
    res.status(413).send(errorResponse)
    console.log(JSON.stringify(err));
    return;
  })

host = '127.0.0.11';
port = '1711';
app.listen(port, host, function () {
  console.log(`Example app listening on IPv4: ${host}:${port}`);
});
