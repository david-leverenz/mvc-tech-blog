
// const router = require('express').Router();
// const { User, Blog_data, Comments } = require('../../models');

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

// module.exports = router;