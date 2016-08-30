// $(document).ready(function() {
//   $('#submit-btn').on('click',function () {
//
//   });
// });

$(document).ready(function() {
  $( "form" ).on( "submit", function( event ) {
    event.preventDefault();
 console.log( $( this ).serialize() );
  });// Stuff to do as soon as the DOM is ready
});


$('#a1') = kidFriendly: true
$('#a2') = kidFriendly: true
$('#a3') = kidFriendly: false

$('#b1') = maintenance: 'High'
$('#b2') = maintenance: 'Medium'
$('#b3') = maintenance: 'Low'

$('#c1') = noiseLevel: 'High'
$('#c2') = noiseLevel: 'Medium'
$('#c3') = noiseLevel: 'Low'

$('#d1') = fullGrownSize: 'Small'
$('#d2') = fullGrownSize: 'Medium'
$('#d3') = fullGrownSize: 'Large'

$('#e1') = personality: 'Athlete'
$('#e2') = personality: 'Intellectual'
$('#e3') = personality: 'Lone Wolf'
$('#e4') = personality: 'Defender'
$('#e5') = personality: 'Entertainer'
$('#e6') = personality: 'Cuddler'


//1. filter quiz entry to return abbreviated list

//2. get that list from the mongo db
