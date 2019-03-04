//return an array consisting of the largest number from each inner array

function largestOfFour(arr){
	var maxes = []; //store the max array 
	for (var i =0; i<arr.length; i++) {
	  // tempMax is the first item in the array 
	  var tempMax = arr[i][0]; 
	  //loops througth inner array
	  for (var j=0; j<arr[i].length; j++) {
	  //i is the the array, j is the items in the array - runs through each item within the array
	  var currentElement = arr[i][j]; 
	  //create a variable inside the outer loop 
	  if (currentElement >= tempMax) {
	  //when the outter loop runs, make tempmax the first item in the inner array - 4, 13, 32, 1000
	  	tempMax = currentElement; 
	  }
	} 
	maxes.push(tempMax); 
  }
  return maxes; 
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); 

// [5, 27, 39, 1001]

function largestOfFour(arr) {
  var maxes = [];
  for (var i=0; i<arr.length; i++) {
    for (var j=0; j<arr[i].length; j++) {
	  var currentElement = arr[i][j]; 
	  if (currentElement >= maxes[i]) {
	  	maxes[i] = currentElement; 
	  }
	}
  }
  return maxes; 
}

