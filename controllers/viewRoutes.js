const router = require('express').Router();
// These routes are under construction.  Eventually these will be the routes that serve the various elements on the pages.

// I cannot get this working in Insomnia.  I have no idea why and it's not like I haven't been staring at this for an hour.
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/signup', async (req,res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).json(error);
    }
})

// router.get('/profile', async (req, res) => {
//     try {

//         res.render('profile');
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });



module.exports = router;

// const { User, Messages, Room} = require('../models');
// const auth = require('./utils/auth')

// router.get('/', async (req, res) => {
//     try {
//         const roomData = await Room.findAll({
//             include: [{
//                 model: User,
//                 through: Messages,
//             }]
//         });
//         const newRoomData = roomData.map(room => room.get ({ plain:true }));
//         console.log(newRoomData);
//         res.render('chat', {newRoomData});
//     } catch (error) {
//         res.status(500).json(error)
//     };
// });
// router.get('/',(req,res)=>{
//     res.redirect('/chat')
// })
// router.get('/chat', (req, res) => {
//     res.render('chat')
// })
// // com