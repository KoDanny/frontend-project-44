import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const numberCount = getRandomNumber(6, 12);

const getSecretProgression = (start, step) => {
  const result = [];
  for (let i = 1, number = start; i <= numberCount; i += 1, number += step) {
    result.push(number);
  }
  return result;
};

const getRoundBrainProgression = () => {
  const firstNumber = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 4);
  const progressions = getSecretProgression(firstNumber, step);
  const index = getRandomNumber(0, progressions.length - 1);
  const correctAnswer = `${progressions[index]}`;
  progressions[index] = '..';
  const question = progressions.join(' ');
  return [question, correctAnswer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds.push(getRoundBrainProgression());
  }
  getGame(description, rounds);
};
