import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const maxIterationCount = 3;

export default ({ instruction, getGameData }) => {
  console.log('Welcome to the Brain Games!');
  console.log(instruction);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameIter = (iterationCount) => {
    if (iterationCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const gameData = getGameData();
    const question = car(gameData);
    const expectedAnswer = cdr(gameData);
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
