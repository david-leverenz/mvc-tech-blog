const router = require('express').Router();
const sequelize = require('../config/connection');
const { Blog_data, User, Comments } = require('../models');
const auth = require('../utils/auth');

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

router.get('/dash', auth, async (req, res) => {
console.log("Inside dash route")
  Blog_data.findAll({
    where: {

      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'post_title',
      'post_contents',
      'createdAt',
    ],
    include: [
      {
        model: Comments,
        attributes: ['id', 'comment', 'blog_data_id', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['name']
        }
      },
      {
        model: User,
        attributes: ['name']
      }
    ]
  })
    .then(dbBlogData => {

      const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
      res.render('dashboard', { blogs, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;