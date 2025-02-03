/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
const addStuff = '+'

/*-------------------------------- Variables --------------------------------
As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.*/

//I want an array where the current inputs push together into an algebra expression
let displayMemory  = []
let termOne = 0
let operator = "a, b, c, d"
let total = 0

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
  });
});
calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  // console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    // show that number in the top display
    display.innerHTML = `${event.target.innerText}`; //what button was clicked
    displayMemory.push(event.target.innerText); //stores the numbers
    console.log(displayMemory); 
  }

  // Equal sign = Add all the things in the displayMemory together and calculate
  if (event.target.innerText === '=') {
    let termTwo = displayMemory.join('')
    displayMemory = []
    console.log(termTwo)

    if(operator == ""){
      total = termTwo
    }
    
 
    //if i used + it adds
    if(operator == 'addition'){
      total = parseInt(termOne) + parseInt(termTwo)
      console.log(total)
    }

    //if i used - it subtracts
    if(operator == 'subtraction'){
      total = parseInt(termOne) - parseInt(termTwo)
      console.log(total)
    }

    //if i used / it divides
    if(operator == 'division'){
      total = parseInt(termOne) / parseInt(termTwo)
      console.log(total)
    }

    //if i used * it multiplies
    if(operator == 'multiplication'){
      total = parseInt(termOne) * parseInt(termTwo)
      console.log(total)
    }
    //Display the result, and save it in case they want to keep doing functions
    display.innerHTML = `${total}`
    displayMemory.push(total)
    termOne = 0
    termTwo = 0
    operator = ''
  }
  
  // Subtraction button
  if (event.target.innerText === '-') {
    console.log( displayMemory.join(''))
    termOne = displayMemory.join('')
    display.innerHTML = `${termOne}`
    operator = 'subtraction'
    displayMemory = []
  }
  // Addition button
  if (event.target.innerText === '+') {
    console.log( displayMemory.join(''))
    termOne = displayMemory.join('')
    display.innerHTML = `${termOne}`
    operator = 'addition'
    displayMemory = []
  }
  
  // Divide button
  if (event.target.innerText === '/') {
    console.log( displayMemory.join(''))
    termOne = displayMemory.join('')
    display.innerHTML = `${termOne}`
    operator = 'division'
    displayMemory = []
  }

  //Multiplication button
  if (event.target.innerText === '*') {
    console.log( displayMemory.join(''))
    termOne = displayMemory.join('')
    display.innerHTML = `${termOne}`
    operator = 'multiplication'
    displayMemory = []
  }

  //Clear button
  if (event.target.innerText === 'C') {
    displayMemory = []
    display.innerHTML = 0
    operator = ''
    console.log("clear")
  }

});


/*-------------------------------- Functions --------------------------------*/
