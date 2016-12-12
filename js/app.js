var words = [
    'Front-end Developer',
    'Art Director',
    'Graphic Designer',
    'Artist',
    'Photographer'
  ],
  i = 0;

setInterval(function() {         // \/ \/ callback function
  $('#wordChanger').fadeOut(800, function() {
                      // if i = last index ? i = 0 else i++
    $(this).text(words[ (i === words.length - 1) ? i = 0 : i += 1] ).fadeIn(400);
  });
}, 2000);

var options = {
  "animate": true,
  "patternWidth": 100,
  "patternHeight": 100,
  "grainOpacity": 0.15,
  "grainDensity": 2,
  "grainWidth": 1,
  "grainHeight": 1
}
grained("#container", options);

// behance

require(['be'], function(be) {
be('RQkGMlVceRKA2Zfg7zkPZMaPKsTlcXNk');
});
require(['be'], function(be) {
 // Using promises
 be('BehanceApiKey')
 .project.search('illustration')
 .then(function success(results) {
   console.log(results);
 }, function failure(error) {
   console.error(error);
 });

 // Using callbacks
 be.project.search('branding', function success(results) {
   console.log(results);
 });
});

