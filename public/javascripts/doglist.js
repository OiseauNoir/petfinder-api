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
        if (dogList.length === 0) {
          alert ('Sorry, no dogs in our database match your criteria.  Please try again with different inputs!')
        } else {
          loadDog()
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

  //FOR NAME OF THE ANIMAL
  var name = $('<h1 />')
  name.append('Name')


  //For the description
  var about = $('<div />')
  about.addClass('about')
  about.append('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

  var kidFriendlyText = dog.kidFriendly ? 'Kid Friendly' : 'NOT KID FRIENDLY'
  //creates wrapping divs
  var div = $('<div />')
  div.addClass('features')

  //LOADS THE KEY VALUES OF THE DOGS
  div.append(dogFeature('Breed: ' +dog.breed, 'breed'))
  div.append(dogFeature(kidFriendlyText, 'kidFriendly'))
  div.append(dogFeature('Maintenance: ' + dog.maintenance, 'maintenance'))
  div.append(dogFeature('Noise Level: ' + dog.noiseLevel, 'noiseLevel'))
  div.append(dogFeature('Size: ' + dog.fullGrownSize, 'fullGrownSize'))
  div.append(dogFeature('Personality: ' + dog.personality, 'personality'))

  //READ MORE
  var more = $('<a><h3>Read More</h3></a>')
  more.addClass('readMore')

  //LOADS LI ITEMS INTO THE DIVS
  li.append(name)
  li.append(about)
  li.append(div)
  li.append(more)

  //GETS LOADS INTO UL CLASS DOGS
  $('.dogs').prepend(li)
}

function dogFeature(text, className) {
  var div = $('<div />')
  div.text(text)
  div.addClass('feature')
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
  // console.log(window.location.href.split('?'));
}
