const router = require('express').Router();
const { Blog_data } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newBlog = await Blog_data.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const oneBlog = await Blog_data.destroy({
        where: {
          id: req.params.id
          },
      });
  
      if (!oneBlog) {
        res.status(404).json({ message: 'No blog found with this id!' });
        return;
      }
  
      res.status(200).json(`blog with id of ${req.params.id} deleted`);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// /* <a href="/{{blog_id}}"> */</a>

module.exports = router;