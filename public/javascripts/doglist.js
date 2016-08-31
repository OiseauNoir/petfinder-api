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
  // console.log(dog);
  var li = $('<li></li>')
  li.addClass('dogListItem')
  var img = $("<img />").addClass('dogPics')
  img.attr('src', '/img/dog_pics/' + dog.imageName);
  li.append(img)
  li.append(dogFeature('Breed: ' +dog.breed, 'breed'))
  var kidFriendlyText = dog.kidFriendly ? 'Kid Friendly' : 'NOT KID FRIENDLY'

  li.append(dogFeature(kidFriendlyText, 'kidFriendly'))
  li.append(dogFeature('Maintenance: ' + dog.maintenance, 'maintenance'))
  li.append(dogFeature('Noise Level: ' + dog.noiseLevel, 'noiseLevel'))
  li.append(dogFeature('Size: ' + dog.fullGrownSize, 'fullGrownSize'))
  li.append(dogFeature('Personality: ' + dog.personality, 'personality'))

  $('.dogs').prepend(li)
}

function dogFeature(text, className) {
  var div = $('<div />')
  div.text(text)
  div.addClass('feature')
  div.addClass('round')
  div.addClass(className)
  return div
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
