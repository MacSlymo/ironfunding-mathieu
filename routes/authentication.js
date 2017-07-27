const express = require('express');
const router = express.Router();
const passport = require('passport');
// const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;


/* GET home page. */

router.get('/login', ensureLoggedOut(), (req, res) => {
    res.render('authentication/login');
});

router.get('/signup', ensureLoggedOut(), (req, res) => {
  res.render('authentication/signup');
});

router.post('/login', ensureLoggedOut(), passport.authenticate('local-login', {
  successRedirect : '/',
  failureRedirect : '/login'
}));

router.post('/signup', ensureLoggedOut(), passport.authenticate('local-signup', {
  successRedirect : '/',
  failureRedirect : '/signup'
}));

router.get('/logout', ensureLoggedIn(), (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
