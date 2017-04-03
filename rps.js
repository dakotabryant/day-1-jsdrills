function RockPaperScissors(userChoice){
    //userChoice = prompt('Rock, Paper or Scissors?').parseInt();
    let computer = 1 + Math.floor((Math.random()*3));
    let result;

    if(userChoice === computer) {
      result = 'tie';
    } else if(userChoice === 1 && computer === 2) {
      result = 'lost';
    } else if(userChoice === 2 && computer === 3) {
      result = 'lost';
    } else if(userChoice === 3 && computer === 1) {
      result = 'lost';
    } else {
      result = 'won';
    }
    return `You picked ${userChoice} and the computer picked ${computer}. You ${result}.`
  }


//1 = rock ** 2 = paper ** 3 = scissor
var result = RockPaperScissors(2);
document.write(result);





//     switch(userChoice) {
//
//         case 1:
//             if (computer === 2) {
//                 result = 'lost';
//             } else if (computer === 3) {
//                 result = 'win';
//             }
//         case 2:
//             if (computer === 3) {
//                 result = 'lost';
//             } else if (computer === 1) {
//                 result = 'win';
//             }
//         case 3:
//             if (computer === 1) {
//                 result = 'lost';
//             } else if (computer === 2) {
//                 result = 'win';
//             }
//         default:
//             result = tie;
//     }
//     return `You picked ${userChoice} and computer chose ${computer}. You ${result}.`;
// }
