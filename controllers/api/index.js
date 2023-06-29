const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes')
const blogRoutes = require('./blogRoutes')
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/blog', blogRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;