import { runGame } from '..';
import getRandomInteger from '../utils/get-random-integer';
import { maxRandomInteger, minRandomInteger } from '../constants';

const isEven = number => number % 2 === 0;

export default () => {
  runGame({
    instruction: 'Answer "yes" if number even otherwise answer "no"',
    getQuestion: () => getRandomInteger(minRandomInteger, maxRandomInteger),
    getAnswer: question => (isEven(Number.parseInt(question, 10)) ? 'yes' : 'no'),
  });
};
