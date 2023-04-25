import readlineSync from 'readline-sync';

export const roundCount = 3;

export const getGame = (rule, rounds) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(`${'May I have your name?'} `);
  console.log(`${'Hello'}, ${name}!`);
  console.log(rule);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = rounds[i];
    const answer = readlineSync.question(`${'Question:'} ${question}\n${'Your answer:'} `);
    const isCorrect = answer.toLowerCase() === correctAnswer;
    if (!isCorrect) {
      return console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'.\n${"Let's try again"}, ${name}!`);
    }
    console.log('Correct!');
  }
  return console.log(`${'Congratulations'}, ${name}!`);
};
