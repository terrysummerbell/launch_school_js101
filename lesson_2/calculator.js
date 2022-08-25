const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'es';

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function messages(message, lang) {
  return MESSAGES[lang][message];
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('welcome');

while (true) {
  prompt('firstNumber');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('invalidNumber');
    number1 = readline.question();
  }

  prompt('secondNumber');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('invalidNumber');
    number2 = readline.question();
  }

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('invalidOperation');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt('result');
  console.log(`${output}`);

  prompt('calculateAgain');
  let answer = readline.question();

  if (answer !== 'y') break;
}