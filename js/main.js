$(function() {
  var status = $('.status').first();
  var originalText = status.text();
  status.text('Ready to go!');

  setTimeout(function() {
    $('.status').first().text(originalText);
  }, 500);
});

function throwTheSwitch() {

}
