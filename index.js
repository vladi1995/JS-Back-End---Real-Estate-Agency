const express = require('express');
const { hbs } = require('./config/hbs');
const { initializeDatabase } = require('./config/db');
const { PORT } = require('./config/env');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const {auth} = require('./middlewares/authMiddleware');
const {errorHandler} = require('./middlewares/errorHandlerMiddleware');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('static'));
app.use(cookieParser());
app.use(auth);
app.use(router);
app.use(errorHandler);

hbs(app); // Call the handlebars configure file with app as an argument

initializeDatabase()
    .then(app.listen(PORT, () => console.log('App is listening on port on ' + PORT)))
    .catch(err => console.log('DB Initialization error!' + err));

