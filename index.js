const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const helmet = require('helmet')
const keys = require('./config/keys')
require('./models/User')
// Import Passport configuration
require('./services/passport')

// Set up mongoose connection
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log(error)
    }
  }
)

// Get the default connection
const db = mongoose.connection
// Listen to db events
db.on('connected', () => console.log(`Successfully opened a connection to ${keys.mongoURI}`))
db.on('disconnected', () => console.log(`Successfully disconnected from ${keys.mongoURI}`))
db.on('error', () => console.log(`An error occured while connecting to the ${keys.mongoURI}`))

const app = express()

// Setup cookie session
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(helmet())

app.use(passport.initialize())
app.use(passport.session())
// Immediately Invoke authRoutes function
require('./routes/authRoutes')(app)

app.listen(process.env.PORT || 5000)
