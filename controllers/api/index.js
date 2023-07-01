// This file continues the routing chain and indicates three routing files.
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')
const blogRoutes = require('./blogRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blog', blogRoutes);

module.exports = router;