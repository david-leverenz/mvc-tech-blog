const router = require('express').Router();
// These routes are under construction.  Eventually these will be the routes that serve the various elements on the pages.

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
router.get('/login', async (req, res) => {
    try {

        res.render('login');
    } catch (error) {
        res.status(500).json(error)
    };
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