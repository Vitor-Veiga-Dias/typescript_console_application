import * as readlineSync from 'readline-sync';

function factorial(number: number): number {
    if (number < 0) {
      throw new Error('Factorial is not defined for negative numbers.');
    }
  
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  
    return result;
  }

  export function startFactorial(): void {
    console.log("factorial program")
    const numberStr = readlineSync.question('Enter a non-negative integer: ');
    const number = parseInt(numberStr);
  
    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
      console.error('Invalid input. Please enter a non-negative integer.');
      return;
    }
  
    try {
      const result = factorial(number);
      console.log(`Factorial of ${number} is: ${result}`);
    } catch (error) {
      console.error(error.message);
    }
  }

  