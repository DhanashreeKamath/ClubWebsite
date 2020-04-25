const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/activityDB', autoload: true});

const activities = require('./activities.json');
// We let NeDB create _id property for us.

db.insert(activities, function(err, newDocs) {
    if(err) {
        console.log("Something went wrong when writing");
        console.log(err);
    } else {
    	console.log(newDocs);
        console.log("Added " + newDocs.length + " activities");
    }
});