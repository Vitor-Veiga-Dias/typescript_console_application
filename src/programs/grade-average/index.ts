import * as readlineSync from 'readline-sync';

function calculateAverage(grades: number[]): number {
  const totalGrades = grades.reduce((sum, grade) => sum + grade, 0);
  return totalGrades / grades.length;
}

export function startCalculateAverage(): void {
  console.log("calculate average program")
  const grades: number[] = [];

  for (let i = 1; i <= 3; i++) {
    const gradeStr = readlineSync.question(`Enter the grade for subject ${i}: `);
    const grade = parseFloat(gradeStr);

    if (isNaN(grade)) {
      console.error('Invalid input. Please enter a valid number for the grade.');
      return;
    }

    grades.push(grade);
  }

  const average = calculateAverage(grades);
  console.log(`The average grade is: ${average.toFixed(2)}`);
}

