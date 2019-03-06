//write a function that splits an array (first argument) into groups the length of size (second argument)
//and returns them as a two-dimensional array. 

function chunkArrayInGroup(arr, size){
  var group = []; 
// while array.length is greater than zero group stop push array dot slice in zero size 
  while (arr.length > 0) {
    group.push(arr.slice(0, size)); 
	}
}

  chunkArrayInGroup(['a', 'b', 'c', 'c'])  

  // var letters = ['a', 'b', 'c', 'd']; 
  // console.log(letters.slice(0, 2))

 /*splice method*/

 function chunkArrayInGroup(arr, size) {
   var groups =[]; 
   while (arr.length > 0) {
     groups.push(arr.splice(0, size)); 
     // arr = arr.slice(size); 
 	}
 	return groups; 
   }

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2); 


//https://www.youtube.com/watch?v=jBlnlSNUdHo


