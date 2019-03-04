//figure out if the string is a palindrome
//also remove all punction, spaces, and symbols - non-alpha character
//turn the string into lowercase

function palindrome(str) {
//regExp - a sequence of characters that match a certain pattern 
  var reg = /[\W_]/g; 
//turn the string to lowercase and replace reg with empty space
  var smallStr = str.toLowerCase().replace(reg, ""); 
// checks if the string is a palindrome
  var reversed = smallStr.split("").reverse().join(""); 
  if (reversed === SmallStr) {
	return true;
  } else {
	return false; 
    }
  }


//https://www.youtube.com/watch?v=hvV48xfwZCs