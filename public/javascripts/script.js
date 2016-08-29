$(document).ready(function() {
  getPets();

  $('#all-btn').on('click', function (e) {
    e.preventDefault();
    getPets();
  })

});

function getPets() {
  var api = 'http://api.petfinder.com/breed.list?key=389725918c3d5d347613f1b332d2b633';
  $.ajax({
    url: api
  }).done(function (data) {
    console.log(data);
    // $('#petsList').text(data.value.name)
  })
}
