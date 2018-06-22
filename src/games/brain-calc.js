import { runGame } from '..';
import getRandomInteger from '../utils/get-random-integer';
import { maxRandomInteger, minRandomInteger } from '../constants';

const operationsMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export default () => {
  const getQuestion = () => {
    const operations = Object.keys(operationsMap);
    const initialIndex = 0;
    const firstOperand = getRandomInteger(minRandomInteger, maxRandomInteger);
    const secondOperand = getRandomInteger(minRandomInteger, maxRandomInteger);
    return `${firstOperand} ${operations[getRandomInteger(initialIndex, operations.length)]} ${secondOperand}`;
  };
  const getAnswer = (question) => {
    const [a, operation, b] = question.split(' ');
    const firstOperand = Number.parseInt(a, 10);
    const secondOperand = Number.parseInt(b, 10);
    return `${operationsMap[operation](firstOperand, secondOperand)}`;
  };
  runGame({
    instruction: 'What is the result of the expression?',
    getQuestion,
    getAnswer,
  });
};
