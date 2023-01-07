const express = require('express');
const router = express.Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');

router.use(homeController);
router.use('/auth', authController);
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;