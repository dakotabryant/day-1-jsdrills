// var jediName = function(firstName, lastName) {
//     var jediFirstName = lastName.slice(0,3);
//     var jediLastName = firstName.slice(0,2);
//     return `${jediFirstName}${jediLastName}`;
// };
//
// var result = jediName('Dakota', 'Bryant');
// console.log(result);

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  }
  if (num > 0) {
    console.log('To infinity');
  }
  if (num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}

beyond(0);
