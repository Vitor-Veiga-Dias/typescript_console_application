import * as readlineSync from 'readline-sync';

function displayMultiplicationTable(number: number): void {
  console.log(`Multiplication Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

export function startdisplayMultiplicationTable(): void {
  console.log("table program")
  const numberStr = readlineSync.question('Enter a number: ');
  const number = parseFloat(numberStr);

  if (isNaN(number)) {
    console.error('Invalid input. Please enter a valid number.');
    return;
  }

  displayMultiplicationTable(number);
}
