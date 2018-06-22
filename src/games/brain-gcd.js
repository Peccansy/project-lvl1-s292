import { runGame } from '..';
import getRandomInteger from '../utils/get-random-integer';
import { maxRandomInteger, minRandomInteger } from '../constants';

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

export default () => {
  const getQuestion = () =>
    `${getRandomInteger(minRandomInteger, maxRandomInteger)} ${getRandomInteger(minRandomInteger, maxRandomInteger)}`;
  const getAnswer = (question) => {
    const [num1, num2] = question.split(' ').map(n => Number.parseInt(n, 10));
    return `${gcd(num1, num2)}`;
  };
  runGame({
    instruction: 'Find the greatest common divisor of given numbers.',
    getQuestion,
    getAnswer,
  });
};
