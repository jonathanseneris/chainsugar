var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  googleId: { type: String, index: { unique: true } },
  name: String,
  email: String,
  memberSince: String,
  preferredEmail: {
    type: String,
    default: 'user@user.com'
  },
  phone: {
    type: String,
    default: '909-000-0000'
  },
  city: {
    type: String,
    default: 'San Francisco'
  },
  picture: {
    type: String,
    default: 'http://sener.is/hank.gif'
  },
  rating: {
    type: Number,
    default: 3
  },
  reviews: {
    type: Array,
    default: []
  },
  completedCount: {
    type: Array,
    default: 0
  },
  paidCount: {
    type: Array,
    default: 0
  }
});

module.exports = mongoose.model('User', UserSchema);
