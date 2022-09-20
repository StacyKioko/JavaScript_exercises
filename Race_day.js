let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 21;

if (runnerAge > 18 && registerEarly){
  raceNumber += 1000;
}

if (runnerAge > 18 && registerEarly) {
  console.log(`Race will start at 9:30am, your race number is: ${raceNumber}`);
} else if(runnerAge > 18 && !registerEarly) {
  console.log(`Race will start at 11:00am, your race number is: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm, your race number is: ${raceNumber}`)
} else {
  console.log('Visit the registration desk for more information')
}
