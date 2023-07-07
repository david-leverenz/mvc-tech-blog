// These are the basic get routes to get all blogs and then get one blog by id with its related poster and all comments.
const router = require('express').Router();
const { Blog_data, User, Comments } = require('../models');
const auth = require('../utils/auth');

// Not getting the user after I added the href tag?


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
    const userData = await Blog_data.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    
    const blogData = userData.map((blog) => blog.get({ plain: true}));
    console.log(newUserData);

    res.render('userProfile', {
      //optionally add a 
      //layout: 'profile'
      blogData
    });
  } catch (error) {
    res.status(500).json(error)
  }

})

module.exports = router;
