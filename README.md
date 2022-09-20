## JavaScript Files
- [Kevin Weather](https://github.com/StacyKioko/JavaScript_exercises.js/blob/main/Kevin-scale.js)

## Kevin Weather
The desired output is code that converts kevin > Celsius > Fahrenheit > newton

### Prompt

<p>Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.</p>

<p>Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in [Kelvin](https://en.wikipedia.org/wiki/Kelvin).</p>

<p>With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.</P>

## Magic Eight Ball
The desired output is that a user will be able to input a question, then our program will output a random fortune.

## Tasks
- [ ] Define a variable called `userName` that is set to an empty string.
- [ ] Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like `'Jane'` — use string interpolation to log `Hello, Jane!` to the console. Otherwise, simply log `Hello!`.
- [ ] Create a variable named `userQuestion`. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.
- [ ] Write a `console.log()` for the `userQuestion`, stating what was asked. You can include the user’s name in the `console.log()` statement, if you wish!
- [ ] We need to generate a random number between 0 and 7. Create another variable, and name it `randomNumber`. Set it equal to this expression, which uses two methods `(Math.floor()` and `Math.random())` from the Math library.
- [ ] Create one more variable named `eightBall`, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of `randomNumber`.
- [ ] We need to create a control flow that takes in the `randomNumber` we made in step 5, and then assigns `eightBall` to a reply that a Magic Eight Ball would return. Think about utilizing `if/else` or `switch statements`. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable `eightBall`:

- `'It is certain'`
- `'It is decidedly so'`
- `'Reply hazy try again'`
- `'Cannot predict now'`
- `'Do not count on it'`
- `'My sources say no'`
- `'Outlook not so good'`
- `'Signs point to yes'`

If the `randomNumber` is `0`, then save an answer to the `eightBall` variable; if `randomNumber` is `1`, then save the next answer, and so on. If you’re feeling creative, make your own responses!
- [ ] Write a `console.log()` to print the Magic Eight Ball’s answer, the value of the `eightBall` variable.


## Race Day
The desired output is to assign participants of certain ages race numbers and race time.

### Prompt
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

- Early adults receive a race number at or above 1000.
- All others receive a number below 1000.

Start time:

- Adult registrants run at 9:30 am or 11:00 am.
  - Early adults run at 9:30 am.
  - Late adults run at 11:00 am.
- Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
