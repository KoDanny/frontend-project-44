import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  getGreatestCommonDivisor,
  getRule,
  isCorrect,
} from '../src/index.js';

const getGameBrainGcd = (roundCount = 3) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('Find the greatest common divisor of given numbers.');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const firstNumber = getRandomNumber(1, 15) * 3;
    const secondNumber = getRandomNumber(1, 12) * 4;
    const answer = getQuestion(`${firstNumber} & ${secondNumber}`);
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    const result = isCorrect(+answer, correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGameBrainGcd;
