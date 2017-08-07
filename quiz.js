$(window).on('load', function(){
  // read quiz json
  // validate answers
  // display the follow up question and message
  $('input').on('click', function(){
     $('div').text('You clicked on ' + $(this).closest('li').text());
     $('div').slideDown();
  });
});
