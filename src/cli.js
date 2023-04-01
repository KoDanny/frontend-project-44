import readlineSync from 'readline-sync';

const getFirstQuestionsAboutName = () => {
  const name = readlineSync.question('What is your name?');
  return `${'Hello'}, ${name}!`;
};

export default getFirstQuestionsAboutName;

