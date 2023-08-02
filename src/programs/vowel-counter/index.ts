import * as readlineSync from 'readline-sync';

function countVowels(sentence: string): number {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of sentence) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

export function startcountVowels(): void {
  console.log("voewls counter program")
  const sentence = readlineSync.question('Enter a sentence: ');

  const numVowels = countVowels(sentence);
  console.log(`The sentence has ${numVowels} vowel(s).`);
}
