$(document).ready(function() {
   loadCats();
});

function loadCats() {

  $.ajax({
    url: 'http://api.petfinder.com/breed.list?key=389725918c3d5d347613f1b332d2b633&animal=cat&format=json',
    method: 'GET',
    dataType: "jsonp",
    jsonpCallback: "cats"
  })
}

function cats(data) {
  // console.log(data);
  var breeds = data.petfinder.breeds.breed;
  // console.log(breeds);

  breeds.forEach(function (breed) {
    // console.log(breed);
    loadCat(breed);
  })



function loadCat(breed) {
  // console.log(breed);
  var li = $('<li />')
  li.addClass('catBreed')

  //FOR NAME OF THE ANIMAL
  var name = $('<h1 />')
  name.append('Name')

  //heart
   var heart = $('<a><h2>&hearts;</h2></a>')
   // console.log(heart);
   heart.addClass('heart')

  //READ MORE
  var more = $('<a><h3>Read More</h3></a>')
  more.addClass('readMore')

  var div = $('<div />')
  div.addClass('breedName')

  div.append('Breed: ' + breed.$t)

  li.append(heart)
  li.append(name)
  li.append(div)
  li.append(more)

  $('.cats').append(li)
}
}
