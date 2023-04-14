import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getGreatestCommonDivisor,
  getIncorrectResult,
} from './index.js';

const getGameBrainGcd = () => {
  const name = getQuestion('May I have your name?');
  getPersonalGreeting(name);
  const rule = 'Find the greatest common divisor of given numbers.';
  console.log(rule);
  let correctAnswerCount = 0;
  let result = '';
  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = getRandomNumber(15) * 3;
    const secondNumber = getRandomNumber(12) * 4;
    const answer = getQuestion(`${'Question:'} ${firstNumber} & ${secondNumber}`);
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
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

export default getGameBrainGcd;
