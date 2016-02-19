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

    // var regex = [A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,};
    //
    // if(!regex.test($mail)){
    //   console.log("Enter a valid email.");
    //   return false;
    // }
  });
});
