$(document).ready( function() {
  var num2 = 1;
  var num1 = 1;

  function ResizeTop(num5) {
    function addTop() {
      $('#table').append('<tr class="block"></tr>')
    };
    for (var i=0; i<(num5*10) ; i++) {
      addTop()
    };
  };
  ResizeTop(num2);

  function ResizeBottom(num4) {
    function addBottom() {
      $('tr').append('<td class="block"></td>');
    };
    for (var j=0; j<(10*num4) ; j++) {
      addBottom()
    };
  };
  ResizeBottom(num2);

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

  function hover() {
    $('td').on('mouseover', function() {
      $(this).css('background-color',randomColor())
    });
  };
  hover();

  $("#reset").click( function() {
    var value = prompt("Please enter grid size", "20");
    $('#table').empty();
    var num = 500/value;
    var num3 = value/10;
    ResizeTop(num3);
    ResizeBottom(num3);
    $('.block').css('height', num);
    $('.block').css('width', num);
    hover();
  });

});
