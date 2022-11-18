const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./-routes.js');
const dashboardRoutes = require('./-routes.js');

router.use('/', homeRoutes);
//router.use('/);
router.use('/api', apiRoutes);

module.exports = router;
