$(window).on('load', function(){

  $('input').on('click', function(){
    var id = $(this).attr('id');
    var question = $(this).attr('name');

    // Hide question
    $(this).closest('ul.' + question).hide();

    // Show answer
    $('p.' + id).slideDown('slow');

    // Show reset link
    $('div.answer.' + question + ' p.reset').show();

    // Create GA event
    ga('send', 'event', 'Answer', question, id);
  });

  $('p.reset a').on('click', function(){
    var question = $(this).attr('class');
    var visiblep = $('div.answer.' + question + ' p').filter(':visible');

    // Hide answer
    $(visiblep).hide();

    // Hide reset link
    $(this).closest('p.reset').hide();

    // Show question again
    $('ul.' + question).slideDown('slow');

     // Create GA event
    ga('send', 'event', 'Reset', question, $(visiblep[0]).attr("class"));
  });
});
