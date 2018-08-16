const keys = require('../config/keys')
// Pass secret key to stripe
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  // POST request for handling user payment with Stripe
  app.post(
    '/api/stripe',
    requireLogin,
    async (req, res) => {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 survey credits',
        source: req.body.id
      })

      req.user.credits += 5
      const user = await req.user.save()
      res.send(user)
    }
  )
}
