$(document).ready(function() {
  // loadDogs();

  $('#dogs').on('click', function (e) {
    e.preventDefault();
    // console.log('hello');
    loadDogs();
  })
  loadDog()

});


function loadDogs() {
  $.ajax({
      url:'http://localhost:3000/api/dogs',
      method: 'GET'
    })
    .done(function(dogList) {
      // console.log(data);
      for (var i = 0; i <dogList.length; i++) {
        loadDog(dogList[i])
      }
    })
}

//LOAD  BANDS
function loadDog(dog) {
  var li = $('<li></li>')
  li.text(dog.breed)
  $('.dogs').prepend(li)
}
