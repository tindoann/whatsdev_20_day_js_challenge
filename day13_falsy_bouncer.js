// removes all falsy value from an array
// falsy values in js are false, null, 0, '', undefined, and NaN

function bouncer(arr) {
  var truthies = []; 

for (var el of arr) {
  if (el) truthies.push(el); 
}

return truthies; 
}

bouncher([7, 'ate', '', false, 9]); 

// fitler method //

function bouncer(arr) {
  return arr.filter(function(el) {
  	return el; 
  })
}

bouncher([7, 'ate', '', false, 9]); 

 // ex filter //

 var nums = [1, 2, 3, 4, 5, 6]; 

 nums.filter(function(parameter) {
   return item < 4; 
 }); 

 //https://www.youtube.com/watch?v=GdU0oQWxTB4