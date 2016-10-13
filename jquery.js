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


  $('li').one('mouseover', function() {
    $(this).find('div').append('<div id="block2"></div>')
  });


  $("#reset").click(function() {
    document.location.reload(true);
    var prompt = prompt("How many boxes?", "20");
    if (prompt != null) {
      document.getElementByID("demo").innerHTML =
      "hello " + prompt + "! How are you today?";
    }
  });

});
