$(document).ready(function() {
  loadDogs();
});

//load all available dogs for adoption
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

//LOAD  DOG inside this ul
function loadDog(dog) {
  console.log(dog);
  var li = $('<li></li>')
  var img = $("<img />")
  img.attr('src', '/img/dog_pics/' + dog.imageName);
  li.text(dog.breed)
  li.append(img)
  $('.dogs').prepend(li)
}
