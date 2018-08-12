// Require passport for authentication
const passport = require('passport')
// GoogleOAuth 2.0 strategy for passport
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

// Pass id of user model instance to create cookie
passport.serializeUser((user, done) => {
  done(null, user.id)
})
// Find user by id
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user)
    })
})
// Initialize GoogleStrategy, pass the client options
// and callback URL used after user authentication
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  // Pass tokens and profile object received from GoogleOAuth
  (accessToken, refreshToken, profile, done) => {
    // Check if user already exists
    User.findOne({
      googleId: profile.id
    })
      .then(existingUser => {
        if (existingUser) {
          done(null, existingUser)
        }
        // No user exists, make new record
        new User({
          googleId: profile.id
        })
          .save()
          .then(user => done(user))
      })
  })
)
