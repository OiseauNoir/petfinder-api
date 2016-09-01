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

        .done(function cats(data) {
          console.log(data);
          var breed = data.petfinder.breeds.breed;

          breed.forEach(function (breed) {
            // console.log(breed.$t);
            loadCat(breed.$t);
          })
        })
  }

function loadCat(breed) {
  // console.log(breed);
  var li = $('<li />')
  li.addClass('catListItem')
  li.append(breed)

  $('.cats').append(li)
}
