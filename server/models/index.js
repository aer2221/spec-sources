const mongoose = require('mongoose');
const config = require('./config.js');
uri=config.URI;

//makes actual connection to database using info in config.js
mongoose
.connect(uri, { useNewUrlParser:true, useUnifiedTopology:true})
.catch( e => {console.error('Failed to connect to mongoDB:', e.message);
})

const db = mongoose.connection;

module.exports=db;