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
