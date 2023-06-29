const router = require('express').Router();
const { User, Blog_data, Comments } = require('../../models');

//I want this to create a new post but couldn't pull the brain power to reason through it.
router.post('/', async (req, res) => {
    try {
      const newBlog = await Blog_data.create({
        ...req.body,
        user_id: req.session.user_id, // user id is coming from the user session, user_id from the UserRoutes
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });
// router.get('/:id', async (req, res) => {
//     // find one category by its `id` value
//     // be sure to include its associated Products
//     try {
//         const blogData = await Blog_data.findByPk(req.params.id, {
//             include: [{ model: User }],
//         });

//         if (!blogData) {
//             res.status(404).json({ message: 'No blog found with that id!' });
//             return;
//         }

//         //   const showBlogs = blogData.map(blog => blog.get({ plain: true }));

//         res.status(200).json(blogData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// /* <a href="/{{blog_id}}"> */</a>

module.exports = router;