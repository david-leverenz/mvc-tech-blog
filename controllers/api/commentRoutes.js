const router = require('express').Router();
const { Comments } = require('../../models');

router.post('/', async (req, res) => {

    try {
      const commentData = await Comments.create(req.body); //blog id and user id from the req.session.user_id


    //   const newBlog = await Blog_data.create({
    //     ...req.body,
    //     user_id: req.session.user_id,

      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comments.destroy({
        where: {
          id: req.params.id
          },
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(`id ${req.params.id} deleted`);
    } catch (err) {
      res.status(500).json(err);
    }
  });




//hidden form that has the blog_id as the value of the inputs and gets passed to the back end.

module.exports = router;