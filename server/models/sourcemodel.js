const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define database schema-- all the basic logical components of a database
//a lot like defining a class in Java/OOP
const sourceSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true}
})

//model to structure how data should look
const sources = mongoose.model('spec_sources',sourceSchema);

module.exports=sources;