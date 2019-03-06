//Truncate a string(first argument) if it is longer than the given maximum string length (second argument). 
//Return the truncated string with a ... ending. 

function truncateString(str, num){
  if (num <= 3) return str.slice(0, num) + "..."; 
  return str.slice(0, num-3) + "..."; 
}

truncateString("A-tisket a-tasket ", 11); 
truncateString("tommy goes to work.", 4)

