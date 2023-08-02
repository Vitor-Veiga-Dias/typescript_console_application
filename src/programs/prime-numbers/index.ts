import * as readlineSync from 'readline-sync';

function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function printFirstNPrimes(n: number): void {
  const primes: number[] = [];
  let number = 2;

  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }

  console.log(`The first ${n} prime numbers are: ${primes.join(', ')}`);
}

export function startPimeNumbers(): void {
  console.log("prime numbers program")
  const numPrimesStr = readlineSync.question('Enter the number of prime numbers to print: ');
  const numPrimes = parseInt(numPrimesStr);

  if (isNaN(numPrimes) || numPrimes <= 0) {
    console.error('Invalid input. Please enter a positive integer.');
    return;
  }

  printFirstNPrimes(numPrimes);
}
