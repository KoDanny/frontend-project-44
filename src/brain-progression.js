import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getProgression,
  getIncorrectResult,
} from './index.js';

const getGameBrainProgression = () => {
  const name = getQuestion('May I have your name?');
  getPersonalGreeting(name);
  const rule = 'What number is missing in the progression?';
  console.log(rule);
  let correctAnswerCount = 0;
  const roundCount = 3;
  let result = '';
  for (let i = 1; i <= roundCount; i += 1) {
    const firstNumber = getRandomNumber(0, 50);
    const numberCount = 10;
    const step = getRandomNumber(2, 5);
    const progression = getProgression(firstNumber, step, numberCount);
    const numbers = progression.split(' ');
    const index = getRandomNumber(1, numbers.length - 1);
    const secretNumber = numbers[index];
    const progressionSecret = progression.replace(secretNumber, '..');
    const answer = getQuestion(`${'Question:'} ${progressionSecret}`);
    const correctAnswer = secretNumber;
    if (isCorrect(answer, correctAnswer)) {
      result = 'Correct!';
      console.log(result);
      correctAnswerCount += 1;
    } else if (!isCorrect(answer, correctAnswer)) {
      getIncorrectResult(answer, name, correctAnswer);
      break;
    }
    if (correctAnswerCount === 3) {
      getCongratulation(name);
    }
  }
};

export default getGameBrainProgression;
