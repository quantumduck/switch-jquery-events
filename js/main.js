$(function() {

  flashMessage('Ready to go!');
  var lightSwitch = $('.switch').first();
  lightSwitch.on('click', function() {
    window.alert('The switch was clicked!')
  });


});

function flashMessage(message) {
  var status = $('.status').first();
  var originalText = status.text();
  status.text(message);
  setTimeout(function() {
    status.text(originalText);
  }, 500);
}
