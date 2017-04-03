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
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yob}`);
};

whoAmI('Dakota', 25);