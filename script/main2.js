$(function(){

// By id
//$('#first').addClass('highlight');

// By element/ tag
//$('p').addClass('highlight');

// By class
//$('.chosen').addClass('highlight');

// Combination
//$('#first, .chosen').addClass('highlight');

// Contains
//$('li:contains("Three")').addClass('highlight');

$('li:even').addClass('highlight');

// next, previous
/*
$('li:contains("Three")').next().addClass('highlight');

$('li:contains("Three")').prev().addClass('highlight');
*/

// siblings, parent
//$('li:contains("Three")').siblings().addClass('highlight');

//$('li:contains("Three")').parent().addClass('highlight');

// first
//$('li:nth-child(1)').addClass('highlight');

// attribute
//$('p[name="mySecondPara"]').addClass('highlight');


// attribute not equal to..do not have..
//$('p[name!="mySecondPara"]').addClass('highlight');

//$('p').not('[name]').addClass('highlight');

// header 
//$(':header').addClass('highlight');

// find all empty items. In this case the <p> on the bottom
$('p:empty').text("You seemed lonely, so I gave you some text from jQuery..");






});