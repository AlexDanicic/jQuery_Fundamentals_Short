
// extended starter
$(document).ready(function() {
  // start up code goes here
  console.log('This works! Let\'s start');
});

// shorter version of the starter file
$(function(){
  console.log('Let\'s start from the shorter version');

  $('#first').fadeOut(1000).fadeIn(1000);

  $('#title').text("Awesome, I can now get at \"h1\" immediately!");

  $('#first1').html("<h2>Great quotes</h2>");

  $('#first2').prepend("<h3>Add something great here...it's .prepend()</h3>");

  $('#first2').append("<h3>Add something great after text...it's .append()</h3>");

  $('p>#myAnchor').attr("href", "https://www.freecodecamp.org/alexdanicic");

  $('#title_0').addClass("mainTitle");
//jQuery end here!
});

