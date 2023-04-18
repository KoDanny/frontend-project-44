import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getIncorrectResult,
  doMath,
} from './index.js';

const getGameBrainCalc = () => {
  const name = getQuestion('May I have your name?');
  getPersonalGreeting(name);
  const rule = 'What is the result of the expression?';
  console.log(rule);
  let correctAnswerCount = 0;
  let result = '';
  for (let i = 1; i <= 3; i += 1) {
    const firstRandomNumber = getRandomNumber(0, 25);
    const secondRandomNumber = getRandomNumber(0, 10);
    const arrayOperators = ['+', '-', '*'];
    const index = getRandomNumber(0, arrayOperators.length - 1);
    const operator = arrayOperators[index];
    const answer = getQuestion(`${'Question:'} ${firstRandomNumber} ${operator} ${secondRandomNumber}`);
    const correctAnswer = doMath(firstRandomNumber, operator, secondRandomNumber);
    if (isCorrect(answer, correctAnswer)) {
      result = 'Correct!';
      console.log(result);
      correctAnswerCount += 1;
    } else if (!isCorrect(answer, correctAnswer)) {
      getIncorrectResult(answer, name, correctAnswer);
      break;
    }
    if (correctAnswerCount === 3) {
      result = getCongratulation(name);
    }
  }
};

export default getGameBrainCalc;
