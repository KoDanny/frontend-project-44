import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const doMath = (firstNumber, operator, secondNumber) => {
  let result = '';
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      result = null;
  }
  return result;
};

const getGameBrainCalc = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    let result = [];
    const firstRandomNumber = getRandomNumber(0, 25);
    const secondRandomNumber = getRandomNumber(0, 10);
    const arrayOperators = ['+', '-', '*'];
    const index = getRandomNumber(0, arrayOperators.length - 1);
    const operator = arrayOperators[index];
    const question = `${firstRandomNumber} ${operator} ${secondRandomNumber}`;
    result.push(question);
    const correctAnswer = doMath(firstRandomNumber, operator, secondRandomNumber);
    result.push(correctAnswer);
    rounds.push(result);
    result = [];
  }
  const rule = 'What is the result of the expression?';
  getGame(rule, rounds);
};

export default getGameBrainCalc;
