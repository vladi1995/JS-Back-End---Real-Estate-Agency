const jwt = require('jsonwebtoken');
const {COOKIE_NAME} = require('../config/constants');
const {SECRET} = require('../config/env');

exports.auth = async (req, res, next) => {
    const token = req.cookies[COOKIE_NAME];

    if (token) {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if (err) {
                res.clearCookie(COOKIE_NAME);
                res.redirect('/auth/login');
            }

            req.user = token;
            res.locals.user = token;
            next();
        });
    } else {
        next();
    }
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/auth/login');
    }
    next();
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
        return res.redirect('/');
    }
    next();
}