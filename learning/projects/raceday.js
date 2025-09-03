// This program assigns a race number and race time to runners based on their age and registration status.

// The race number is a random number from 0-999.
let raceNumber = Math.floor(Math.random() * 1000);
// This variable checks if the runner registered early.
const registeredEarly = true;
// This variable holds the runner's age.
let runnerAge = 17;
// This conditional statement checks if the runner is over 18 AND registered early.
// If true, 1000 is added to their race number.
if (registeredEarly && runnerAge > 18){
  raceNumber += 1000;
}
if (registeredEarly && runnerAge > 18){
  console.log(`Runner ${raceNumber} is over 18 AND registered early they will race at 09:30am`);
}
else if (!registeredEarly && runnerAge > 18){
  console.log(`Runner ${raceNumber} is over 18 AND did not register early they will race at 11:00am`);
}
else if (runnerAge < 18){
  console.log(`Runner ${raceNumber} , youth registrant, will race at 12:30 pm.`);
}
else{
  console.log('Please see the registration desk');
}
