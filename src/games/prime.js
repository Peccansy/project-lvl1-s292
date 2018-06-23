import { cons } from 'hexlet-pairs';
import getRandomInteger from '../utils';
import runGame from '..';

const isPrime = (num) => {
  const iter = (digit, divider = 2) => {
    if (digit <= 2) return digit === 2;
    if (digit % divider === 0) return false;
    if (digit / 2 <= divider) return true;
    return iter(digit, divider + 1);
  };
  return iter(num);
};

export default () => {
  const getGameData = () => {
    const num = getRandomInteger(1, 100);
    const question = `${num}`;
    const answer = isPrime(num) ? 'yes' : 'no';
    return cons(question, answer);
  };
  runGame({
    instruction: 'Is this number prime?',
    getGameData,
  });
};
