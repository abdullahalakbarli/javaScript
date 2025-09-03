// Returns the number of hours slept for a given day
const getSleepHours = function(day){
  switch (day.toLowerCase()){
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 8.5;
    case 'thursday':
      return 7;
    case 'friday':
      return 6.5;
    case 'saturday':
      return 9;
    case 'sunday':
      return 10;
    default:
      return 'Error: Invalid day provided!';
  }
}
// Calculates the total sleep for the week by summing up the sleep for each day
const getActualSleepHours = function(){
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
}
// Calculates the ideal total sleep for the week based on a user-defined ideal hourly sleep
const getIdealSleepHours = function(idealHours = 8){
  return idealHours * 7;
}
// Calculates and logs the sleep debt or surplus for the week
const calculateSleepDebt = function(){
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  let amount;
  if (actualSleepHours === idealSleepHours){
    console.log('The user got the perfect amount of sleep');
  }
  else if (actualSleepHours > idealSleepHours){
    amount = actualSleepHours - idealSleepHours;
    console.log(`The user got ${amount} hours more sleep than needed`);
  }
  else {
    amount = idealSleepHours - actualSleepHours;
    console.log(`The user should get ${amount} hours rest`);
  }
}
// Run the function to calculate and display the sleep debt
calculateSleepDebt()
