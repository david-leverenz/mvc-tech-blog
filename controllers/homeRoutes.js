// get one blog by id with its related poster and all comments.
const router = require('express').Router();
const { Blog_data, User, Comments } = require('../models');
const auth = require('../utils/auth');

router.get('/post/:id', auth, async (req, res) => {
  try {
    const blogData = await Blog_data.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comments, include: [User] }],
    });

    if (blogData) {
      const oneBlogData = blogData.get({ plain: true });

      res.render('oneBlog', {oneBlogData, logged_in: req.session.logged_in})
    } else {
      res.status(404).end();
    }

  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/', auth, async (req, res) => {
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
        res.render('dashboard', { blogs, logged_in: req.session.logged_in });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
