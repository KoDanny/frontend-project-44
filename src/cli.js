import readlineSync from 'readline-sync';

export const getQuestion = (question) => {
  const answer = readlineSync.question(`${question}\n${'Your answer:'} `);
  return answer;
};

export const getGreeting = (text) => {
  console.log(text);
};

export const getPersonalGreeting = (name) => {
  console.log(`${'Hello'}, ${name}!`);
};

export const getCongratulation = (name) => {
  const result = `${'Congratulations'}, ${name}!`;
  console.log(result);
};

export const getRandomNumber = (max) => Math.round(Math.random() * max);
