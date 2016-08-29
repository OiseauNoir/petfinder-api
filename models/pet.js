const mongoose = require('mongoose');

var petSchema = {
  breed: String,
  kidFriendly: Boolean,
  maintenance: String,
  noiseLevel: String,
  fullGrownSize: String,
  personality: String,
  imageName: String
}

const Pet = mongoose.model('Pet', petSchema);


module.exports = Pet;

// {type:Boolean, default: false}
