// This file starts the route chain
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoutes')
const viewRoutes = require('./viewRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoute);
router.use('/', viewRoutes);


module.exports = router;