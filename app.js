function yearOfBirth(age) {
  if(age < 0) throw new Error(`Age cannot be negative.`);
  return 2016 - age;
}

function whoAmI (name, age) {
  if (typeof name !== 'string' || name.length < 1 || typeof(age) !== 'number') throw new Error(`Arguments not valid`);
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOfBirth(age)}`);
};

try {
  whoAmI('Dakota', 25);
}
catch(err){
  console.log(err);
}


// QUestions for Rich
// 1. Talk about syntax on lines 17 and 18. Is this correct?
// 2. How to have multiple conditionals for 1 argument
// 3. DRY for yob. Be able to pull argument from whoAmI function and pass to yearOfBirth function
