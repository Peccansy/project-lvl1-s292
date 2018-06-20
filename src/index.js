import readlineSync from 'readline-sync';

const printWelcomeMessage = () => console.log('Welcome to the Brain Games!');

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = name => console.log(`Hello, ${name}!\n`);

const printCongratulationsMessage = name => console.log(`Congratulations, ${name}!`);

const printLooseMessage = name => console.log(`Let's try again, ${name}`);

const printIncorrentAnswerMessage = (wrong, rigth) => {
  console.log(`'${wrong}' is is wrong answer ;(. Correct answer was '${rigth}'.`);
};

export const brainGames = () => {
  printWelcomeMessage();
  console.log('');
  greetUser(getUserName());
};

export const evenGame = () => {
  const MAX_ITERATION_COUNT = 3;
  const MIN_INTEGER = 1;
  const MAX_INTEGER = 100;
  let iterationCount = 0;

  const getRandomInteger = () => MIN_INTEGER + Math.floor(Math.random() * MAX_INTEGER);

  printWelcomeMessage();
  console.log('Answer "yes" if number even otherwise answer "no"\n');
  const userName = getUserName();
  greetUser(userName);
  const gameIter = () => {
    if (iterationCount === MAX_ITERATION_COUNT) {
      printCongratulationsMessage(userName);
      return;
    }

    const currentNumber = getRandomInteger();
    const expectedAnswer = currentNumber % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${currentNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (expectedAnswer === answer) {
      console.log('Correct!');
      iterationCount += 1;
      gameIter();
    } else {
      printIncorrentAnswerMessage(answer, expectedAnswer);
      printLooseMessage(userName);
    }
  };
  gameIter();
};
