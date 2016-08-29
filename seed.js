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
    imageName: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ffb%2FWelchcorgipembroke.JPG&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FPembroke_Welsh_Corgi&docid=BBJ_9I_2GxfuBM&tbnid=ST_7QocYVrti3M%3A&w=2967&h=1978&noj=1&bih=699&biw=1368&ved=0ahUKEwjyqvrFtOfOAhUL3WMKHV-pAvcQMwg4KAAwAA&iact=mrc&uact=8'
  },
  {
    breed: 'Bulldog',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: String
  },
  {
    breed: 'Daschund',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: String
  },
  {
    breed: 'Shih Tzu',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: String
  },
  {
    breed: 'Havanese',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: String
  },
  {
    breed: 'Mastiff',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Lone Wolf',
    imageName: String
  },
  {
    breed: 'King Charles Spaniel',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: String
  },
  {
    breed: 'Boston Terrier',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: String
  },
  {
    breed: 'Pointer (German Shorthair)',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: String
  },
  {
    breed: 'Beagle',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: String
  },
  {
    breed: 'Rottweiler',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: String
  },
  {
    breed: 'Sheepdog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Athlete',
    imageName: String
  },
  {
    breed: 'Poodle',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Intellectual',
    imageName: String
  },
  {
    breed: 'Boxer',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Defender',
    imageName: String
  },
  {
    breed: 'Retreiver',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: String
  },
  {
    breed: 'French Bulldog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: String
  },
  {
    breed: 'Australian Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Intellectual',
    imageName: String
  },
  {
    breed: 'Siberian Husky',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: String
  },
  {
    breed: 'Retriever',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: String
  },
  {
    breed: 'Great Dane',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Cuddler',
    imageName: String
  },
  {
    breed: 'German Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: String
  },
  {
    breed: 'Doberman Pinscher',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: String
  },
  {
    breed: 'Miniature Schnauzer',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Lone Wolf',
    imageName: String
  },
  {
    breed: 'Pomeranian',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: String
  },
  {
    breed: 'Yorkshire Terrier',
    kidFriendly: false,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: String
  },

].forEach(function (dogObject) {
  var dog = new Dog(dogObject)
  dog.save(function (err) {

  })
})
