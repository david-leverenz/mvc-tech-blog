// This file starts the route chain
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoutes')
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/dashboard', homeRoute);

router.use('/api', apiRoutes);

module.exports = router;