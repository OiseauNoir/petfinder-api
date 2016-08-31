$(document).ready(function() {
  loadDogs();
});

//load all available dogs for adoption
function loadDogs() {
  var filter = getUrlVars()
  $.ajax({
      url:'/api/dogs' + filter,
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
  li.append(dog.breed)
  li.append(dog.kidFriendly)
  li.append(dog.maintenance)
  li.append(dog.noiseLevel)
  li.append(dog.fullGrownSize)
  li.append(dog.personality)
  li.append(img)
  $('.dogs').prepend(li)
}

function getUrlVars() {
  urlArray = window.location.href.split('?')
  if (urlArray.length===1) {
      return ''
  } else {
    return '?'+ urlArray[1]
  }
  console.log(window.location.href.split('?'));
}
