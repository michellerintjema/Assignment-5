$('#submit-btn').click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  userInput = userInput.replace(/\s/g, '');
  userInput = userInput.toLowerCase();
  $('#city-type').val('')
  $('#city-type').attr('placeholder','Enter a city name...')
  if (userInput === 'sydney' || userInput === 'syd') {
  $('body').css('background-image','url(images/sydney.jpg)')
} else if (userInput === 'nyc' || userInput === 'newyork'|| userInput === 'newyorkcity' || userInput === 'ny') {
    $('body').css('background-image','url(images/nyc.jpg)')
  } else if (userInput === 'sf' || userInput === 'sanfrancisco' || userInput === 'bayarea') {
    $('body').css('background-image','url(images/sf.jpg)')
  } else if (userInput === 'la' || userInput === 'losangeles' || userInput === 'lax') {
    $('body').css('background-image','url(images/la.jpg)')
  } else if (userInput === 'austin' || userInput === 'atx') {
    $('body').css('background-image','url(images/austin.jpg)')
  } else $('#city-type').attr('placeholder','Please enter a valid city')
})
