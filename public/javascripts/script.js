$(document).ready(function() {
  getDogs();

  $('#all-btn').on('click', function (e) {
    e.preventDefault();
    getDogs();
  })

});

function getDogs() {
  var api = '';
  $.ajax({
    url: api
  }).done(function (data) {
    console.log(data);
    // $('#petsList').text(data.value.name)
  })
}
