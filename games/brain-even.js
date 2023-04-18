#!/usr/bin/env node
import {
  getPersonalGreeting,
  getQuestion,
  getRandomNumber,
  getCongratulation,
  isCorrect,
  getRule,
} from '../src/index.js';

const getGameBrainEven = (roundCount = 3) => {
  const name = getPersonalGreeting('May I have your name?');
  getRule('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  for (let i = 1; i <= roundCount; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const answer = getQuestion(`${randomNumber}`).toLowerCase();
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const result = isCorrect(answer, correctAnswer, name);
    if (result) {
      correctAnswerCount += 1;
    } else {
      break;
    }
    getCongratulation(name, correctAnswerCount, roundCount);
  }
};

export default getGameBrainEven;
