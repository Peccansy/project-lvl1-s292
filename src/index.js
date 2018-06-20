import readlineSync from 'readline-sync';
import { getQuestion, getAnswer, getGameInstruction } from './games';

const maxIterationCount = 3;

export const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
};

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(getGameInstruction(game));
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameIter = (iterationCount) => {
    if (iterationCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const question = getQuestion(game)();
    const expectedAnswer = getAnswer(game)(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer === answer) {
      console.log('Correct!');
      gameIter(iterationCount - 1);
    } else {
      console.log(`'${answer}' is is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
    }
  };
  gameIter(maxIterationCount);
};
