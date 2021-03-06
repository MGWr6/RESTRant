const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'https://placekitten.com/400/400' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Fightertown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)