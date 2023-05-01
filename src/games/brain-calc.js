import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const doMath = (firstNum, operator, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
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

export default () => runGame(description, getRoundBrainCalc);
