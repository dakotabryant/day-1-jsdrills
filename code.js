var decode = function(message) {
    var words = message.split(' ');
    var results = '';
    
    for (var i = 0; i < words.length; i++) {
      var firstChar = words[i].charAt(0);        
        if (firstChar === "a") {
            results += words[i].charAt(1);
        } else if (firstChar === "b") {
            results += words[i].charAt(2);
        } else if (firstChar === "c") {
            results += words[i].charAt(3);
        } else if (firstChar === "d") {
            results += words[i].charAt(4);
        } else {
            results += ' ';
        }       
    }
    return results;
};

    //loop through each word
    //determine the first char of each word
    //get the corresponding char from first char
    //concatenate into results string


var result = decode('craft block argon meter bells brown croon droop');
console.log(result);
//input: craft block argon meter bells brown croon droop
//output: tor loop