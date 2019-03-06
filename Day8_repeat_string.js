//Repeat a given string (first argument) num times (second arument). Return an empty string if
// num is not a positive number. 

function repeatStringNumTimes(str, num){
  if (num < 0) return ""; 
  return str.repeat(num); 

}

repeatStringNumTimes("abc", 4); 

/*for loop version*/
function repeatStringNumTime(str, num) {
  var final = ""; 
  if (num < 0) return ''; 

  for (var i=0; i<num; i++) {
  	final += str;
  }
  return final;
}

repeatStringNumTimes('abc', 7); 

/*recursion version*/

function repeatStringNumTimes(str, num){
  if (num < 0) return ''; 

  if (num === 1) return str; 

  return str + repeatStringNumTimes(str, num - 1); 
}

repeatStringNumTimes("abc", 3); 

//https://www.youtube.com/watch?v=f0yEu6-Di10