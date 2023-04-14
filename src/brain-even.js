import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
} from './index.js';

const getGameBrainEven = () => {
  const name = getQuestion('What is your name?');
  getPersonalGreeting(name);
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  let result = '';
  let correctAnswerCount = 0;
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomNumber(100);
    const answer = getQuestion(`${'Question:'} ${randomNumber}`);
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
      result = `'${answer}' ${"is wrong answer ;(. Correct answer was 'yes' or 'no'.\nLet's try again"}, ${name}!`;
      console.log(result);
      break;
    }
  }
  if (correctAnswerCount === 3) {
    getCongratulation(name);
  }
};

export default getGameBrainEven;
