const router = require('express').Router();
const { Blog_data, User, Comments } = require('../models');
const auth = require('../utils/auth.js');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog_data.findAll({
            include: [{ model: User}],
        });
        console.log(blogData);
        const showBlogs = blogData.map(blog => blog.get({ plain: true }));

        res.render('allBlogs', { showBlogs })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog_data.findByPk(req.params.id, {
            include:[{model: User},{model: Comments, include: [User]}],
            });
   
        const oneBlogData = blogData.get({ plain: true });
        console.log(oneBlogData);
        res.render('oneBlog', oneBlogData)
    } catch (error) {
        res.status(500).json(error)
    }
})



// router.get('/profile', auth, async (req, res) => {
//     const userData = await User.findByPk(req.session.user_id, {
//         include: [{ model: Blog_data }]
//     });
//     // console.log(userData);
//     let newUserData = userData.get({ plain: true })

//     res.render('profile', newUserData)

// })

module.exports = router;
