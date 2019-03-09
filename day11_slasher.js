//return the remaining elements of an array after chopping off n elements from the head.

function slasher(arr, howMany) {

arr.splice(0, howMany); 
return arr; 
} 

slasher([1, 2, 3], 2); 

//splice method

/* var arr = ['a', 'b', 'c', 'd']; 

arr.splice(0,2); 
console.log(arr) // (c, d); 

arr.splice(0, 2); 
console.log(arr) */