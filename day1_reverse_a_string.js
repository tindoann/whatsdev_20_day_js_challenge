//first convert the string into an array
//there's a reverse property for an array, but not for a string. 
function reverseString(str){
//use split to convert string into an array - split into individual characters
  var strArr = str.split("")
//reverses the characters 
  var reverseStrArray = strArray.reverse(); 
//converts the array back into an string 
  var reverseString = reverseStrArray.join(""); 
//runs the function in the program
  return reversedString
}

console.log(reverseString("hello")); // olleh


//neater code//
function reverseString(str) {
return str.split("").reverse().join("")
}

console.log(reverseString("hello")); // olleh