import readlineSync from 'readline-sync';

const getQuestionsAboutName = () => {
  const name = readlineSync.question(`${'What is your name? '}`);
  return name;
};

export default getQuestionsAboutName;
