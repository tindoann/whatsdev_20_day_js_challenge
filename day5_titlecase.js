//return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lowercase

//seperate the string into an array. 
function titleCase(str){
	var words = str.toLowerCase().split(" "); // lowercases all characthers 
	for (vari=0; i<words.length; i++){
	words[i] = words[i][0].toUpperCase() + words[i].slice(1); //grabs the first character in a word, uppercases it and remaining characters are added. 	
	}
	return words.join(" "); // join all the words
}

titleCase("I'm a little tea pot");  

//var name = 'Honathan'; console.log(name.slice(1) => 'onathan')

//alternative version//


/* function titleCase(str){
	var title  = str.toLowerCase().split(" ").map(function(elem){
		return elem[0].toUpperCase() + elem.slice(1); 
	})
	return titled.join(' '); 
}

titleCase("I'm a little tea pot"); */