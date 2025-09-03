let userName = 'Abdullah';
// A ternary operator that checks if a userName exists
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
let userQuestion =  'Do you think humanity will ever establish a self-sustaining colony on Mars?';
// Logs the question, using the user's name if available, otherwise defaulting to 'User'
console.log(`${userName ? userName : 'User'} asked: ${userQuestion}`);
// Generates a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
// Initializes a variable to store the Magic 8-Ball's response
let eightBall = '';
// A switch statement that selects a response based on the random number generated
switch (randomNumber){
  case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Absolutely!');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('My sources say no');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
  default:
    console.log('Try Again');
    break;
}
