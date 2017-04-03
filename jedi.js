var jediName = function(firstName, lastName) {
    var jediFirstName = lastName.slice(0,3);
    var jediLastName = firstName.slice(0,2);
    return `${jediFirstName}${jediLastName}`;
};

var result = jediName('Dakota', 'Bryant');
console.log(result);