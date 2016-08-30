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
    imageName: 'corgi.jpeg'
  },
  {
    breed: 'Bulldog',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'bulldog.jpeg'
  },
  {
    breed: 'Daschund',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'daschund.jpeg'
  },
  {
    breed: 'Shih Tzu',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'shih_tzu.jpeg'
  },
  {
    breed: 'Havanese',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'havanese.jpeg'
  },
  {
    breed: 'Mastiff',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Lone Wolf',
    imageName: 'mastiff.jpeg'
  },
  {
    breed: 'King Charles Spaniel',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'king_charles.jpeg'
  },
  {
    breed: 'Boston Terrier',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: 'boston_terriers.jpeg'
  },
  {
    breed: 'Pointer (German Shorthair)',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: 'pointer_germanshorthair.jpeg'
  },
  {
    breed: 'Beagle',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'beagles.jpeg'
  },
  {
    breed: 'Rottweiler',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'rott.jpeg'
  },
  {
    breed: 'Sheepdog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Athlete',
    imageName: 'shetland_sheepdog.jpeg'
  },
  {
    breed: 'Poodle',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Intellectual',
    imageName: 'poodle.jpeg'
  },
  {
    breed: 'Boxer',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Defender',
    imageName: 'boxers.jpeg'
  },
  {
    breed: 'Retriever',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: 'retriever_golden.jpeg'
  },
  {
    breed: 'French Bulldog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'french_bulldog.jpeg'
  },
  {
    breed: 'Australian Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Intellectual',
    imageName: 'australian_shepherd.jpeg'
  },
  {
    breed: 'Siberian Husky',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: 'siberian_husky.jpeg'
  },
  {
    breed: 'Labrador',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: 'retriever_lab.jpeg'
  },
  {
    breed: 'Great Dane',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Cuddler',
    imageName: 'great_dane.jpeg'
  },
  {
    breed: 'German Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'german_shepherd.jpeg'
  },
  {
    breed: 'Doberman Pinscher',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: 'doberman.jpeg'
  },
  {
    breed: 'Miniature Schnauzer',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Lone Wolf',
    imageName: 'schnauzer.jpeg'
  },
  {
    breed: 'Pomeranian',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: 'pomeranian.jpeg'
  },
  {
    breed: 'Yorkshire Terrier',
    kidFriendly: false,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: 'yorkshire_terrier.jpeg'
  },
  {
    breed: 'Mutt',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Entertainer',
    imageName: 'mutt.jpg'
  },
].forEach(function (dogObject) {
  var dog = new Dog(dogObject)
  dog.save(function (err) {
  });
});
