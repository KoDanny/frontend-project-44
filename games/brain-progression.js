import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getProgression,
  getRule,
} from '../src/index.js';

const getGameBrainProgression = (roundCount = 3, progressionLenght = 10) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('What number is missing in the progression?');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const firstNumber = getRandomNumber(0, 50);
    const step = getRandomNumber(1, 6);
    const progressions = getProgression(firstNumber, step, progressionLenght);
    const index = getRandomNumber(0, progressions.length - 1);
    const correctAnswer = progressions[index];
    progressions[index] = '..';
    const progressionSecret = progressions.join(' ');
    const answer = getQuestion(`${progressionSecret}`);
    const result = isCorrect(+answer, +correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGameBrainProgression;
