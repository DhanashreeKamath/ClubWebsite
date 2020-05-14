const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./siteUsers.json');

let nRounds = 11;
let hashedUsers = [];
let start = new Date();
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);
for (let user of users) {
	let passHash = bcrypt.hashSync(user.password, nRounds);
	let hashedUser = Object.assign({}, user, {passHash: passHash})
	delete hashedUser.password;
	hashedUsers.push(hashedUser);
}
let elapsed = new Date() - start;
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("secUsers.json", JSON.stringify(hashedUsers, null, 2));
