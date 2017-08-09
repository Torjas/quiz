$(window).on('load', function(){
  // read quiz json
  // validate answers
  // display the follow up question and message
  $('input').on('click', function(){
    var name = $(this).attr('name');
    $('div.answer i').text('You clicked on ' + $(this).closest('li').text());
    $(this).closest('ul').hide();
    $('div.answer.' + name).fadeIn('slow');
  });
});
