var words = [
    'awesome',
    'incredible',
    'cool',
    'fantastic'
  ],
  i = 0;

setInterval(function() {         // \/ \/ callback function
  $('#wordChanger').fadeOut(400, function() {
                      // if i = last index ? i = 0 else i++
    $(this).text(words[ (i === words.length - 1) ? i = 0 : i += 1] ).fadeIn(400);
  });
}, 2000);