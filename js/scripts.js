// coding is awesome!
$('.trail-container').on('click', function() {
  var trailPhoto = $(this).data('trail-photo')
  $(".right-half").html(`<img src='${trailPhoto}'/>`);
  var trailInfo = $(this).data('trail-info')
  $('.right-half').append(`${trailInfo}`);
})
