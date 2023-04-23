import { getGame, roundCount } from '../index.js';
import getRandomNumber from '../utils.js';

const getSecretProgression = (firstNumber, step, numberCount) => {
  const result = [];
  for (let i = 1, number = firstNumber; i <= numberCount; i += 1, number += step) {
    result.push(number);
  }
  return result;
};
const getRoundProgression = () => {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    let result = [];
    const firstNumber = getRandomNumber(1, 50);
    const numberCount = getRandomNumber(6, 10);
    const step = getRandomNumber(2, 4);
    const progressions = getSecretProgression(firstNumber, step, numberCount);
    const index = getRandomNumber(0, progressions.length - 1);
    const correctAnswer = progressions[index];
    progressions[index] = '..';
    const question = progressions.join(' ');
    result.push(question);
    result.push(correctAnswer);
    rounds.push(result);
    result = [];
  }
  return rounds;
};
const getGameBrainProgression = () => {
  const rule = 'What number is missing in the progression?';
  const rounds = getRoundProgression();
  getGame(rule, rounds);
};

export default getGameBrainProgression;
