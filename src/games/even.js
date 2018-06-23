import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils';

const isEven = number => number % 2 === 0;
const maxRandomInteger = 100;
const minRandomInteger = 1;

export default () => {
  const getGameData = () => {
    const question = getRandomInteger(minRandomInteger, maxRandomInteger);
    const answer = isEven(question) ? 'yes' : 'no';
    return cons(question, answer);
  };
  runGame({
    instruction: 'Answer "yes" if number even otherwise answer "no"',
    getGameData,
  });
};
