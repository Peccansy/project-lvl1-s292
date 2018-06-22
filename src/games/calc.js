import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils/get-random-integer';

const operationsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const maxRandomInteger = 100;
const minRandomInteger = 1;

export default () => {
  const getGameData = () => {
    const operations = Object.keys(operationsMap);
    const initialIndex = 0;
    const firstOperand = getRandomInteger(minRandomInteger, maxRandomInteger);
    const secondOperand = getRandomInteger(minRandomInteger, maxRandomInteger);
    const operation = operations[getRandomInteger(initialIndex, operations.length)];
    const question = `${firstOperand} ${operation} ${secondOperand}`;
    const answer = `${operationsMap[operation](firstOperand, secondOperand)}`;

    return cons(question, answer);
  };
  runGame({
    instruction: 'What is the result of the expression?',
    getGameData,
  });
};
