const router = require('express').Router();
const { User } = require('../../models'); 

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
// req.body will have name, email and password from User model
// then we are creating a session, two session keys, user_id and logged_in, the if  is getting saaved in the session and then you send the data back
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // if you want to pass the useremail, req.session.user_email = userData.email;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    // check email in database - class is User, calling the check password function
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
// now check the password - class is User, calling the check password function
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
// otherwise if everything is good you save a session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) { 
    req.session.destroy(() => {
      res.json({ message: 'Goodbye!' });
      
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
