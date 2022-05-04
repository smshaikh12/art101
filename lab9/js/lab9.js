/*
*Author: Sabah Shaikh
*Created: 4 May 2022
*License: Public Domain
*/


//find the element
var head1El = document.getElementById("output");

// create a new button element
var new1El = document.createElement("button");

// append the feature
head1El.appendChild(new1El);

// make the button say somthing
new1El.innerHTML = ("CLICK THIS DUDE");

// style the button
new1El.style.backgroundColor = "yellow";
new1El.style.color = "black";

//find the second element
var head1El = document.getElementById("output2");

//create a new element
var new2El = document.createElement("button");

//create button
head1El.appendChild(new2El);

// make the new button say somthing
new2El.innerHTML = ("NO! click me dude");

//style the new button
new2El.style.backgroundColor = " blue";
new2El.style.color = "white";
