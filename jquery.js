$(document).ready( function() {
  function thing() {
    function addBlock() {
      $('tr').append('<td id="block"></td>');
    };
    for (var j=0; j<2 ; j++) {
      addBlock()
    }
  };

  function addArea() {
    $('#table').append('<tr>', thing() ,  '</tr>')
  };
  for (var i=0; i<8 ; i++) {
    addArea()
  };


  $('li').one('mouseover', function() {
    $(this).find('div').append('<div id="block2"></div>')
  });

  $("#reset").click( function() {
    var person = prompt("Please enter grid size", "20");
    $('li').append(function(){
      $(this).find('div').css("background-color", "blue");
    });

  });

});
