// These routes allow you to create and delete a comment.  They are not accessible through the front end, yet.  They work in Insomnia.
const router = require('express').Router();
const { Comments } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {

    try {
      const commentData = await Comments.create(req.body);

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
  
      res.status(200).json(`comment with id of ${req.params.id} deleted`);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;