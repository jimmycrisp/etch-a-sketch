$(document).ready( function() {
  function fart() {
    function addBlock() {
      $('ul').append('<li><div id="block"></div></li>');
    };
    for (var j=0; j<100 ; j++) {
      addBlock()
    }
  };

  function addArea() {
    $('.container').append('<ul>', fart() ,  '</ul>')
    };
  for (var i=0; i<11 ; i++) {
    addArea()
  };




})
