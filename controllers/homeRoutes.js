const router = require('express').Router();
const { Blog_data, User, Comments } = require('../models');
const auth = require('../utils/auth');

// Not getting the user after I added the href tag?
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog_data.findAll({
      include: [{ model: User }],
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
      include: [{ model: User }, { model: Comments, include: [User] }],
    });

    const oneBlogData = blogData.get({ plain: true });

    res.render('oneBlog', oneBlogData)
  } catch (error) {
    res.status(500).json(error)
  }
})

// This isn't working and I don't know why
router.get('/profile', auth, async (req, res) => {
  console.log("Made it");
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Blog_data }],
    });


    const newUserData = userData.get({ plain: true })
    console.log(newUserData);

    res.render('userProfile', {
      ...newUserData,
      logged_in: true
    });
  } catch (error) {
    res.status(500).json(error)
  }

})

module.exports = router;
