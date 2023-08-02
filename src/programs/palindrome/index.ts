import * as readlineSync from 'readline-sync';

function isPalindrome(word: string): boolean {
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedWord === cleanedWord.split('').reverse().join('');
}

export function startisPalindrome(): void {
  console.log("palindrome program")
  const word = readlineSync.question('Enter a word: ');

  if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.log(`${word} is not a palindrome.`);
  }
}

