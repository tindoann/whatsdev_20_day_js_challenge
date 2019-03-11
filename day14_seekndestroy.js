// You will provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are 
// of the same value as these arguments. 

function destroyer(arr) {

  var args = Array.from(arguments); 
  args.splice(0,1); 
  var targets = args; 
  var result = []; 

  for (var num of arr) {
    if (targets.indexOf(num) === -1) {
      result.push(num); 
    }
  }

  return result; 
}

destroyer([1, 2, 3, 1, 2, 4], 2, 3); // []