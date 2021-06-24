
let mongoose = require("mongoose");
const colors = require('colors');
const dotenv =  require('dotenv').config();
/**
 * Database URI
 */
const URI = `mongodb+srv://basil:bazybones@cluster0.0y9kn.mongodb.net/test?retryWrites=true&w=majority`;


// The Database class reponsible for establishing 
//  connecting with the database
  
class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose
            .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log("Connection Established with Atlas Database".green.bold))
            .catch((err) => console.log("DATABASE ERROR -> ".red + err.message.red.bold));
    }
}

module.exports = new Database();
