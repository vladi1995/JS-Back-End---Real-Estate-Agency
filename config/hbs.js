const handlebars = require('express-handlebars');

exports.hbs = (app) => {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
    }));

    app.set('view engine', 'hbs');
}