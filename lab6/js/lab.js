/*
*Author: Sabah Shaikh
*Created: 25 April 2022
*License: Public Domain
*/

// Define Variables
myTransport = ["walk", "car", "bus"];

myMainRide = {
  make : "subaru",
model : "forester",
color: "silver",
year: "2015",
age : function() {
    return 2022 - age;
}
}

// output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride; <pre>",
    JSON.strngfy(myMainRide, null, '\t'),"<pre");
