import readlineSync from 'readline-sync';

const roundCount = 3;

const runGame = (description, generateRoundFunc) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question(`${'May I have your name?'} `);
  console.log(`${'Hello'}, ${name}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = generateRoundFunc();
    const answer = readlineSync.question(`${'Question:'} ${question}\n${'Your answer:'} `);
    const isCorrect = answer.toLowerCase() === correctAnswer;
    if (!isCorrect) {
      console.log(`'${answer}' ${'is wrong answer ;(.'} ${'Correct answer was'} '${correctAnswer}'.\n${"Let's try again"}, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`${'Congratulations'}, ${name}!`);
};

export default runGame;
