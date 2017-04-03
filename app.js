function yearOfBirth(age) {
    const yob = 2016 - age;
  try {
    if(age < 0) throw new Error(`Age cannot be negative.`);
  } catch(err) {
    console.log(err);
  }
  return yob;
}

const yob = yearOfBirth(25);

function whoAmI (name, age) {
    console.log(typeof name);
  try {
    if(typeof name !== 'string' || typeof(age) !== 'number') throw new Error(`Arguments not valid`);
    console.log(`Hi, my name is ${name} and I'm ${age} years old`);
    console.log(`I was born in ${yob}`);
  }
  catch(err){
    console.log(err);
  }

};

whoAmI('Dakota', 24);


// QUestions for Rich
// 1. Talk about syntax on lines 17 and 18. Is this correct?
// 2. How to have multiple conditionals for 1 argument
// 3. DRY for yob. Be able to pull argument from whoAmI function and pass to yearOfBirth function