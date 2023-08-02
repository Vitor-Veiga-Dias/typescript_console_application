import * as readlineSync from 'readline-sync';

function calculateFinalValue(initialCapital: number, interestRate: number, months: number): number {
  const monthlyInterestRate = interestRate / 100 / 12;
  return initialCapital * Math.pow(1 + monthlyInterestRate, months);
}

export function startCalculateFinalValue(): void {
    console.log("interest calculation program")
  const initialCapitalStr = readlineSync.question('Enter the initial capital: ');
  const initialCapital = parseFloat(initialCapitalStr);

  const interestRateStr = readlineSync.question('Enter the annual interest rate (%): ');
  const interestRate = parseFloat(interestRateStr);

  const monthsStr = readlineSync.question('Enter the investment time (in months): ');
  const months = parseInt(monthsStr);

  if (isNaN(initialCapital) || isNaN(interestRate) || isNaN(months) || months <= 0) {
    console.error('Invalid input. Please enter valid numbers for initial capital, interest rate, and investment time.');
    return;
  }

  const finalValue = calculateFinalValue(initialCapital, interestRate, months);
  console.log(`The final value of the investment is: ${finalValue.toFixed(2)}`);
}
