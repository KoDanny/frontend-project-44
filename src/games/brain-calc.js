import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const doMath = (firstNumber, operator, secondNumber) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error('Operator not found');
  }
};

const getRoundBrainCalc = () => {
  const firstRandomNumber = getRandomNumber(0, 25);
  const secondRandomNumber = getRandomNumber(0, 10);
  const arrayOperators = ['+', '-', '*'];
  const index = getRandomNumber(0, arrayOperators.length - 1);
  const operator = arrayOperators[index];
  const question = `${firstRandomNumber} ${operator} ${secondRandomNumber}`;
  const correctAnswer = `${doMath(firstRandomNumber, operator, secondRandomNumber)}`;
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(getRoundBrainCalc());
  }
  getGame(description, rounds);
};
