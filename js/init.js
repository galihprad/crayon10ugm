(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); 
    
    
     $(document).ready(function(){
      $('.carousel').carousel();
    });
    
    
    
    
    
    // end of document ready
})(jQuery); // end of jQuery name space

(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled');
        } else {
            $('#register').removeAttr('disabled');
        }
    });
})