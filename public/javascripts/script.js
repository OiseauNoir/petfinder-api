// $(document).ready(function() {
//   loadDogs();
//
//   $('#green-box-dog').on('click', function (e) {
//     e.preventDefault();
//     // console.log('hello');
//     loadDogs();
//   })
//   loadDog()
//
// });
//
// //load all available dogs for adoption
// function loadDogs() {
//   $.ajax({
//       url:'http://localhost:3000/api/dogs',
//       method: 'GET'
//     })
//     .done(function(dogList) {
//       // console.log(data);
//       for (var i = 0; i <dogList.length; i++) {
//         loadDog(dogList[i])
//       }
//     })
// }
//
// //LOAD  DOG inside this ul
// function loadDog(dog) {
//   console.log(dog);
//   var li = $('<li></li>')
//   li.text(dog.breed)
//   $('.dogs').prepend(li)
// }
