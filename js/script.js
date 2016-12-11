
var colors = new Array(
  [0,167,147],
  [0,110,183],
  [0,163,79],
  [0,148,158]);
  //[62,35,255],
  //[60,255,60],
  //[255,35,98],
  //[45,175,230],
  //[255,0,255],
  //[255,128,0]);
var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{
  
  if ( $===undefined ) return;
  
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";



 $('#gradient').css({
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
  
  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,10);
$( document ).ready(function() {
      $(".fancybox").fancybox();
      $( ".circle#vegan" ).mouseenter(function() {
      $("#big_circle #text_container h1").html("VEGAN");
      $("#big_circle #text_container p").html("I&#39;ve been vegan for 4 years and vegetarian for 14. I feel that we have no right to take the life of an animal unless it is absolutly necessary. Today&#39;s factory farming is not only extremely cruel, it starves more people than it feeds and is hugely destructive to our environment."); 
      });
      $( ".circle#ENVIRONMENTALIST" ).mouseenter(function() {
        $("#big_circle #text_container h1").html("YOGI");   
        $("#big_circle #text_container p").html("I&#39;m a certified Ayurvedic Lifestyle counselor and have been practicing yoga on and off for 15 years. I know a little Sanskrit and can proudly do the splits and head/hand/forearm stands. I find that starting off my day with yoga is essential to feeling focused and calm.");  
      });      
   
      $( ".circle#yogi" ).mouseenter(function() {
        $("#big_circle #text_container h1").html("ARTIST");   
        $("#big_circle #text_container p").html("I&#39;ve always had a passion and talent for art, and was lucky enough to have parents that nurtured that passion. I started taking art classes at age 7 and we&#39;d frequently go to museums and concerts. In my free time I love to paint, play an instrument (I know 5), cook/bake, or even knit, crochet or sew. ");  
      });      
      $( ".circle#artist" ).mouseenter(function() {
        $("#big_circle #text_container h1").html("ENVIRONMENTALIST");   
        $("#big_circle #text_container p").html("We only have one Earth and we&#39;re rapidly destroying this one. Animal agriculture accounts for 37% of methane emissions, which has more than 20 times the global warming potential of CO2. If we want a future for our children, we have to start making some serious changes. ");  
      });            
      
      
});

 $(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.lazy').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});
