/*
*Author: Sabah Shaikh
*Created: 25 April 2022
*License: Public Domain
*/

//sortUserName- a function that takes user input and
//sorts the letter of their name
function sortUserName() {
var userName = window.prompt("Hi. please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string into array
var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort);
  //join array back into the string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
  //  userName.tolower().split("").sort().join("")
return nameSorted;
}

// output
document.writeIn("oh hey, I've fixed your name: ",
  sortUserName(), "</br>");
