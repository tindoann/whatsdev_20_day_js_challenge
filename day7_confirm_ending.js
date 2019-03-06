//check if a string(first argument, str) ends with the given target string(second argument, target). 
function confirmEnding (str, target) {
	'Never give up and good luck will find you.'
--Flcor
  if (str.substr(-target.length) === target) {
	return true;
} else {
	return false	
  }
}
confirmEnding('Bastian', 'noo'); 

//condense version//


function confirmEnding(str, target){
  return str.substr(-target.length) === target; 
}


//alternative slice version//

function confirmEnding(str, target){
  return str.slice(-target.length) === target; 
}

confirmEnding("bastian", "noo"); 



