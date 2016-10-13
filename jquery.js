$(document).ready( function() {

  function addTop() {
    $('#table').append('<tr class="block"></tr>')
  };
  for (var i=0; i<10 ; i++) {
    addTop()
  };

  function addBottom() {
    $('tr').append('<td class="block"></td>');
  };
  for (var j=0; j<10 ; j++) {
    addBottom()
  };

  var safeColors = ['00','33','66','99','cc','ff'];
  var rand = function() {
    return Math.floor(Math.random()*6);
  };
  var randomColor = function() {
    var r = safeColors[rand()];
    var g = safeColors[rand()];
    var b = safeColors[rand()];
    return "#"+r+g+b;
  };

  $('td').on('mouseover', function() {
    $(this).css('background-color',randomColor())
  });

  $("#reset").click( function() {
    var value = prompt("Please enter grid size", "20");
  });

});
