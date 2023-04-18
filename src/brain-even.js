import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  getIncorrectResult,
  isCorrect,
} from './index.js';

const getGameBrainEven = () => {
  const name = getQuestion('May I have your name?');
  getPersonalGreeting(name);
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log(rule);
  let correctAnswerCount = 0;
  for (let i = 0; i <= 2; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = getQuestion(`${'Question:'} ${randomNumber}`);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (isCorrect(answer, correctAnswer)) {
      console.log('Correct!');
      correctAnswerCount += 1;
    } else {
      getIncorrectResult(answer, name, correctAnswer);
      break;
    }
    if (correctAnswerCount === 3) {
      getCongratulation(name);
    }
  }
};

export default getGameBrainEven;
