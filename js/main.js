$(function() {
  var status = $('.status').first();
  var originalText = status.text();
  var lightSwitch = $('.button').
  status.text('Ready to go!');

  setTimeout(function() {
    $('.status').first().text(originalText);
  }, 500);
});

function throwTheSwitch() {

}
