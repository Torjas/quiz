$(window).on('load', function(){
  $('input').on('click', function(){
    var value = $(this).attr('value');
    $(this).closest('ul').hide();
    console.log('div.answer p.' + value);
    $('div.answer p.' + value).fadeIn('slow');
  });
});
