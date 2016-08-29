const mongoose = require('mongoose');

var petsSchema = {
  breed: String,
  kid-friendly: Boolean,
  maintenance: String,
  noise-level: String,
  fullgrownsize: String,
  personality: String
}

const Pets = mongoose.model('Pets', petsSchema);


module.exports = Pets;

// {type:Boolean, default: false}
