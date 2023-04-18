import {
  getPersonalGreeting,
  getQuestion,
  getCongratulation,
  isCorrect,
  getRandomNumber,
  isPrime,
  getIncorrectResult,
} from './index.js';

const getGameBrainPrime = () => {
  const name = getQuestion('May I have your name?');
  getPersonalGreeting(name);
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  console.log(rule);
  let correctAnswerCount = 0;
  const roundCount = 3;
  let result = '';
  for (let i = 1; i <= roundCount; i += 1) {
    const number = getRandomNumber(0, 20);
    const answer = getQuestion(`${'Question:'} ${number}`);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    if (isCorrect(answer, correctAnswer)) {
      result = 'Correct!';
      console.log(result);
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

export default getGameBrainPrime;
