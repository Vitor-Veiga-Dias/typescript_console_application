import * as math from 'mathjs';
import * as readlineSync from 'readline-sync';

function calculate(num1: number, num2: number, operator: string): number {
  switch (operator) {
    case '+':
      return math.add(num1, num2);
    case '-':
      return math.subtract(num1, num2);
    case '*':
      return math.multiply(num1, num2);
    case '/':
      return math.divide(num1, num2);
    default:
      throw new Error('Invalid operator. Supported operators are +, -, *, and /.');
  }
}

export function startCalculator(): void {
  console.log("calculator program")
  const num1Str = readlineSync.question('Enter the first number: ');
  const num1 = parseFloat(num1Str);
  if (isNaN(num1)) {
    console.error('Invalid number. Make sure to enter a valid number.');
    return;
  }

  const num2Str = readlineSync.question('Enter the second number: ');
  const num2 = parseFloat(num2Str);
  if (isNaN(num2)) {
    console.error('Invalid number. Make sure to enter a valid number.');
    return;
  }

  const operator = readlineSync.question('Enter the operator (+, -, *, /): ');
  try {
    const result = calculate(num1, num2, operator);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(error.message);
  }
}
