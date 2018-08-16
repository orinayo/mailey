const passport = require('passport')

module.exports = app => {
  // GET request for user authentication using GoogleOAuth
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )
  // GET request for handling callback of user authentication
  // using GoogleOAuth
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys')
    }
  )
  // GET request for user logging out
  app.get(
    '/api/logout',
    (req, res) => {
      // Use logout function provided by passport to destroy cookie
      req.logout()
      res.redirect('/')
    }
  )
  // GET request for retrieving user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })
}
