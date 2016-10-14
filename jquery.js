$(document).ready( function() {
  var num2 = 1;
  var num1 = 1;

  function ResizeTop(num2) {
    function addTop() {
      $('#table').append('<tr class="block"></tr>')
    };
    for (var i=0; i<(num2*10) ; i++) {
      addTop()
    };
  };

  function ResizeBottom(num2) {
    function addBottom() {
      $('tr').append('<td class="block"></td>');
    };
    for (var j=0; j<(num2*10) ; j++) {
      addBottom()
    };
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
    $('.block').css('background-color', 'red');
    var num = 500/value;
    $('.block').css('height',num);
    $('.block').css('width',num);
    var num2 = value/10;
    ResizeTop(num2);
    ResizeBottom(num2);

  });

});
