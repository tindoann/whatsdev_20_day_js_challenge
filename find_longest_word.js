function findLongestWord(str){
  var words = str.split(" ") // converts the string to an array
// loops through the array like a for loop
  for (var word of words) {
    if (word.length > longest.length) longest = word; 
  }
  return longest.length; // returns the longest length by number of characters
  }
findLongestWord("The quick brown fox jumped over the lazy dog"); 



/* 

var fruits = ["apple", "mango", "cherries"]

for (var i=0; i<fruits.length; i++){
	console.log(fruits[i])
*/

/* condense version 

function findLongestWord(str){
	return str.split(" ").sort(function(a, b) {return b.lengh - a.length})[0]; 
}

} 

//https://www.youtube.com/watch?v=dy4y5MFVjbs

