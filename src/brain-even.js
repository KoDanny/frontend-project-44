import readlineSync from 'readline-sync';
import getQuestionsAboutName from './cli.js';

const getRandomNumber = () => Math.round(Math.random() * 100);

const getGameBrainEven = () => {
  const name = getQuestionsAboutName();
  console.log(`${'Hello'}, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let result = '';
  let correctAnswerCount = 0;
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomNumber();
    const question = `${'Question:'} ${randomNumber}`;
    console.log(question);
    const answer = readlineSync.question(`${'Your answer: '}`);
    if (answer.toLowerCase() === 'yes') {
      if (randomNumber % 2 === 0) {
        console.log('Correct!');
        correctAnswerCount += 1;
      } else {
        result = (`${"'yes' is wrong answer ;(. Correct answer was 'no'."}\n${"Let's try again"}, ${name}!`);
        console.log(result);
        break;
      }
    } else if (answer.toLowerCase() === 'no') {
      if (randomNumber % 2 !== 0) {
        console.log('Correct!');
        correctAnswerCount += 1;
      } else {
        result = (`${"'no' is wrong answer ;(. Correct answer was 'yes'."}\n${"Let's try again"}, ${name}!`);
        console.log(result);
        break;
      }
    } else {
      result = `${answer} ${"is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again"}, ${name}!`
      console.log(result);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    result = `${'Congratulations'}, ${name}!`;
    console.log(result);
  }
};

export default getGameBrainEven;
