const DataStore = require('nedb-promises');
const db = new DataStore({filename: __dirname + '/activityDB', autoload: true});

const activities = require('./activities.json');

db.insert(activities).then(newDocs => {
	// console.log(newDocs)
	console.log("Added " + newDocs.length + " activities");
})
.catch(function (err){
		console.log(` Some type of err : ${err}`);
})

// We let NeDB create _id property for us.

// db.insert(activities, function(err, newDocs) {
//     if(err) {
//         console.log("Something went wrong when writing");
//         console.log(err);
//     } else {
//     	console.log(newDocs);
//         console.log("Added " + newDocs.length + " activities");
//     }
// });

// const Datastore = require('nedb-promises')
// let db = Datastore.create('./activityDB')