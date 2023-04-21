import readlineSync from 'readline-sync';

const getQuestion = (question) => {
  const answer = readlineSync.question(`${'Question:'} ${question}\n${'Your answer:'} `);
  return answer;
};
const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const question = 'May I have your name?';
  const name = readlineSync.question(`${question} `);
  console.log(`${'Hello'}, ${name}!`);
  return name;
};
const getCongratulation = (name, correctAnswerCount, roundCount) => {
  if (correctAnswerCount === roundCount) {
    const result = `${'Congratulations'}, ${name}!`;
    console.log(result);
  }
};
const isCorrect = (answer, correctAnswer, name) => {
  let result;
  if (answer.toLowerCase() === correctAnswer || Number(answer) === correctAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'.\n${"Let's try again"}, ${name}!`);
    result = false;
  }
  return result;
};
const getGame = (rule, rounds) => {
  const name = getGreeting();
  console.log(rule);
  let correctAnswerCount = 0;
  const roundCount = rounds.length;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = rounds[i];
    const answer = getQuestion(question);
    const roundResult = isCorrect(answer, correctAnswer, name);
    if (roundResult) {
      correctAnswerCount += 1;
    } else {
      break;
    }
  }
  getCongratulation(name, correctAnswerCount, roundCount);
};

export default getGame;
