/*
*Author: Sabah Shaikh
*Created: 11 May 2022
*License: Public Domain
*/

//create button for challeneges section
$("#challenges").append("<button id='button1'>press me</button>");
//create button for problems section
$("#problems").append("<button id='button2'>press me</button>");
//create button for results section
$("#results").append("<button id='button3'>press me</button>");


//create a click feeture for button1
$("#button1").click(function(){
  $("#challenges").toggleClass("special")
});

$("#button2").click(function(){
  $("#problems").toggleClass("special")
});

$("#button3").click(function(){
  $("#results").toggleClass("special")
});
