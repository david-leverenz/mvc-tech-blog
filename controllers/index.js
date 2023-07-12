// This file starts the route chain.  Viewroutes are to view pages.  Dashboard route is to view a single bloag and comments or to enter a comment.  Api routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./homeRoutes')
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/dashboard', homeRoute);
router.use('/api', apiRoutes);

module.exports = router;