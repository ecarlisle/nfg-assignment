$(document).ready(function(){

  for (var i = 0; i < 12; i++) {
    $('#fundraisers-primary').append($('#person').html());
  }

  for (var i = 0; i < 12; i++) {
    $('#fundraisers-secondary').append($('#person').html());
  }

  $('#fundraisers-reveal a').on('click', function(event){

    // Prevent snapping to the top of the page.
    event.preventDefault();

    // Switch position of two figures so that "Your Picture Here" is still
    // the last figure.
    $('#fundraisers-primary figure:last').detach().appendTo($('#fundraisers-secondary'));
    $('#fundraisers-secondary figure:first').detach().appendTo($('#fundraisers-primary'));

    // --- Use the Bootstrap Collapse JavaScriptcomponent ---

    // Expand #fundraisers-secondary
    $('#fundraisers-secondary').collapse('show');

    // Hide "See All Fundraiders" button.
    $('#fundraisers-reveal').collapse('hide');



  }); 

  // Placeholder for "Start Your Campaign" button.
  $('#fundraisers-reveal a').on('click', function(event){

    // Prevent snapping to the top of the page.
    event.preventDefault();

  }); 

});
