const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')});

//takes info from .env (username,password) and uses it
//ensures that we don't display username and password etc publicly on github
//just keep the info in .env locally
const dbUser = process.env.DBUSER;
const dbName = process.env.DBNAME;
const dbPassword = process.env.DBPASSWORD;
const discardAfterXDays=14;
//makes a call to database with given username and password
const URI = `mongodb+srv://${dbUser}:${dbPassword}@spec-sources.i7bskgg.mongodb.net/${dbName}?retryWrites=true&w=majority`;

module.exports = {
    URI:URI,
    discardAfterXDays:discardAfterXDays
};