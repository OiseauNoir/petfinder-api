const mongoose = require('mongoose');

var catSchema = {
  breed: String,
  kidFriendly: Boolean,
  maintenance: String,
  noiseLevel: String,
  fullGrownSize: String,
  personality: String,
  imageName: String
}

const Cat = mongoose.model('Cat', catSchema);


module.exports = Cat;

// {type:Boolean, default: false}
