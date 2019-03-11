// Return the lowest index at which a value (second argument) should be inserted into an array
// (first argumnet) once it has been sorted. The returned value should be a number. 

function getIndexToIns(arr, num) {
  // Find my place in this sorted array. 

  arr.sort(function(a, b) {
    return a - b; // sorts the index numerically 
  }); 
  for (var i=0; i<arr.length; i++) {
    if(num <= arr[i]) {
      return i; 
    }
  }

  return arr.length; 
}

getIndexToIns([40, 60, 5], 50); 