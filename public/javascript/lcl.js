// On document load
$(document).ready(function() {
  
  // If the select is changed
  $(".user-select select").change(function () {
    
    // Update the banner button based on the selection
    if ( this.value == 'prospect') {
      $(".cta-button p:not(:has(*))").hide()
      $(".cta-button p span.Client").hide()
      $(".cta-button p span.Prospect").show()
      checkValue(".cta-button", "p span.Prospect");
    } else if ( this.value == 'client') {
      $(".cta-button p:not(:has(*))").hide()
      $(".cta-button p span.Prospect").hide()
      $(".cta-button p span.Client").show()
      checkValue(".cta-button", "p span.Client");
    } else {
      $(".cta-button p span.Prospect").hide()
      $(".cta-button p span.Client").hide()
      $(".cta-button p:not(:has(*))").show()
    }
  });
});

var checkValue = function(parent, selector){
  $(parent).each(function( index ){
    if ( !$(this).has(selector).length ) {
      $(this).children("p:not(:has(*))").show();
    }
  });
};