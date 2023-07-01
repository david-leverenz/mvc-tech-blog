// Utility file to authenticate the user
module.exports = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/');
    }
    else{
       next();
    }
}