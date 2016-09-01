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
  console.log(breeds);

  breeds.forEach(function (breed) {
    // console.log(breed);
    loadCat(breed);
  })
}

function loadCat(breed) {
  // console.log(breed);
  var li = $('<li />')
  li.addClass('catListItem')
  li.append(breed.$t)

  $('.cats').append(li)
}
