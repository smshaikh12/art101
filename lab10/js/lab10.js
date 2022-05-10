/*
*Author: Sabah Shaikh
*Created: 9 May 2022
*License: Public Domain
*/

//sortUserName- a function that takes user input and
//sorts the letter of their name

function sortUserName() {
var userName = window.prompt("Hi. tell me your name!");
  console.log("userName =", userName);
  //split string into array
var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
var nameArraySort = nameArray.sort();
//join array back into the string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}
//output
var buttonEl = document.getElementById('the-button');
// create event listener
buttonEl.addEventListener('click', function() {
	alert("Your gonna leave!");
  window.location.replace("https://www.google.com/");
});


// output
document.writeln("fixed it: ",
  sortUserName(),"</br>");
