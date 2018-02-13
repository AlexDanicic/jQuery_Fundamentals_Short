$(function(){

// main h2
$('h2').fadeOut(3500).fadeIn(3500);

//lets start here:
$('#success').hide();
$('#startover').addClass('hoverOut');
var score = 0;

$('#alexhead').click(function(){
  score++;
  $('#score').text(score);
  $('#success').show('fast').fadeOut(500);
  
});

// function to handle
$('#startover').hover(function(){
  score = 0;
  $('#score').text(score);
  $('#startover').addClass('hoverIn').removeClass('hoverOut');
  // function to handle hover out separated by ,
}, function() {
  $('#startover').removeClass('hoverIn').addClass('hoverOut');
});



// end 
});