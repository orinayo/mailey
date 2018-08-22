const mongoose = require('mongoose')
const { Schema } = mongoose
const RecipientSchema = require('./Recipient')

const SurveySchema = new Schema({
  title: String,
  fromEmail: String,
  subject: String,
  body: String,
  recipients: [RecipientSchema],
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  total: {
    type: Number,
    default: 0
  },
  _user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
})

mongoose.model('surveys', SurveySchema)
