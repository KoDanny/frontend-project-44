import readlineSync from 'readline-sync';

const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const question = 'May I have your name?';
  const name = readlineSync.question(`${question} `);
  console.log(`${'Hello'}, ${name}!`);
  return name;
};

export default getGreeting;
