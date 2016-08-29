const mongoose = require('mongoose');

var dogSchema = {
  breed: String,
  kidFriendly: Boolean,
  maintenance: String,
  noiseLevel: String,
  fullGrownSize: String,
  personality: String,
  imageName: String
}

const Dog = mongoose.model('Dog', dogSchema);


module.exports = Dog;

// {type:Boolean, default: false}
