$(function() {

  flashMessage('Ready to go!');
  var lightSwitch = $('.switch').first();
  lightSwitch.on('click', function() {
    // window.alert('The switch was clicked!')
    if (lightSwitch.hasClass('on')) {
      lightSwitch.removeClass('off');
      lightSwitch.addClass('off');
    } else if (lightSwitch.hasClass('off')) {
      lightSwitch.removeClass('off');
      lightSwitch.addClass('on');
    }

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
