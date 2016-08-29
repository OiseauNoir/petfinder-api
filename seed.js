require('dotenv').config();

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION);

var Dog = require('./models/dog');

var dogsArr = [
  {
    breed: 'Pembroke Welsh Corgie',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'image'
  },
  // {
  //   breed: 'Pembroke Welsh Corgie',
  //   kidFriendly: true,
  //   maintenance: 'Low',
  //   noiseLevel: String,
  //   fullGrownSize: String,
  //   personality: String,
  //   imageName: String
  // },
  // {
  //   breed: 'Pembroke Welsh Corgie',
  //   kidFriendly: true,
  //   maintenance: 'Low',
  //   noiseLevel: String,
  //   fullGrownSize: String,
  //   personality: String,
  //   imageName: String
  // },
  // {
  //   breed: 'Pembroke Welsh Corgie',
  //   kidFriendly: true,
  //   maintenance: 'Low',
  //   noiseLevel: String,
  //   fullGrownSize: String,
  //   personality: String,
  //   imageName: String
  // },
  // {
  //   breed: 'Pembroke Welsh Corgie',
  //   kidFriendly: true,
  //   maintenance: 'Low',
  //   noiseLevel: String,
  //   fullGrownSize: String,
  //   personality: String,
  //   imageName: String
  // },


].forEach(function (dogObject) {
  var dog = new Dog(dogObject)
  dog.save(function (err) {

  })
})
