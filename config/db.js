const mongoose = require('mongoose');
const { QUERY_STRING } = require('./env');

exports.initializeDatabase = () => {
    mongoose.connection.on('open', () => console.log('DB Connected!')); //Show DB Connected! in the console when the connection is ready
    return mongoose.connect(QUERY_STRING);
}