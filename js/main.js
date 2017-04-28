$(function() {
  var status = $('.status').first();
  var originalText = status.text();
  flashMessage('Ready to go!');
  var lightSwitch = $('.switch').first();
  lightSwitch.on('click', function() {
    // window.alert('The switch was clicked!')
    //1: Change classes on lightSwitch
    if (lightSwitch.hasClass('on')) {
      lightSwitch.removeClass('on');
      lightSwitch.addClass('off');
    } else if (lightSwitch.hasClass('off')) {
      lightSwitch.removeClass('off');
      lightSwitch.addClass('on');
    }
    //2: Toggle body class:
    $('body').toggleClass('dark', 'light');
    //3: Change the message:
    if (status.text() === originalText) {
      status.text("Hey! Who turned off the lights?");
    } else {
      status.text(originalText);
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
