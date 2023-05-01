import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;

const getSecretProgression = (start, step) => {
  const result = [];
  for (let i = 1, number = start; i <= lengthProgression; i += 1, number += step) {
    result.push(number);
  }
  return result;
};

const getRoundBrainProgression = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 4);
  const progressions = getSecretProgression(start, step);
  const index = getRandomNumber(0, progressions.length - 1);
  const correctAnswer = `${progressions[index]}`;
  progressions[index] = '..';
  const question = progressions.join(' ');
  return [question, correctAnswer];
};

export default () => runGame(description, getRoundBrainProgression);
