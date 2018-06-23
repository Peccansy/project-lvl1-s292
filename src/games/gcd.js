import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInteger from '../utils';

const maxRandomInteger = 100;
const minRandomInteger = 1;
const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export default () => {
  const getGameData = () => {
    const num1 = getRandomInteger(minRandomInteger, maxRandomInteger);
    const num2 = getRandomInteger(minRandomInteger, maxRandomInteger);
    const question = `${num1} ${num2}`;
    const answer = `${gcd(num1, num2)}`;
    return cons(question, answer);
  };
  runGame({
    instruction: 'Find the greatest common divisor of given numbers.',
    getGameData,
  });
};
