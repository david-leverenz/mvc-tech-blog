// These are the basic routes to "view" the all blogs, sign up and login pages.
const router = require('express').Router();
const { Blog_data, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog_data.findAll({
      include: [{ model: User }],
    });
    
    const showBlogs = blogData.map(blog => blog.get({ plain: true }));
    
    res.render('allBlogs', { showBlogs, logged_in: req.session.logged_in })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/login', async (req, res) => {

    // If the user is already logged in, redirect the request to another route
    if (req.session?.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login', );
  });

router.get('/signup', async (req,res) => {

    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;