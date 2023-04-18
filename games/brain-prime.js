import {
  getPersonalGreeting,
  getRule,
  getQuestion,
  getCongratulation,
  isCorrect,
  getRandomNumber,
  isPrime,
} from '../src/index.js';

const getGameBrainPrime = (roundCount = 3) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const number = getRandomNumber(0, 20);
    const answer = getQuestion(`${number}`).toLowerCase();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    const result = isCorrect(answer, correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGameBrainPrime;
