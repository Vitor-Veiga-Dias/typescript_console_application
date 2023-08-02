import * as readlineSync from 'readline-sync';
import {
  startCalculator,
  startPimeNumbers,
  startFactorial,
  startisPalindrome,
  startdisplayMultiplicationTable,
  startcountVowels,
  startCalculateAverage,
  startCalculateFinalValue,
} from './programs'; // Assuming all functions are exported from a single module called 'modules'

function shouldContinue(): boolean {
  const choice = readlineSync.keyInYN('Do you want to continue to the next program? (y/n) ') as boolean;
  return choice;
}

function runProgram(program: Function, programName: string): void {
  console.log(`=== ${programName} ===`);
  program();
  console.log();
}

function InitProgram() {
  const startProgram = readlineSync.keyInYN('Do you want to start the programs? (y/n) ');

  if (startProgram) {
    const programs = [
      startCalculator,
      startPimeNumbers,
      startFactorial,
      startisPalindrome,
      startdisplayMultiplicationTable,
      startcountVowels,
      startCalculateAverage,
      startCalculateFinalValue,
    ];

    for (let i = 0; i < programs.length; i++) {
      if (startProgram && shouldContinue()) {
        runProgram(programs[i], programs[i].name);
        if(programs[i].name === 'startCalculateFinalValue') {
            console.log('Finished programs')
        }
      } else {
        console.log('Program stopped.');
        break;
      }
    }
  } else {
    console.log('Program stopped.');
  }
}

InitProgram();
