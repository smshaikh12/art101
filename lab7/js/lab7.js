/*
*Author: Sabah Shaikh
*Created: 25 April 2022
*License: Public Domain
*/

//sortUserName- a function that takes user input and
//sorts the letter of their name
function sortUserName() {
var userName = window.prompt("Hi. tell me your name so I can fix it.");
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

// output
document.writeln("fixed it: ",
  sortUserName(),"</br>");
