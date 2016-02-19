$(document).ready(function () {
  $('button').on( "click", function (event){
    var $name = $('#name');
    var $mail = $('#mail');
    var $msg = $('#msg');

    var fields = [$name, $mail, $msg];

    event.preventDefault();

    fields.forEach( function(field){
      if (!field.val()) {
        field.prev().css( "color", "red" );
      }
    });
  });
});
