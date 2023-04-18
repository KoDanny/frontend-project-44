import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getProgression,
  getIncorrectResult,
  getRule,
} from './index.js';

const getGameBrainProgression = (roundCount = 3, progressionLenght = 10) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('What number is missing in the progression?');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const firstNumber = getRandomNumber(0, 50);
    const step = getRandomNumber(2, 5);
    const progression = getProgression(firstNumber, step, progressionLenght);
    const numbers = progression.split(' ');
    const index = getRandomNumber(1, numbers.length - 1);
    const secretNumber = numbers[index];
    const progressionSecret = progression.replace(secretNumber, '..');
    const answer = getQuestion(`${progressionSecret}`);
    const correctAnswer = secretNumber;
    const result = isCorrect(answer, correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGameBrainProgression;
