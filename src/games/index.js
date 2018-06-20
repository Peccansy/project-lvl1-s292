import { cons, car, cdr } from 'hexlet-pairs';

export const minInteger = 1;
export const maxInteger = 100;

const makeGameData = (question, expectedAnswer) => cons(question, expectedAnswer);
const makeGame = (instuction, data) => cons(instuction, data);
export const getGameInstruction = game => car(game);
export const getQuestion = game => car(cdr(game));
export const getAnswer = game => cdr(cdr(game));

const getRandomInteger = (min, max) => min + Math.floor(Math.random() * max);
const isEven = number => number % 2 === 0;

const operationsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const evenGame = makeGame(
  'Answer "yes" if number even otherwise answer "no"',
  makeGameData(() => getRandomInteger(minInteger, maxInteger), question => (isEven(question) ? 'yes' : 'no')),
);

export const brainCalc = makeGame(
  'What is the result of the expression?',
  makeGameData(
    () => {
      const operations = Object.keys(operationsMap);
      const initialIndex = 0;
      const firstOperand = getRandomInteger(minInteger, maxInteger);
      const secondOperand = getRandomInteger(minInteger, maxInteger);
      return `${firstOperand} ${operations[getRandomInteger(initialIndex, operations.length)]} ${secondOperand}`;
    },
    (question) => {
      const [a, operation, b] = question.split(' ');
      const firstOperand = Number.parseInt(a, 10);
      const secondOperand = Number.parseInt(b, 10);
      return `${operationsMap[operation](firstOperand, secondOperand)}`;
    },
  ),
);
