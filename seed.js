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
    imageName: './public/img/dog_pics/corgi.jpeg'
  },
  {
    breed: 'Bulldog',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: './public/img/dog_pics/bulldog.jpeg'
  },
  {
    breed: 'Daschund',
    kidFriendly: true,
    maintenance: 'Low',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: './public/img/dog_pics/daschund.jpeg'
  },
  {
    breed: 'Shih Tzu',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: './public/img/dog_pics/shih_tzu.jpeg'
  },
  {
    breed: 'Havanese',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: './public/img/dog_pics/havanese.jpeg'
  },
  {
    breed: 'Mastiff',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Lone Wolf',
    imageName: './public/img/dog_pics/mastiff.jpeg'
  },
  {
    breed: 'King Charles Spaniel',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: './public/img/dog_pics/king_charles.jpeg'
  },
  {
    breed: 'Boston Terrier',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Entertainer',
    imageName: './public/img/dog_pics/_terriers.jpeg'
  },
  {
    breed: 'Pointer (German Shorthair)',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: './public/img/dog_pics/pointer_germanshorthair.jpeg'
  },
  {
    breed: 'Beagle',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: './public/img/dog_pics/beagles.jpeg'
  },
  {
    breed: 'Rottweiler',
    kidFriendly: true,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: './public/img/dog_pics/rott.jpeg'
  },
  {
    breed: 'Sheepdog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Small',
    personality: 'Athlete',
    imageName: './public/img/dog_pics/shetland_sheepdog.jpeg'
  },
  {
    breed: 'Poodle',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Intellectual',
    imageName: './public/img/dog_pics/poodle.jpeg'
  },
  {
    breed: 'Boxer',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Medium',
    personality: 'Defender',
    imageName: './public/img/dog_pics/boxers.jpeg'
  },
  {
    breed: 'Retriever',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: './public/img/dog_pics/retriever_golden.jpeg'
  },
  {
    breed: 'French Bulldog',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: './public/img/dog_pics/french_bulldog.jpeg'
  },
  {
    breed: 'Australian Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Intellectual',
    imageName: './public/img/dog_pics/australian_shepherd.jpeg'
  },
  {
    breed: 'Siberian Husky',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Medium',
    personality: 'Lone Wolf',
    imageName: './public/img/dog_pics/siberian_husky.jpeg'
  },
  {
    breed: 'Labrador',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Athlete',
    imageName: './public/img/dog_pics/retriever_lab.jpeg'
  },
  {
    breed: 'Great Dane',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Cuddler',
    imageName: './public/img/dog_pics/great_dane.jpeg'
  },
  {
    breed: 'German Shepherd',
    kidFriendly: true,
    maintenance: 'High',
    noiseLevel: 'High',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: './public/img/dog_pics/german_shepherd.jpeg'
  },
  {
    breed: 'Doberman Pinscher',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Low',
    fullGrownSize: 'Large',
    personality: 'Defender',
    imageName: './public/img/dog_pics/doberman.jpeg'
  },
  {
    breed: 'Miniature Schnauzer',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Lone Wolf',
    imageName: './public/img/dog_pics/schnauzer.jpeg'
  },
  {
    breed: 'Pomeranian',
    kidFriendly: false,
    maintenance: 'Medium',
    noiseLevel: 'High',
    fullGrownSize: 'Small',
    personality: 'Intellectual',
    imageName: './public/img/dog_pics/pomeranian.jpeg'
  },
  {
    breed: 'Yorkshire Terrier',
    kidFriendly: false,
    maintenance: 'High',
    noiseLevel: 'Medium',
    fullGrownSize: 'Small',
    personality: 'Cuddler',
    imageName: './public/img/dog_pics/boston_terriers.jpeg'
  },
].forEach(function (dogObject) {
  var dog = new Dog(dogObject)
  dog.save(function (err) {
    // if(err) {
    //   console.log(err);
    // } else {
    //   res.redirect('/');
    // }
  });
});
