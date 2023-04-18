import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  doMath,
  getRule,
  isCorrect,
} from '../src/index.js';

const getGameBrainCalc = (roundCount = 3) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('What is the result of the expression?');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const firstRandomNumber = getRandomNumber(0, 25);
    const secondRandomNumber = getRandomNumber(0, 10);
    const arrayOperators = ['+', '-', '*'];
    const index = getRandomNumber(0, arrayOperators.length - 1);
    const operator = arrayOperators[index];
    const answer = getQuestion(`${firstRandomNumber} ${operator} ${secondRandomNumber}`);
    const correctAnswer = doMath(firstRandomNumber, operator, secondRandomNumber);
    const result = isCorrect(+answer, correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGameBrainCalc;
