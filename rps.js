function RockPaperScissors(userChoice){
    //userChoice = prompt('Rock, Paper or Scissors?').parseInt();
    let computer = 1 + Math.floor((Math.random()*3));
    let result;
    switch(userChoice) {
        case 1:
            if (computer === 2) {
                result = 'lost';
            } else if (computer === 3) {
                result = 'win';
            } else {
              result = 'tie';
            }
            break;
        case 2:
            if (computer === 3) {
                result = 'lost';
            } else if (computer === 1) {
                result = 'win';
            } else {
              result = 'tie';
            }
            break;
        case 3:
            if (computer === 1) {
                result = 'lost';
            } else if (computer === 2) {
                result = 'win';
            } else {
              result = 'tie';
            }
            break;
        default:
            console.log('Go back and pick a number between 1 and 3');
    }
    return `You picked ${userChoice} and computer chose ${computer}. You ${result}.`;
}

//1 = rock ** 2 = paper ** 3 = scissor
var result = RockPaperScissors(2);
document.write(result);
